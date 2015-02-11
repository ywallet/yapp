(function(){
	"use strict";

	angular
		.module("yapp.services")
		.factory("DSUser", DSUser);

	DSUser.$inject = ["$rootScope", "$localStorage", "$http", "BASE_ADDRESS"];

	function DSUser($rootScope, $localStorage, $http, BASE_ADDRESS) {
		var yUser = null,
            cacheKey = "yUser-cache";

		var service = {
            auth: null,
            getUser: getUser,
			putUser: putUser,
			rmUser: rmUser,
			loadUser: loadUser,
            updateUser: updateUser
		}

		return service;


        ////////////////////


		function getUser() {
			return yUser || loadUser();
		}


		function loadUser() {
			var user = $localStorage.getObject(cacheKey);
            if (yUser == null) {
                yUser = user;
                $rootScope.yUser = user;
            }
            return user;
		}


		function putUser(user) {
			$localStorage.setObject(cacheKey, user);
			$rootScope.yUser = user;
            yUser = user;
		}


		function rmUser() {
			$localStorage.setObject(cacheKey, null);
            $rootScope.yUser = null;
            yUser = null;
		}


        function updateUser(onSuccess, onError) {
            var role = yUser.role,
                url = role == "parent" ? "/managers" : "/children";
            $http.get(BASE_ADDRESS + url)
            .success(function (data) {
                var i, len, counter = 0;
                data.role = role;
                if (role == "parent" && data.children == null) {
                    data.children = [];
                    for (i = 0, len = data.children_ids.length; i < len; ++i) {
                        data.children.push({
                            id: data.children_ids[i],
                            name: "???"
                        });
                        (function (k, id) {
                            $http.get("http://ywallet.co/children/" + id)
                            .success(function (child_data) {
                                data.children[k].name = child_data.name;
                                ++counter;
                                if (counter === len) {
                                    putUser(data);
                                    onSuccess(data);
                                }
                            })
                            .error(function (error_data) {
                                console.error("error fetching child info", error_data);
                                ++counter;
                                if (counter === len) {
                                    putUser(data);
                                    onSuccess(data);
                                }
                            });
                        })(i, data.children_ids[i]);
                    }
                }
                // putUser(data);
                // onSuccess.apply(this, arguments);
            })
            .error(onError);
        }


        function getChild(child_id, data, onSuccess, onError) {
            
        }
	}

})()
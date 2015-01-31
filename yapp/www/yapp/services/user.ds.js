(function(){
	"use strict";

	angular
		.module("yapp.services")
		.factory("DSUser", DSUser);

	DSUser.$inject = ["$rootScope", "$localStorage"];

	function DSUser($rootScope, $localStorage) {
		var cacheKey = "yUser-cache";

		var service = {
			putUser: putUser,
			rmUser: rmUser,
			getUser: getUser
		}

		return service;


        ////////////////////


		function getUser() {
			var user = $localStorage.getObject(cacheKey);
            if ($rootScope.yUser == null) {
                $rootScope.yUser = user;
            }
            return user;
		}


		function putUser(user) {
			$localStorage.setObject(cacheKey, user);
			$rootScope.yUser = user;
		}


		function rmUser() {
			$localStorage.setObject(cacheKey, null);
            $rootScope.yUser = null;
		}
	}

})()
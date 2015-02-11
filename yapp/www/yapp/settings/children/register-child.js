(function() {
    "use strict";

    angular
        .module("yapp.settings")
        .controller("RegisterChild", RegisterChild);

    RegisterChild.$inject = ["$scope", "$rootScope", "$http", "StateRouter", "DSUser"];

    function RegisterChild($scope, $rootScope, $http, StateRouter, DSUser) {
        $scope.blocked = false;
        $scope.childData = {
            name: "",
            email: "",
            pass: "",
            cpass: ""
        };

        $scope.registerChild = registerChild;

        ////////////////////

        function registerChild() {
            /*$rootScope.yUser = {
                name: $scope.coinData.name,
                email: $scope.coinData.email
            };
            StateRouter.goAndForget("yapp.dashboard");*/
            var data;
            if ($scope.childData.password !== $scope.childData.cpass) {
                return;
            }
            data = {
                child: {
                    //manager_id: $rootScope.yUser.id,
                    account_attributes: {
                        name: $scope.childData.name,
                        email: $scope.childData.email,
                        password: $scope.childData.password,
                        password_confirmation: $scope.childData.cpass
                    }
                }
            };
            // register the user
            $http.post("https://ywallet.co/children", data)
                .success(onRegisterSuccess)
                .error(onRegisterError);
            $scope.blocked = true;
        }

        function onRegisterSuccess(data, status, headers, config) {
            var user = $rootScope.yUser;
            // data is an object with child info: id, ...
            console.log("CHILD REGISTER", data);
            user.children_ids.push(data.id);
            user.children.push(data);
            DSUser.putUser(user);
            StateRouter.goAndForget("yapp.childrenSettings.index");
        }

        function onRegisterError(data, status, headers, config) {
            if (data && data.errors) {
                console.error("register error", data.errors);
            }
            StateRouter.goAndForget("yapp.childrenSettings.index");
        }
    }
})();
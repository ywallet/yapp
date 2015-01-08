(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("Register", Register);

    Register.$inject = ["$scope", "$rootScope", "StateRouter", "Authenticator"];

    function Register($scope, $rootScope, StateRouter, Authenticator) {
        $scope.registerData = {
            email: "",
            password: "",
            cpass: "",
            agrees: false
        };

        $scope.doRegister = doRegister;

        ////////////////////

        function doRegister() {
            if ($scope.registerData.password !== $scope.registerData.cpass) {
                return;
            }
            if (!$scope.registerData.agrees) {
                return;
            }
            $scope.registerData.password = "";
            $scope.registerData.cpass = "";
            // TODO request to backend
            handleResponse();
        }

        function handleResponse() {
            Authenticator.authenticate("coinbase", onServiceSuccess, onServiceError);
        }


        function onServiceSuccess(result) {
            window.localStorage.setItem("access_token", result.access_token);
            $rootScope.yUser = {
                name: "yUser",
                role: "parent",
                email: "yUser@email.com"
            };
            StateRouter.goAndForget("yapp.dashboard");
        }

        function onServiceError(error) {
            console.log(error);
            // TODO remove following code, development only
            onServiceSuccess({
                "access_token": "...",
                "refresh_token": "...",
                "token_type": "bearer",
                "expire_in": 7200,
                "scope": "universal"
            });
        }
    }
})();
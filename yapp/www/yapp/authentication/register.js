(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("Register", Register);

    Register.$inject = ["$scope", "StateRouter", "Authenticator", "DSUser"];

    function Register($scope, StateRouter, Authenticator, DSUser) {
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
            DSUser.putUser({
                name: "yUser",
                role: "parent",
                email: "yUser@email.com"
            });
            // window.localStorage.setItem("access_token", result.access_token);
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
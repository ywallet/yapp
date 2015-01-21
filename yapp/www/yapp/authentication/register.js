(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("Register", Register);

    Register.$inject = ["$scope", "$http", "StateRouter", "Authenticator", "DSUser"];

    function Register($scope, $http, StateRouter, Authenticator, DSUser) {
        var userData = null;

        $scope.registerData = {
            email: "",
            password: "",
            cpass: "",
            agrees: false
        };

        $scope.doRegister = doRegister;

        ////////////////////

        function doRegister() {
            var data;
            if ($scope.registerData.password !== $scope.registerData.cpass) {
                return;
            }
            if (!$scope.registerData.agrees) {
                return;
            }
            data = {
                email: $scope.registerData.email,
                password: $scope.registerData.password,
                plan: "FREE"
            };
            $scope.registerData.password = "";
            $scope.registerData.cpass = "";
            // register the user
            $http.post("https://ywallet.herokuapp.com/managers", data)
                .success(onRegisterSuccess)
                .error(onRegisterError);
        }

        function onRegisterSuccess(data, status, headers, config) {
            userData = data;
            // proceed to coinbase login
            Authenticator.authenticate("coinbase", onServiceSuccess, onServiceError);
        }

        function onRegisterError(data, status, headers, config) {
            if (data && data.errors) {
                console.error("register error", data.errors);
                StateRouter.goAndForget("authentication.index");
            } else {
                // TODO development only
                onRegisterSuccess({
                    name: "yUser",
                    role: "parent",
                    email: "yUser@email.com"
                }, status, headers, config);
            }
        }


        function onServiceSuccess(code) {
            // send code to exchange for token
            $http.post("https://ywallet.herokuapp.com/bitcoin_accounts", {
                authentication_code: code
            })
                .success(onTokenSuccess)
                .error(onTokenError);
        }

        function onServiceError(error) {
            console.error(error);
            // TODO remove following code, development only
            onTokenSuccess(null, null, null, null);
        }


        function onTokenSuccess(data, status, headers, config) {
            DSUser.putUser(userData);
            // window.localStorage.setItem("access_token", result.access_token);
            StateRouter.goAndForget("yapp.dashboard");
        }

        function onTokenError(data, status, headers, config) {
            if (data && data.errors) {
                console.error("token exchange error", data.errors);
                StateRouter.goAndForget("authentication.index");
            } else {
                // TODO development only
                onTokenSuccess(null, status, headers, config);
            }
        }
    }
})();
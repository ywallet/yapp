(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("SignIn", SignIn);

    SignIn.$inject = ["$scope", "$http", "StateRouter", "DSUser"];

    function SignIn($scope, $http, StateRouter, DSUser) {
        $scope.signinData = {
            email: "",
            password: ""
        };

        $scope.doSignIn = doSignIn;

        ////////////////////

        function doSignIn() {
            var data = {
                email: $scope.signinData.email,
                password: $scope.signinData.password
            };
            $scope.signinData.password = "";
            $http.post("https://ywallet.herokuapp.com/managers", data)
                .success(onSignInSuccess)
                .error(onSignInError);
        }


        function onSignInSuccess(data, status, headers, config) {
            DSUser.putUser({
                name: "yUser",
                email: $scope.signinData.email
            });
            StateRouter.goAndForget("yapp.dashboard");
        }

        function onSignInError(data, status, headers, config) {
            if (data && data.errors) {
                console.error("error authenticating", data.errors);
            } else {
                // TODO development only
                onSignInSuccess(data, status, headers, config);
            }
        }
    }
})();
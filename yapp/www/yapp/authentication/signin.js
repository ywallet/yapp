(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("SignIn", SignIn);

    SignIn.$inject = ["$scope", "StateRouter", "DSUser"];

    function SignIn($scope, StateRouter, DSUser) {
        $scope.signinData = {
            email: "",
            password: ""
        };

        $scope.doSignIn = doSignIn;

        ////////////////////

        function doSignIn() {
            $scope.signinData.password = "";
            DSUser.putUser({
                name: "yUser",
                email: $scope.signinData.email
            });
            StateRouter.goAndForget("yapp.dashboard");
        }
    }
})();
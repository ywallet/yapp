(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("SignIn", SignIn);

    SignIn.$inject = ["$scope", "$rootScope", "StateRouter"];

    function SignIn($scope, $rootScope, StateRouter) {
        $scope.signinData = {
            email: "",
            password: ""
        };

        $scope.doSignIn = doSignIn;

        ////////////////////

        function doSignIn() {
            $scope.signinData.password = "";
            $rootScope.yUser = {
                name: "yUser",
                email: $scope.signinData.email
            };
            StateRouter.goAndForget("yapp.dashboard");
        }
    }
})();
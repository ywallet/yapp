(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("SignIn", SignIn);

    SignIn.$inject = ["$scope", "$rootScope", "$state"];

    function SignIn($scope, $rootScope, $state) {
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
            $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
            $state.go("yapp.dashboard");
        }
    }
})();
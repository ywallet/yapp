(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("SignIn", SignIn);

    SignIn.$inject = ["$scope", "$rootScope", "$state"];

    function SignIn($scope, $rootScope, $state) {
        $scope.loginData = {
            email: "",
            password: ""
        };

        $scope.doLogin = doLogin;

        ////////////////////

        function doLogin() {
            $scope.loginData.password = "";
            $rootScope.yUser = {
                name: "yUser",
                email: $scope.loginData.email
            };
            $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
            $state.go("yapp.dashboard");
        }
    }
})();
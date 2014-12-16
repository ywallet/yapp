(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("AuthenticationRouter", AuthenticationRouter);

    AuthenticationRouter.$inject = ["$scope", "$rootScope", "$state"];

    function AuthenticationRouter($scope, $rootScope, $state) {
        $scope.goToSignIn = goToSignIn;
        $scope.goToRegister = goToRegister;

        ////////////////////

        function goToSignIn() {
            $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
            $state.go("authentication.signin");
        }

        function goToRegister() {
            $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
            $state.go("authentication.register");
        }
    }
})();
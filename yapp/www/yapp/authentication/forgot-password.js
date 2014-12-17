(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("ForgotPassword", ForgotPassword);

    ForgotPassword.$inject = ["$scope", "$rootScope", "$state"];

    function ForgotPassword($scope, $rootScope, $state) {
        $scope.recoveryData = {
            email: ""
        };

        $scope.doRecovery = doRecovery;

        ////////////////////

        function doRecovery() {
            $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
            $state.go("yapp.dashboard");
        }
    }
})();
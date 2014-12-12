(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .controller('SignOut', SignOut)

    SignOut.$inject = ["$scope", "$state", "$rootScope"];
    function SignOut($scope, $state, $rootScope) {
        $scope.doSignOut = doSignOut;

        ////////////////////

        function doSignOut() {
            $rootScope.yUser = null;
            $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
            $state.go("home");
        }
    }

})();
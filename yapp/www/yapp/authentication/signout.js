(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .controller('SignOut', SignOut)

    SignOut.$inject = ["$scope", "$state"];
    function SignOut($scope, $state) {
        $scope.doSignOut = doSignOut;

        ////////////////////

        function doSignOut() {
            // $state.clearHistory();
            // $state.go("authentication");
        }
    }

})();
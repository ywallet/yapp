(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .controller('SignOut', SignOut)

    SignOut.$inject = ["$scope", "$state"];
    function SignOut($scope, $state) {
        $scope.signOut = doSignOut;

        ////////////////////

        function doSignOut() {
            //$state.clearHistory();
            $state.go("authentication");
        }
    }

})();
(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .controller('SignOut', SignOut);

    SignOut.$inject = ["$scope", "$rootScope", "StateRouter"];
    function SignOut($scope, $rootScope, StateRouter) {
        $scope.doSignOut = doSignOut;

        ////////////////////

        function doSignOut() {
            $rootScope.yUser = null;
            window.localStorage.removeItem("access_token");
            StateRouter.goAndForget("home");
        }
    }

})();
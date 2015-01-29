(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .controller('SignOut', SignOut);

    SignOut.$inject = ["$scope", "$auth", "StateRouter", "DSUser"];
    function SignOut($scope, $auth, StateRouter, DSUser) {
        $scope.doSignOut = doSignOut;

        ////////////////////

        function doSignOut() {
            $auth.signOut()
                .then(signOutCallback)
                .catch(signOutCallback);
        }

        function signOutCallback(resp) {
            DSUser.rmUser();
            // window.localStorage.removeItem("access_token");
            StateRouter.goAndForget("home");
        }
    }

})();
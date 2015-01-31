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
            $auth.signOut();
                //.then(function () {console.log("SIGN OUT SUCCESS");})
                //.catch(function() {console.log("SIGN OUT FAILURE");})
                //.finally(signOutCallback);
        }

        function signOutCallback(resp) {
            console.log("SIGN OUT FINALLY", DSUser.getUser());
            DSUser.rmUser();
            console.log("USER REMOVED", DSUser.getUser());
            // window.localStorage.removeItem("access_token");
            StateRouter.goAndForget("home");
        }
    }

})();
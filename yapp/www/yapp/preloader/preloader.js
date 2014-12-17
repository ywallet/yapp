(function() {
	'use strict';

    angular
		.module('yapp')
		.controller('Preloader', Preloader)

    Preloader.$inject = ["$rootScope", "StateRouter"];

	function Preloader($rootScope, StateRouter) {
        $rootScope.yUser = null;

        detectSession();

        ////////////////////

        function detectSession() {
            // automatic login
            /*$rootScope.yUser = {
                name: "yUser",
                email: "yUser@yWallet.com"
            };*/

            if ($rootScope.yUser != null) {
                StateRouter.goAndForget("yapp.dashboard");
            } else {
                StateRouter.goAndForget("authentication.index");
            }
        }
	}
})();
(function() {
	'use strict';

    angular
		.module('yapp')
		.controller('Preloader', Preloader)

    Preloader.$inject = ["$rootScope", "$state"];

	function Preloader($rootScope, $state) {
        $rootScope.yUser = null;

        detectSession();

        ////////////////////

        function detectSession() {
            // automatic login
            $rootScope.yUser = {
                name: "yUser",
                email: "yUser@yWallet.com"
            };

            if ($rootScope.yUser != null) {
                $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
                $state.go("yapp.dashboard");
            } else {
                $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
                $state.go("authentication.index");
            }
        }
	}
})();
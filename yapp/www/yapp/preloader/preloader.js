(function() {
	'use strict';

    angular
		.module('yapp')
		.controller('Preloader', Preloader)

    Preloader.$inject = ["$rootScope", "$auth", "StateRouter", "DSCacheFactory", "DSUser", "DSNotifications", "DSavings"];

	function Preloader($rootScope, $auth, StateRouter, DSCacheFactory, DSUser, DSNotifications, DSavings) {
        var promise = $rootScope._authPromise || $auth.validateUser();

        DSUser.getUser();
        delete $rootScope._authPromise;
        promise.then(onSuccess).catch(onFailure);

        ////////////////////

        function onSuccess() {
            if ($rootScope.yUser == null) {
                // not supposed to happen
                // happens if you remove the `delete $rootScope._authPromise;` above.
                console.error("Valid auth but no user.");
                // get user
            } else {
                // preloadData();
                StateRouter.goAndForget("yapp.dashboard");
            }
        }

        function onFailure(resp) {
            console.log("no authentication", resp.errors);
            StateRouter.goAndForget("authentication.index");
        }


        function preloadData() {
            // Caches - Define Offline mode
            var localCache = DSCacheFactory.get('localCache');
            localCache.setOptions({
                onExpire: function(key, value) {
                    /*var check_connection = undefined;

                    switch(key) {
                        case DSavings.getCacheKey() : check_connection = DSavings.getSavings(true); break;
                    }

                    check_connection
                        .then(function() {

                        }, function() {
                            localCache.put(key, value);
                        });*/
                }
            });
            DSNotifications.getNotifications(); //$rootScope.notifications = []; $rootScope.numNewNotifications = 0;
        }
	}
})();
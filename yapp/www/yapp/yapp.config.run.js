(function () {
    
    angular
        .module("yapp")
		.run(runFunction);

    runFunction.$inject = ["$ionicPlatform", "$q", "DSCacheFactory", "$rootScope", "$auth", "StateRouter", "DSUser"];

    function runFunction($ionicPlatform, $q, DSCacheFactory, $rootScope, $auth, StateRouter, DSUser) {
        $rootScope.$on("auth:validation-success", function() {
            console.log("VALIDATION SUCCESS", arguments);
        });
        $rootScope.$on("auth:login-success", function() {
            console.log("LOGIN SUCCESS", arguments);
        });
        $rootScope.$on("auth:login-error", function() {
            console.log("LOGIN ERROR", arguments);
        });
        $rootScope.$on("auth:registration-email-success", function() {
            console.log("REGISTRATION SUCCESS", arguments);
        });
        $rootScope.$on("auth:registration-email-error", function() {
            console.log("REGISTRATION ERROR", arguments);
        });

        $rootScope.$on("auth:validation-error", backToHome);
        $rootScope.$on("auth:invalid", backToHome);
        $rootScope.$on("auth:session-expired", backToHome);
        $rootScope.$on("auth:logout-success", backToHome);
        $rootScope.$on("auth:logout-error", backToHome);

        DSUser.getUser();
        // maybe use resolve in routes to check if there is user info and go to preloader if not

        if ($rootScope.yUser) {
            console.log("USER LOADED");
        } else {
            console.log("NO USER");
        }
        $rootScope._authPromise = $auth.validateUser();

        $ionicPlatform.ready(function() {
						setTimeout(function() {
							$cordovaSplashScreen.hide()
						}, 5000);
					
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            // caches for services
            /*
            Creating a new cache clears all saved data from previous runs.
            Creating a new static cache clears user data from previous run.
            If you refresh a page with an active session, user data will be lost,
            but you will keep the auth tokens, which don't use these caches.
            */
            if (DSCacheFactory.get("localCache") == null) {
                DSCacheFactory("localCache", {storageMode: "localStorage", maxAge: 5000, deleteOnExpire: "aggressive"});
            }
            if (DSCacheFactory.get("staticCache") == null) {
                DSCacheFactory("staticCache", {storageMode: "localStorage"});
            }
        });


        function backToHome() {
            console.log("invalid session", arguments);
            DSUser.rmUser();
            StateRouter.goAndForget("home");
        }
    }
})();
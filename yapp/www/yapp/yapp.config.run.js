(function () {
    
    angular
        .module("yapp")
		.config(configAngularTranslate)
        .run(runFunction);

	configAngularTranslate.$inject = ["$translateProvider"];
	function configAngularTranslate($translateProvider) {
		$translateProvider.translations('en', translations_en);
		$translateProvider.translations('pt', translations_pt);
		$translateProvider.translations('es', translations_es);
		$translateProvider.translations('fr', translations_fr);
		$translateProvider.translations('it', translations_it);
		$translateProvider.preferredLanguage('en');
		// console.log("$translateProvider initialized");
	}

    runFunction.$inject = ['$ionicPlatform', '$q', 'DSCacheFactory', 'DSNotifications', 'DSavings'];
    function runFunction($ionicPlatform, $q, DSCacheFactory, DSNotifications, DSavings) {

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
            DSCacheFactory('localCache', {storageMode: 'localStorage', maxAge: 5000, deleteOnExpire: 'aggressive'});
            DSCacheFactory('staticCache', {storageMode: 'localStorage'});

            // Caches - Define Offline mode
            var localCache = DSCacheFactory.get('localCache');
            localCache.setOptions({
                onExpire: function(key, value) {
                    var check_connection = undefined;

                    switch(key) {
                        case DSavings.getCacheKey() : check_connection = DSavings.getSavings(true); break;
                    }

                    check_connection
                        .then(function() {

                        }, function() {
                            localCache.put(key, value);
                        });
                }
            });           

            // init rootScope
            DSNotifications.getNotifications(); //$rootScope.notifications = []; $rootScope.numNewNotifications = 0;            
        });
    }  

})();
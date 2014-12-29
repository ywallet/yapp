(function () {
    
    angular
        .module("yapp")
        .run(runFunction);

    runFunction.$inject = ['$ionicPlatform', 'DSCacheFactory'];
    function runFunction($ionicPlatform, DSCacheFactory) {
        $ionicPlatform.ready(function() {
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
            DSCacheFactory('notificationsCache', {storageMode: 'localStorage', maxAge: 5000, deleteOnExpire: 'aggressive'});
            DSCacheFactory('staticCache', {storageMode: 'localStorage'});
        });
    }  

})();
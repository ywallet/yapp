(function() {
    'use strict';

    angular
        .module('yapp.settings')
        .config(defineRoutes);

    defineRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];
            
    function defineRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider.state("yapp.settings", {
            url: "/settings",
            views: {
                menuContent: {
                    templateUrl: "yapp/settings/settings.html",
                    controller: "Settings"
                }
            }
        });
    }

})();

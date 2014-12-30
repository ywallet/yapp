(function() {
    'use strict';

    angular
        .module('yapp.help')
        .config(defineRoutes);

    defineRoutes.$inject = ["$stateProvider"];
            
    function defineRoutes($stateProvider) {
        $stateProvider.state("yapp.help", {
            url: "/help",
            views: {
                menuContent: {
                    templateUrl: "yapp/help/help-menu.html"
                }
            }
        });
    }
})();

(function() {
    'use strict';

    angular
        .module('yapp.dashboard')
        .config(defineRoutes);

    defineRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];
            
    function defineRoutes($stateProvider, $urlRouterProvider) {
        $stateProvider.state("yapp.dashboard", {
            url: "/dashboard",
            views: {
                menuContent: {
                    templateUrl: "yapp/dashboard/dashboard.html",
                    controller: "Dashboard"
                }
            }
        });
    }

})();

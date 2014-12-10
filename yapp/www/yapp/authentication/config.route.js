(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .config(defineRoutes);

    defineRoutes.$inject = ["$stateProvider"];

    function defineRoutes($stateProvider) {
        $stateProvider.state("yapp.authentication", {
            url: "/authentication",
            views: {
                menuContent: {
                    templateUrl: "yapp/authentication/authentication.html",
                    controller: "Authentication"
                }
            }
        });    	
    }

})();

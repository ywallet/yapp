(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .config(defineRoutes);

    defineRoutes.$inject = ["$stateProvider"];

    function defineRoutes($stateProvider) {
        $stateProvider.state("authentication", {
            url: "/authentication",
            abstract: true,
            templateUrl: "yapp/authentication/authentication.html"
        }).state("authentication.index", {
            url: "",
            views: {
                authContent: {
                    templateUrl: "yapp/authentication/authentication-index.html"
                }
            }
        }).state("authentication.signin", {
            url: "/signin",
            views: {
                authContent: {
                    templateUrl: "yapp/authentication/signin.html",
                    controller: "Authentication"
                }
            }
        }).state("authentication.register", {
            url: "/register",
            views: {
                authContent: {
                    templateUrl: "yapp/authentication/register.html",
                    controller: "Authentication"
                }
            }
        }).state("yapp.signout", {
            url: "/signout",
            views: {
                menuContent: {
                    templateUrl: "yapp/authentication/signout.html",
                    controller: "SignOut"
                }
            }
        });    	
    }

})();

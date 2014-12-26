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
        }).state("yapp.accountSettings", {
            url: "/acc-settings",
            abstract: true,
            views: {
                menuContent: {
                    templateUrl: "yapp/settings/account/settings.html"
                }
            }
        }).state("yapp.accountSettings.index", {
            url: "",
            views: {
                accountSettings: {
                    templateUrl: "yapp/settings/account/settings-index.html"
                }
            }
        }).state("yapp.accountSettings.link", {
            url: "",
            views: {
                accountSettings: {
                    templateUrl: "yapp/settings/account/link-wallets.html"
                }
            }
        }).state("yapp.accountSettings.wallet", {
            url: "",
            views: {
                accountSettings: {
                    templateUrl: "yapp/settings/account/register-service.html"
                }
            }
        }).state("yapp.accountSettings.personal", {
            url: "",
            views: {
                accountSettings: {
                    templateUrl: "yapp/settings/account/personal-data.html"
                }
            }
        }).state("yapp.accountSettings.password", {
            url: "",
            views: {
                accountSettings: {
                    templateUrl: "yapp/settings/account/change-password.html"
                }
            }
        });
    }

})();

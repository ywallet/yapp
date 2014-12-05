(function () {
    angular
        .module("yapp")
        .config(configFunction);

    configFunction.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configFunction($stateProvider, $urlRouterProvider) {
        $stateProvider.state("yapp", {
            url: "/yapp",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: "Dashboard"
        }).state("yapp.allowances", {
            url: "/allowances",
            views: {
                menuContent: {
                    templateUrl: "js/allowances/allowances.html",
                    controller: "Allowances",
                    controllerAs: "vm"
                }
            }
        }).state("yapp.dashboard", {
            url: "/dashboard",
            views: {
                menuContent: {
                    templateUrl: "js/dashboard/dashboard.html",
                    controller: "Dashboard"
                }
            }
        }).state("yapp.history", {
            url: "/history",
            views: {
                menuContent: {
                    templateUrl: "js/history/history.html",
                    controller: "History"
                }
            }
        }).state("yapp.notifications", {
            url: "/notifications",
            views: {
                menuContent: {
                    templateUrl: "js/notifications/notifications.html",
                    controller: "Notifications"
                }
            }
        }).state("yapp.payments", {
            url: "/payments",
            views: {
                menuContent: {
                    templateUrl: "js/payments/payments.html",
                    controller: "Payments"
                }
            }
        }).state("yapp.savings", {
            url: "/savings",
            views: {
                menuContent: {
                    templateUrl: "js/savings/savings.html",
                    controller: "Savings"
                }
            }
        }).state("yapp.settings", {
            url: "/settings",
            views: {
                menuContent: {
                    templateUrl: "js/settings/settings.html",
                    controller: "Settings"
                }
            }
        }).state("yapp.playlists", {
            url: "/playlists",
            views: {
                menuContent: {
                    templateUrl: "templates/playlists.html",
                    controller: "PlaylistsCtrl"
                }
            }
        }).state("yapp.single", {
            url: "/playlists/:playlistId",
            views: {
                menuContent: {
                    templateUrl: "templates/playlist.html",
                    controller: "PlaylistCtrl"
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/yapp/dashboard");
    }
})();
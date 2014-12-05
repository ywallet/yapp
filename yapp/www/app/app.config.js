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
                    templateUrl: "app/allowances/allowances.html",
                    controller: "Allowances",
                    controllerAs: "vm"
                }
            }
        }).state("yapp.dashboard", {
            url: "/dashboard",
            views: {
                menuContent: {
                    templateUrl: "app/dashboard/dashboard.html",
                    controller: "Dashboard"
                }
            }
        }).state("yapp.history", {
            url: "/history",
            views: {
                menuContent: {
                    templateUrl: "app/history/history.html",
                    controller: "History"
                }
            }
        }).state("yapp.notifications", {
            url: "/notifications",
            views: {
                menuContent: {
                    templateUrl: "app/notifications/notifications.html",
                    controller: "Notifications"
                }
            }
        }).state("yapp.payments", {
            url: "/payments",
            views: {
                menuContent: {
                    templateUrl: "app/payments/payments.html",
                    controller: "Payments"
                }
            }
        }).state("yapp.savings", {
            url: "/savings",
            views: {
                menuContent: {
                    templateUrl: "app/savings/savings.html",
                    controller: "Savings"
                }
            }
        }).state("yapp.settings", {
            url: "/settings",
            views: {
                menuContent: {
                    templateUrl: "app/settings/settings.html",
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
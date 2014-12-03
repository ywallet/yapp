(function () {
    
    angular
        .module("yapp") 
        .config(configFunction);

    configFunction.$inject = ["$stateProvider", "$urlRouterProvider"];

    function configFunction($stateProvider, $urlRouterProvider) {
        $stateProvider.state("yapp", {
            url: "/yapp",
            abstract: true,
            templateUrl: "yapp/templates/menu.html",
            controller: "AppCtrl"
        }).state("yapp.search", {
            url: "/search",
            views: {
                menuContent: {
                    templateUrl: "yapp/templates/search.html"
                }
            }
        }).state("yapp.browse", {
            url: "/browse",
            views: {
                'menuContent': {
                    templateUrl: "yapp/templates/browse.html"
                }
            }
        }).state("yapp.playlists", {
            url: "/playlists",
            views: {
                'menuContent': {
                    templateUrl: "yapp/templates/playlists.html",
                    controller: "PlaylistsCtrl"
                }
            }
        }).state("yapp.single", {
            url: "/playlists/:playlistId",
            views: {
                'menuContent': {
                    templateUrl: "yapp/templates/playlist.html",
                    controller: "PlaylistCtrl"
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise("/yapp/playlists");
    }
})();
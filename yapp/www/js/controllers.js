(function () {
    angular.module('yapp.controllers', [])
           .controller('PlaylistsCtrl', PlaylistsCtrlFunction)
           .controller('PlaylistCtrl', PlaylistCtrlFunction)

    PlaylistCtrlFunction.$inject = ['$scope', '$stateParams'];
    function PlaylistCtrlFunction($scope, $stateParams) {
    };

    PlaylistsCtrlFunction.$inject = ['$scope'];
    function PlaylistsCtrlFunction($scope) {
      $scope.playlists = [
        { title: 'Reggae'   , id: 1 },
        { title: 'Chill'    , id: 2 },
        { title: 'Dubstep'  , id: 3 },
        { title: 'Indie'    , id: 4 },
        { title: 'Rap'      , id: 5 },
        { title: 'Cowbell'  , id: 6 }
      ];
    }
})();
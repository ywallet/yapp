(function () {
    angular.module('yapp.notifications', [])
           .controller('Notifications', Notifications)
    
    Notifications.$inject = ['$scope'];
    function Notifications($scope) {
      $scope.mesada = {};
    }
})();
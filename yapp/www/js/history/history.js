(function () {
    angular.module('yapp.history', [])
           .controller('History', History)
    
    History.$inject = ['$scope'];
    function History($scope) {
      $scope.mesada = {};
    }
})();
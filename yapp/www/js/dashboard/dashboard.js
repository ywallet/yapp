(function () {
    angular.module('yapp.dashboard', [])
           .controller('Dashboard', Dashboard)
    
    Dashboard.$inject = ['$scope'];
    function Dashboard($scope) {
      $scope.mesada = {};
    }
})();
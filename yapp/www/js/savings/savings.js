(function () {
    angular.module('yapp.savings', [])
           .controller('Savings', Savings )
    
    Savings.$inject = ['$scope'];
    function Savings($scope) {
      $scope.mesada = {};
    }
})();
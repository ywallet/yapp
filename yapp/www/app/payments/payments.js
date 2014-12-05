(function () {
    angular.module('yapp.payments', [])
           .controller('Payments', Payments)
    
    Payments.$inject = ['$scope'];
    function Payments($scope) {
      $scope.mesada = {};
    }
})();
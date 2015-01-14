(function() {
    "use strict";

    angular
        .module("yapp.settings")
        .controller("RegisterService", RegisterService);

    RegisterService.$inject = ["$scope", "StateRouter"];

    function RegisterService($scope, StateRouter) {
        $scope.coinData = {
            address: "",
            email: ""
        };

        $scope.registerService = registerService;

        ////////////////////

        function registerService() {
            /*$rootScope.yUser = {
                name: $scope.coinData.name,
                email: $scope.coinData.email
            };
            StateRouter.goAndForget("yapp.dashboard");*/
        }
    }
})();
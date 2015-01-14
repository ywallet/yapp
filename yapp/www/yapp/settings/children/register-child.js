(function() {
    "use strict";

    angular
        .module("yapp.settings")
        .controller("RegisterChild", RegisterChild);

    RegisterChild.$inject = ["$scope", "StateRouter"];

    function RegisterChild($scope, StateRouter) {
        $scope.childData = {
            name: "",
            email: "",
            pass: "",
            cpass: ""
        };

        $scope.registerChild = registerChild;

        ////////////////////

        function registerChild() {
            /*$rootScope.yUser = {
                name: $scope.coinData.name,
                email: $scope.coinData.email
            };
            StateRouter.goAndForget("yapp.dashboard");*/
        }
    }
})();
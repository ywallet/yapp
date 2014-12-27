(function() {
    "use strict";

    angular
        .module("yapp.settings")
        .controller("LinkWallets", LinkWallets);

    LinkWallets.$inject = ["$scope", "$rootScope", "StateRouter"];

    function LinkWallets($scope, $rootScope, StateRouter) {
        $scope.isChild = true;
        $scope.hasRegisteredParent = false;
        $scope.isParent = true;
        $scope.parentData = {
            email: ""
        };
        $scope.childData = {
            email: ""
        };

        $scope.registerParent = registerParent;
        $scope.registerChild = registerChild;

        ////////////////////

        function registerParent() {
            /*$rootScope.yUser = {
                name: $scope.parentData.name,
                email: $scope.parentData.email
            };
            StateRouter.goAndForget("yapp.dashboard");*/
        }

        function registerChild() {
            /*$rootScope.yUser = {
                name: $scope.parentData.name,
                email: $scope.parentData.email
            };
            StateRouter.goAndForget("yapp.dashboard");*/
        }
    }
})();
(function() {
    "use strict";

    angular
        .module("yapp.settings")
        .controller("PersonalData", PersonalData);

    PersonalData.$inject = ["$scope", "$rootScope", "StateRouter"];

    function PersonalData($scope, $rootScope, StateRouter) {
        $scope.personalData = {
            name: "",
            email: ""
        };

        $scope.changeData = changeData;

        ////////////////////

        function changeData() {
            /*$rootScope.yUser = {
                name: $scope.personalData.name,
                email: $scope.personalData.email
            };
            StateRouter.goAndForget("yapp.dashboard");*/
        }
    }
})();
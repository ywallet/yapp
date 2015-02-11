(function() {
    "use strict";

    angular
        .module("yapp.settings")  
        .controller("ManageChildren", ManageChildren);

    ManageChildren.$inject = ["$scope", "$rootScope"];

    function ManageChildren($scope, $rootScope) {
        $scope.children = $rootScope.yUser.children;

        $scope.rmChild = rmChild;

        ////////////////////////////

        function rmChild(index) {
            // $scope.children.splice(index, 1);
        }
    }

})();
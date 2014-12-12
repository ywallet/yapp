(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("Register", Register);

    Register.$inject = ["$scope", "$rootScope", "$state"];
    function Register($scope, $rootScope, $state) {
        $scope.registerData = {
            name: "",
            email: "",
            password: "",
            cpass: ""
        };

        $scope.doRegister = doRegister;

        ////////////////////

        function doRegister() {
            $scope.registerData.password = "";
            $scope.registerData.cpass = "";
            $rootScope.yUser = {
                name: $scope.registerData.name,
                email: $scope.registerData.email
            };
            $rootScope.$viewHistory.currentView = $rootScope.$viewHistory.backView;
            $state.go("yapp.dashboard");
        }
    }
})();
(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("Register", Register);

    Register.$inject = ["$scope", "$rootScope", "StateRouter"];

    function Register($scope, $rootScope, StateRouter) {
        $scope.registerData = {
            name: "",
            email: "",
            password: "",
            cpass: ""
        };

        $scope.doRegister = doRegister;

        ////////////////////

        function doRegister() {
            if ($scope.registerData.password !== $scope.registerData.cpass) {
                return;
            }
            $scope.registerData.password = "";
            $scope.registerData.cpass = "";
            $rootScope.yUser = {
                name: $scope.registerData.name,
                email: $scope.registerData.email
            };
            StateRouter.goAndForget("yapp.dashboard");
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('yapp.authentication')
        .controller('Authentication', Authentication)

    Authentication.$inject = ["$scope"];
    function Authentication($scope) {
        var vm = $scope;
        vm.user = {
            name: "yUser",
            pass: "",
            loginData: {
                username: "",
                password: ""
            }
        };
        vm.doLogin = doLogin;
        vm.closeLogin = closeLogin;

        ////////////////////

        function doLogin() {
            vm.user.name = vm.user.loginData.username;
            vm.user.loginData.username = "";
            vm.user.pass = vm.user.loginData.password;
            vm.user.loginData.password = "";
        }

        function closeLogin() {
            
        }
    }

})();
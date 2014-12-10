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

        vm.state = "home";

        vm.doLogin = doLogin;
        vm.doRegister = doRegister;
        vm.goToRegistration = goToRegistration;
        vm.goToLogin = goToLogin;

        ////////////////////

        function doLogin() {
            vm.user.name = vm.user.loginData.username;
            vm.user.loginData.username = "";
            vm.user.pass = vm.user.loginData.password;
            vm.user.loginData.password = "";
            // vm.state = "home";
        }

        function doRegister() {
            vm.user.name = vm.user.loginData.username;
            vm.user.loginData.username = "";
            vm.user.pass = vm.user.loginData.password;
            vm.user.loginData.password = "";
            // vm.state = "home";
        }

        function goToRegistration() {
            vm.state = "register";
        }

        function goToLogin() {
            vm.state = "login";
        }
    }

})();
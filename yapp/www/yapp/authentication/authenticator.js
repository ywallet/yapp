(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("Authenticator", Authenticator);

    Authenticator.$inject = ["$scope", "$rootScope", "StateRouter", "$cordovaOauth"];

    function Authenticator($scope, $rootScope, StateRouter, $cordovaOauth) {
        $scope.signinData = {
            email: "",
            password: ""
        };

        $scope.authenticate = authenticate;

        ////////////////////

        function authenticate(service) {
            var clientId = "7c49c1d40b21548106163d2fc4151671f6227cc27033ddf0c5fcb48f74e44019";
            var clientSecret = "1663b836e3d37fd8e868fdf562d15bde1beef3f27d6301d80fddf280c5765245";
            if (service != "coinbase") { return false; }
            $cordovaOauth.coinbase(clientId, clientSecret).then(handleResponse, handleError);
        }

        function handleResponse(result) {
            window.localStorage.setItem("access_token", result.access_token);

            $rootScope.yUser = {
                name: "yUser",
                role: "parent",
                email: "yUser@email.com"
            };
            StateRouter.goAndForget("yapp.dashboard");
        }

        function handleError(error) {
            console.log(error);
            // TODO remove following code, development only
            handleResponse({
                "access_token": "...",
                "refresh_token": "...",
                "token_type": "bearer",
                "expire_in": 7200,
                "scope": "universal"
            });
        }
    }
})();
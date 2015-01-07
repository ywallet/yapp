(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .controller("Authenticator", Authenticator);

    Authenticator.$inject = ["$scope", "$rootScope", "StateRouter"];

    function Authenticator($scope, $rootScope, StateRouter) {
        $scope.signinData = {
            email: "",
            password: ""
        };

        $scope.authenticate = authenticate;

        ////////////////////

        function authenticate(service) {
            var oauthUrl = "";
            if (service != "coinbase") { return false; }
            // TODO: redirect to coinbase oauth
            $rootScope.yUser = {
                name: "yUser",
                role: "parent",
                email: "yUser@email.com"
            };
            StateRouter.goAndForget("yapp.dashboard");
        }
    }
})();
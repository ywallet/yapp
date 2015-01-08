(function() {
    "use strict";

    angular
        .module("yapp.authentication")
        .factory("Authenticator", Authenticator);

    Authenticator.$inject = ["$cordovaOauth"];

    function Authenticator($cordovaOauth) {
        return {
            authenticate: authenticate
        };
        
        ////////////////////

        function authenticate(service, onSuccess, onError) {
            var clientId = "7c49c1d40b21548106163d2fc4151671f6227cc27033ddf0c5fcb48f74e44019";
            var clientSecret = "1663b836e3d37fd8e868fdf562d15bde1beef3f27d6301d80fddf280c5765245";
            if (service != "coinbase") { return false; }
            $cordovaOauth.coinbase(clientId, clientSecret).then(onSuccess, onError);
        }
    }
})();
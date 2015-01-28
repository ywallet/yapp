(function() {
    'use strict';

    angular
        .module('yapp.dashboard')
        .controller('Dashboard', Dashboard)

    Dashboard.$inject = ["$http"];

    function Dashboard($http) {
        console.log('Dashboard');
        /*$auth.validateUser().then(function (data) {
            console.log(data);*/
            $http.get("http://ywallet.co/managers")
                .success(function (data) {
                    console.log(JSON.stringify(data));
                })
                .error(function (data) {
                    console.error(data.errors);
                });
        /*}).catch(function (data) {
            console.error(data);
        });*/
    }
})();
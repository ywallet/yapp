(function() {
    'use strict';

    angular
        .module('yapp.settings')
        .controller('Settings', Settings)

	Settings.$inject = ["$scope", "$translate"];
	function Settings($scope, $translate)
    {
        $scope.curlang = $translate.use();
        $scope.changeLanguage = function(key) {
            $translate.use(key);
            $scope.curlang = key;
        };
    }
})();
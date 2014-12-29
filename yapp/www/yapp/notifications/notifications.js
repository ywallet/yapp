(function() {
    'use strict';

    angular
        .module('yapp.notifications')  
        .controller('Notifications', Notifications);

    Notifications.$inject = ['$scope', 'Dataservice'];
    function Notifications($scope, Dataservice)
    {
        var notifications = Dataservice.getNotifications;

        notifications.then(sucessNotification, errorNotification);

        function sucessNotification(data) {
        	$scope.notifications = data;
        }

        function errorNotification() {
        	console.log('Error');
        }        
    }

})();
(function(){
	'use strict';

	angular
		.module('yapp.services')
		.factory('Dataservice', Dataservice);

	Dataservice.$inject = ['$http', '$q', '$ionicLoading', 'DSCacheFactory'];
	function Dataservice($http, $q, $ionicLoading, DSCacheFactory)
	{
		var hostname = 'http://localhost:8100/api/';

		var service = {
			getNotifications: getNotifications()
		}

		// Caches - Define Offline mode
		var notificationsCache = DSCacheFactory.get('notificationsCache');
		notificationsCache.setOptions({
			onExpire: function(key, value) {
				getNotifications()
					.then(function() {

					}, function() {
						notificationsCache.put(key, value);
					});

			}
		});

		return service;

		function getNotifications() {

			var deferred = $q.defer(),
				notificationsCache = DSCacheFactory.get('notificationsCache'),
				cacheKey = 'notifications',
				notifications = notificationsCache.get(cacheKey);

			if( notifications )
			{
				console.log('Found in Cache');
				deferred.resolve(notifications);	
			}
			else
			{
				$ionicLoading.show({ template: 'Loading...'});

				$http.get(hostname + 'notifications.json')
					.success(function(data, status){
						
						notificationsCache.put(cacheKey, data);
						deferred.resolve(data);

						$ionicLoading.hide();
					})
					.error(function(data, status){
						deferred.reject();

						$ionicLoading.hide();
					});
			}

			return deferred.promise;
		}
	}

})();
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
			getNotifications: getNotifications(false)
		}

		// Caches - Define Offline mode
		var notificationsCache = DSCacheFactory.get('notificationsCache');
		notificationsCache.setOptions({
			onExpire: function(key, value) {
				getNotifications(true)
					.then(function() {

					}, function() {
						notificationsCache.put(key, value);
					});

			}
		});

		return service;

		function getNotifications(loadCache) {

			var deferred = $q.defer(),
				notificationsCache = DSCacheFactory.get('notificationsCache'),
				cacheKey = 'notifications',
				notifications = notificationsCache.get(cacheKey);

			if( notifications )
				deferred.resolve(notifications);
			else
			{
				if( !loadCache )
					$ionicLoading.show({ template: 'Loading...'});

				$http.get(hostname + 'notifications.json')
					.success(function(data, status){
						notificationsCache.put(cacheKey, data);
						deferred.resolve(data);

						if( !loadCache )
							$ionicLoading.hide();
					})
					.error(function(data, status){
						deferred.reject();

						if( !loadCache )
							$ionicLoading.hide();
					});
			}

			return deferred.promise;
		}
	}

})()
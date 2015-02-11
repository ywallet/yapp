(function(){
	'use strict';

	angular
		.module('yapp.services')
		.factory('DPayments', DPayments);

	DPayments.$inject = ['$http', '$q', '$ionicLoading', 'DSCacheFactory'];
	function DPayments($http, $q, $ionicLoading, DSCacheFactory)
	{
		var cacheKey = 'Payments';
		var hostname = (!window.cordova) ? 'api/' : '/android_asset/www/api/';

		var service = {
			getCacheKey : getCacheKey,
			addPayment: addPayment,
			getPayments: getPayments
		}

		return service;

		function getCacheKey() {
			return cacheKey;
		}

		function getPayments(loadCache) {
			// ir a /transactions
			var deferred = $q.defer(),
				paymentsCache = DSCacheFactory.get('localCache'),
				payments = paymentsCache.get(cacheKey);

			if( loadCache === undefined )
				var loadCache = false;

			if( payments )
				deferred.resolve(payments);
			else
			{
				if( !loadCache )
					$ionicLoading.show({ template: 'Loading...'});

				$http.get(hostname + 'payments.json')
					.success(function(data, status){
						paymentsCache.put(cacheKey, data);
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
		
		function addPayment(paymentData) {
			if( loadCache === undefined )
				var loadCache = false;

			var deferred = $q.defer();
			// post para /payments
			console.log(paymentData);
			
			$http.get('https://ywallet.co/bitcoin_accounts/transactions')
				.success(function (data, status) {
					console.log(data);
				})
				.error(function(data, status){
					console.log(data);
			});
			
			$http.post('https://ywallet.co/bitcoin_accounts/payments', paymentData)
				.success(function(data, status){
					console.log(data);
					paymentsCache.put(cacheKey, data);
					deferred.resolve(data);
					if( !loadCache )
						$ionicLoading.hide();
				})
				.error(function(data, status){
					console.log(data);
					deferred.reject();
					if( !loadCache )
						$ionicLoading.hide();
				});
		}
	}

})()
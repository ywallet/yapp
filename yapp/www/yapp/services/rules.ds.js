(function(){
	'use strict';

	angular
		.module('yapp.services')
		.factory('DSRules', DSRules);

	DSRules.$inject = ['$http', '$q', '$ionicLoading', 'DSCacheFactory', 'DSUser'];
	function DSRules($http, $q, $ionicLoading, DSCacheFactory, DSUser)
	{
		var cacheKey = 'Rules';
		var hostname = (!window.cordova) ? 'api/' : '/android_asset/www/api/';

		var service = {
			getCacheKey : getCacheKey,
			addRule: addRule,
			rmRule: rmRule,
			getRules: getRules,
			toogleAtivate: toogleAtivate
		}

		return service;

		function getCacheKey() {
			return cacheKey;
		}

		function getRules(loadCache) {

			var deferred = $q.defer(),
				userActive = DSUser.getActiveUser(),
				rule_ids = userActive.rule_ids,
				rulesCache = DSCacheFactory.get('localCache'),
				rules = rulesCache.get(cacheKey + userActive.id);

			if( loadCache === undefined )
				var loadCache = false;

			if( rules )
				deferred.resolve(rules);
			else
			{	
				var i, c = 0, length_rules = rule_ids.length;
				var rules = [], idRule;

				if( length_rules > 0 && !loadCache )
					$ionicLoading.show({ template: 'Loading...'});

				if( length_rules > 0 )
				{
					for(i = 0; i < length_rules; i++)
					{
						idRule = rule_ids[i];
						$http.get('https://ywallet.co/rules/' + idRule)
							.success(function(data, status){

								rules.push(data);

								if( !loadCache )
									$ionicLoading.hide();

								c++;

								if( c == length_rules ) {
									deferred.resolve(rules);
									rulesCache.put(cacheKey + userActive.id, rules);
								}

							})
							.error(function(data, status){							

								if( !loadCache )
									$ionicLoading.hide();

								c++;

								if( c == length_rules ) {
									deferred.reject();
								}							
							});
					}
				}
				else
					deferred.resolve(rules);
			}

			return deferred.promise;
		}
		
		function addRule(qty, period, active) {
			var deferred = $q.defer();
			var userActive = DSUser.getActiveUser();

			$http.post('https://ywallet.co/rules', {rule: {account_id: userActive.account_id, amount: qty, period: period, active: active}}).
				success(function(data, status, headers, config) {
					deferred.resolve(data.id);
				}).
				error(function(data, status, headers, config) {
					deferred.reject();
				});

			return deferred.promise;
		}

		function rmRule(id) {

		}

		function toogleAtivate(id, ativate) {
			
		}
	}

})()
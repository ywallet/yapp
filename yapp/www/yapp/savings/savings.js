(function() {
    'use strict';

    angular
        .module('yapp.savings')
        .controller('Savings', Savings)

 	Savings.$inject = ['$scope', 'DSavings'];
	function Savings($scope, DSavings)
	{
		DSavings.getSavings().then(function(data){
			$scope.savings = data;
			
	        $scope.rmSaving = function(index) {
	        	var id = $scope.savings[index].id;
	        	
	        	$scope.savings.splice(index, 1);
	            DSavings.rmSaving(id);            
	        }			
		});

		
	}

})();
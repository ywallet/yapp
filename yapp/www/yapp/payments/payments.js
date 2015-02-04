(function() {
	'use strict';

	angular
			.module('yapp.payments')
			.controller('Payments', Payments)

 	Payments.$inject = ['$scope', '$ionicModal', '$cordovaDevice', 'DPayments', '$cordovaBarcodeScanner'];
	function Payments($scope, $ionicModal, $cordovaDevice, DPayments, $cordovaBarcodeScanner)
	{
		$scope.paymentForm = {
			to: "teste",
			amount: "1.22323",
			notes: "pagamento de teste"
		};

		$scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $scope.paymentForm.to = imageData.text;
            console.log("Barcode text -> " + imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
		};
		
		$scope.encodeQr = function () 
		{
			//$cordovaBarcodeScanner.e	
		};
		
		$scope.doPayment = function () 
		{
			$scope.paymentForm = {};
		};
		
		DPayments.getPayments().then(function(data)
	 	{
			$scope.payments = data;

			// Add Payment
			$scope.paymentsData = {};

			// Add Payment - Init Modal
			$ionicModal.fromTemplateUrl('yapp/payments/addPayment.html', {
				scope: $scope
			}).then(function(modal) {
				$scope.modal = modal;
			});

			$scope.openAddPayment = function() {
				$scope.modal.show();
			};

			$scope.closeAddPayments = function() {
				$scope.modal.hide();
			};

			$scope.addPayments = function() {
				console.log('adding payment', $scope.loginData);

				// Simulate a login delay. Remove this and replace with your login
				// code if using a login system
				$timeout(function() {
				$scope.closeLogin();
				}, 1000);
			};			
		});
	}
})();
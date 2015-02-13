(function() {
	'use strict';

	angular
			.module('yapp.payments')
			.controller('Payments', Payments)

 	Payments.$inject = ['$scope', '$ionicModal', '$cordovaDevice', 'DPayments', '$cordovaBarcodeScanner'];
	function Payments($scope, $ionicModal, $cordovaDevice, DPayments, $cordovaBarcodeScanner)
	{
		$scope.myBitcoinAddress = "1HeN2AfTEwkN9T4jXzmuwDFdcmxZRamhhV";
		
		$scope.paymentData = { 
			to: "1HeN2AfTEwkN9T4jXzmuwDFdcmxZRamhhV",
			amount: 1.22323,
			notes: "pagamento de teste"
		};

		$scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            $scope.paymentData.to = imageData.text;
        }, function(error) {
            console.log("An error happened -> " + error);
        });
		};
		
		$scope.encodeQr = function () {
			$cordovaBarcodeScanner
				.encode(BarcodeScanner.Encode.TEXT_TYPE, $scope.myBitcoinAddress)
				.then(function(success) {
					// Success!
      	}, function(error) {
        	// An error occurred
      });

		};
		
		$scope.doPayment = function (paymentData) {
			DPayments.addPayment($scope.paymentData);
			
			$scope.paymentData = { 
				to: '',
				amount: '',
				notes: ''
			};
		};
		
		DPayments.getPayments().then(function(data) {
			if( loadCache === undefined )
				var loadCache = false;
			
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
		});
	}
})();
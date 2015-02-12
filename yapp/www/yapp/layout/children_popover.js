(function() {
	'use strict';

	angular
		.module('yapp.layout')
		.controller('ChildrenPopover', ChildrenPopover);

    ChildrenPopover.$inject = ["$scope", "$ionicPopover", "DSUser"];
	function ChildrenPopover($scope, $ionicPopover, DSUser) {

		$ionicPopover.fromTemplateUrl('yapp/layout/children_popover.html', {
			scope: $scope
		}).then(function(children_popover) {
			$scope.children_popover = children_popover;

			$scope.chanegAtiveChild = function(id) {
				DSUser.changeAtiveChild(id);
				children_popover.hide();
			};
		});
    }
})();
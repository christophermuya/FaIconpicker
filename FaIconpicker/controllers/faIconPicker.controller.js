angular.module("umbraco").controller("muyaFaIconPicker.Controller", function ($scope, muyaFaIconResources) {
	
    $scope.icons = [];
    $scope.modelIsValid = false;  

	$scope.pattern = '<i class="{0}"></i>'; 
	$scope.overlay = {
        view: '/App_Plugins/FaIconPicker/views/faIconPicker.dialog.html',
		width: 500,
        show: false,
        title: 'Select an icon - Font awesome v5.9.0',
		pickIcon: function(icon) {
			$scope.overlay.show = false;
			$scope.model.value = icon;
		},
		close: function() {
			$scope.overlay.show = false;
		}
	};	
	$scope.openDialog = function() {
		$scope.overlay.show = true;
		$scope.overlay.icons = $scope.icons;
		$scope.overlay.render = $scope.render;
        $scope.overlay.pattern = $scope.pattern;        
	};

    $scope.render = function (currentClassName) {        
        if ($scope.model.value !== "") {
            $scope.modelIsValid = true;
        }        
		return $scope.pattern.replace("{0}", currentClassName);
	};

    $scope.remove = function() {
        $scope.model.value = '';
        $scope.modelIsValid = false;
    };
    $scope.icons = muyaFaIconResources.getIcons();
});

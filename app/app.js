var myMainApp = angular.module("myApp", []);
myMainApp.controller('ShowMessage', function($scope, $rootScope) {
	$rootScope.data = {'message' : 'xin chao', 'title' : 'tieu de', 'content' : 'content'};
});

myMainApp.controller('ShowContent', function($scope) {
	$scope.kq = 'ket qua la: ';
	$scope.tinhkq = function(){
		return $scope.kq += parseInt($scope.so1) + $scope.pheptoan + parseInt($scope.so2);
	}
});
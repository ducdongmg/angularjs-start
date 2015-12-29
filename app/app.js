var myMainApp = angular.module("myApp", []);
myMainApp.controller('ShowMessage', function($scope) {
	$scope.data = {'message' : 'xin chao', 'title' : 'tieu de'};
});
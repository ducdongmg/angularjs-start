var myMainApp = angular.module("myApp", []);
myMainApp.controller('ShowMessage', function($scope, $rootScope) {
	$rootScope.data = {'message' : 'xin chao', 'title' : 'tieu de', 'content' : 'content'};
});

myMainApp.controller('ShowContent', function($scope) {
});
(function(angular) {
  'use strict';
angular.module('docsTemplateUrlDirective', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      password: 'Amphitheatre'
    };
  }])
  .directive('myCustomer', function() {
    return {
      template: '<b>my-customer.html</b>'
    };
  })
  .directive('myCustomerTemplate', function() {
    return {
      templateUrl: 'app/templates/login_form.html'
    };
  });
})(window.angular);
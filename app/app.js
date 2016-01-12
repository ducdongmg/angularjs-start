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
      restrict: "E",
      // Use to point what is the type of directive will be use
      // A: Attribute <div my-customer></div>
      // C: Class <div class="my-customer"></div>
      // E: Element <my-customer></my-customer>
      template: '<b>my example</b>'
    };
  })
})(window.angular);
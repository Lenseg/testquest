'use strict';

/**
 * @ngdoc directive
 * @name testquestApp.directive:list
 * @description
 * # list
 */
angular.module('testquestApp')
  .directive('list', function (fakedata) {
    return {
      templateUrl: 'views/list.html',
      restrict: 'E',
      require:'^^multipleLists',
      scope:{
        buttonClick : '=',
        orderValue : '=',
        reverseOrder : '=',
        filterName: '=',
        filterArg1 : '=',
        filterArg2 : '='
      },
      controller:function($scope, $filter){
        $scope.data = fakedata.generateDataArray(100);
      },
      link: function postLink(scope, element, attrs, ctrl) {
        ctrl.addList(scope);
        scope.select = function(item, index) {
          ctrl.removeSelections();
          scope.buttonClick(item);
          scope.selected = index;
        };
      }
    };
  });

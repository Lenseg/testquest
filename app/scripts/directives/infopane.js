'use strict';

/**
 * @ngdoc directive
 * @name testquestApp.directive:infoPane
 * @description
 * # infoPane
 */
angular.module('testquestApp')
  .directive('infoPane', function () {
    return {
      templateUrl: 'views/info-pane.html',
      restrict: 'E',
      scope : {
        formModel:'='
      },
      controller: function () {

      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });

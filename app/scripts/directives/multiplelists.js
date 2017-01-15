'use strict';

/**
 * @ngdoc directive
 * @name testquestApp.directive:multipleLists
 * @description
 * # multipleLists
 */
angular.module('testquestApp')
  .directive('multipleLists', function () {
    return {
      restrict: 'A',
      controller: function($scope){
          var lists=[];
          this.removeSelections = function(){
            for (var i = 0; i < lists.length; i++) {
              lists[i].selected = null;
            }
          };
          this.addList = function(list){
            lists.push(list);
          }
      }
    };
  });

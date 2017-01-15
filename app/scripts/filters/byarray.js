'use strict';

/**
 * @ngdoc filter
 * @name testquestApp.filter:byArray
 * @function
 * @description
 * # byArray
 * Filter in the testquestApp.
 */
angular.module('testquestApp')
  .filter('byArray', function () {
    return function (input, filterArray, property) {
      var newArray = [];
      for(var i = 0; i < input.length; i++){
          for(var z = 0; z < filterArray.length; z++){
            if(~input[i][property].indexOf(filterArray[z])){
              newArray.push(input[i])
              break;
            }
          }
      }
      return newArray;
    };
  });

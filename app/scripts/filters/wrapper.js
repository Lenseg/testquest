'use strict';

/**
 * @ngdoc filter
 * @name testquestApp.filter:wrapper
 * @function
 * @description
 * # wrapper
 * Filter in the testquestApp.
 */
angular.module('testquestApp')
  .filter('wrapper', function ($filter) {
    return function (input) {
      var input = arguments[0],
            name = arguments[1],
            args = [].slice.call(arguments, 2);
      args.unshift(input);
      return $filter(name).apply(this, args);
    };
  });

'use strict';

describe('Filter: byArray', function () {

  // load the filter's module
  beforeEach(module('testquestApp'));

  // initialize a new instance of the filter before each test
  var byArray;
  beforeEach(inject(function ($filter) {
    byArray = $filter('byArray');
  }));

  it('should return the input prefixed with "byArray filter:"', function () {
    var text = 'angularjs';
    expect(byArray(text)).toBe('byArray filter: ' + text);
  });

});

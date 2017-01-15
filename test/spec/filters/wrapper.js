'use strict';

describe('Filter: wrapper', function () {

  // load the filter's module
  beforeEach(module('testquestApp'));

  // initialize a new instance of the filter before each test
  var wrapper;
  beforeEach(inject(function ($filter) {
    wrapper = $filter('wrapper');
  }));

  it('should return the input prefixed with "wrapper filter:"', function () {
    var text = 'angularjs';
    expect(wrapper(text)).toBe('wrapper filter: ' + text);
  });

});

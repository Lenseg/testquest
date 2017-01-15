'use strict';

describe('Directive: multipleLists', function () {

  // load the directive's module
  beforeEach(module('testquestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<multiple-lists></multiple-lists>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the multipleLists directive');
  }));
});

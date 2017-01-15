'use strict';

describe('Directive: infoPane', function () {

  // load the directive's module
  beforeEach(module('testquestApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<info-pane></info-pane>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the infoPane directive');
  }));
});

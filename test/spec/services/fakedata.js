'use strict';

describe('Service: fakedata', function () {

  // load the service's module
  beforeEach(module('testquestApp'));

  // instantiate service
  var fakedata;
  beforeEach(inject(function (_fakedata_) {
    fakedata = _fakedata_;
  }));

  it('should do something', function () {
    expect(!!fakedata).toBe(true);
  });

});

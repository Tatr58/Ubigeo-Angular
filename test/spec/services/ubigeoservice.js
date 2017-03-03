'use strict';

describe('Service: UbigeoService', function () {

  // load the service's module
  beforeEach(module('ejeTecnicoApp'));

  // instantiate service
  var UbigeoService;
  beforeEach(inject(function (_UbigeoService_) {
    UbigeoService = _UbigeoService_;
  }));

  it('should do something', function () {
    expect(!!UbigeoService).toBe(true);
  });

});

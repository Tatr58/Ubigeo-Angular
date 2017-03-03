'use strict';

describe('Service: departamentoFactory', function () {

  // load the service's module
  beforeEach(module('ejeTecnicoApp'));

  // instantiate service
  var departamentoFactory;
  beforeEach(inject(function (_departamentoFactory_) {
    departamentoFactory = _departamentoFactory_;
  }));

  it('should do something', function () {
    expect(!!departamentoFactory).toBe(true);
  });

});

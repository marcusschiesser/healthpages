'use strict';

describe('Filter: doctorType', function () {

  // load the filter's module
  beforeEach(module('healthpagesApp'));

  // initialize a new instance of the filter before each test
  var doctorType;
  beforeEach(inject(function ($filter) {
    doctorType = $filter('doctorType');
  }));

  it('should return Dentist for dentist', function () {
    var text = 'dentist';
    expect(doctorType(text)).toBe('Dentist');
  });

});

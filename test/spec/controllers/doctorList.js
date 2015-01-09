'use strict';

describe('Controller: DoctorListCtrl', function () {

  // load the controller's module
  beforeEach(module('healthpagesApp'));

  var DoctorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DoctorCtrl = $controller('DoctorListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of doctors to the scope', function () {
    expect(scope.doctors.length).toBe(0);
  });
});

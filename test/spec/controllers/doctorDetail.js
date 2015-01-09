'use strict';

describe('Controller: DoctorDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('healthpagesApp'));

  var DoctordetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DoctordetailCtrl = $controller('DoctorDetailCtrl', {
      $scope: scope
    });
  }));

});

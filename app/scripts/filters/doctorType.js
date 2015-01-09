'use strict';

angular.module('healthpagesApp')
    .filter('doctorType', function (DoctorInfoService) {
        return function (input) {
            return DoctorInfoService.types[input];
        };
    });

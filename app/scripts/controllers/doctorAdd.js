'use strict';

angular.module('healthpagesApp')
    .controller('DoctorAddCtrl', function ($scope, DoctorInfoService) {
        $scope.addDoctor = function () {
            var doctorRef = new Firebase('https://healthpages.firebaseio.com/doctors');
            doctorRef.push({
                'name': $scope.name,
                'type': $scope.type,
                'address': {
                    'street': $scope.street,
                    'postalCode': $scope.postalCode,
                    'city': $scope.city
                },
                'phone': $scope.phone
            }, function(err) {
                if(!err) {
                    window.alert('Successfully added your doctor!');
                }
            });
        };
        $scope.types = DoctorInfoService.types;
    });

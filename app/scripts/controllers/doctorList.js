'use strict';

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function contains(a, b) {
    return (a.toUpperCase().indexOf(b.toUpperCase()) !== -1);
}

angular.module('healthpagesApp')
    .controller('DoctorListCtrl', function ($scope, $firebase, DoctorInfoService) {
        $scope.type = 'all';
        var ref = new Firebase('https://healthpages.firebaseio.com/doctors');
        $scope.doctors = $firebase(ref.limitToLast(100)).$asArray();
        $scope.isResult = function (doctor) {
            var isType = ($scope.type === 'all') || (doctor.type === $scope.type);
            var isAddress = !isBlank($scope.where) && (contains(doctor.address.city, $scope.where));
            return (isType && isAddress);
        };
        $scope.types = DoctorInfoService.types;
        $scope.types.all = 'All';
    });

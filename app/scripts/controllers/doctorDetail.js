'use strict';

angular.module('healthpagesApp')
    .controller('DoctorDetailCtrl', function ($scope, $routeParams, $firebase) {
        var doctorRef = new Firebase('https://healthpages.firebaseio.com/doctors/' + $routeParams.doctorId);
        $scope.doctor = $firebase(doctorRef).$asObject();
        var commentsRef = doctorRef.child('comments');
        $scope.comments = $firebase(commentsRef.limitToLast(100)).$asArray();
        $scope.addComment = function () {
            commentsRef.push({'user': 'anonymous', text: $scope.comment});
        };
    });

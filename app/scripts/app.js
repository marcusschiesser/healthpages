'use strict';

angular.module('healthpagesApp', ['firebase', 'ngRoute', 'pascalprecht.translate'])
    .config(function ($routeProvider, $translateProvider) {
        $routeProvider
            .when('/addDoctor', {
                templateUrl: 'views/doctor-add.html',
                controller: 'DoctorAddCtrl'
            })
            .when('/doctors', {
                templateUrl: 'views/doctor-list.html',
                controller: 'DoctorListCtrl'
            })
            .when('/doctors/:doctorId', {
                templateUrl: 'views/doctor-detail.html',
                controller: 'DoctorDetailCtrl'
            })
            .otherwise({
                redirectTo: '/doctors'
            });

        $translateProvider.useStaticFilesLoader({
            prefix: 'locales/locale-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('zh');
    });

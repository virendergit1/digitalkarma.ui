/**
 * digitalkarma - 2016/02/27 19:09:00 UTC
*/

define([
        'angular',
        'apiProxies/baseApiProxy',
        'apiProxies/userApiProxy',
        'services/serviceConstant',
        'services/validatorService',
        'uiRouter',
        'login/loginModule',
        'chartTester/chartTesterModule'
    ],
    function(angular, baseApi, userApi) {
        'use strict';

        var app = angular.module('myApp', ['ui.router', 'my.login', 'my.chartTester']);

        app
            .service('baseApi', baseApi)
            .service('userApi', userApi);


        app.init = function() {
            angular.bootstrap(document, ['myApp']);
        };

        return app;
    });


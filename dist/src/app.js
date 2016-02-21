/**
 * digitalkarma - 2016/02/21 00:59:35 UTC
*/

define([
        'angular',
        'uiRouter',
        'login/loginModule',
        'chartTester/chartTesterModule'
    ],
    function(angular) {
        'use strict';

        var app = angular.module('myApp', ['ui.router', 'my.login', 'my.chartTester']);

        app.init = function() {
            angular.bootstrap(document, ['myApp']);
        };

        return app;
    });


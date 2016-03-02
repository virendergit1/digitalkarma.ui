/**
 * digitalkarma - 2016/03/02 21:59:51 UTC
*/

define('app',[
        'angular',
        'uiRouter',
        'login/loginModule',
        'chartTester/chartTesterModule'
    ],
    function(angular) {
        'use strict';

        var app = angular.module('myApp', ['ui.router', 'my.login', 'my.chartTester']);

        app.config(function($httpProvider) {
            $httpProvider.defaults.headers.common = {};
            $httpProvider.defaults.headers.post = {};
            $httpProvider.defaults.headers.put = {};
            $httpProvider.defaults.headers.patch = {};
        });

        app.init = function() {
            angular.bootstrap(document, ['myApp']);
        };

        return app;
    });



/**
 * digitalkarma - 2016/02/29 00:21:35 UTC
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

        
        app.init = function() {
            angular.bootstrap(document, ['myApp']);
        };

        return app;
    });



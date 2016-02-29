define(function(require) {
    'use strict';

    require('chartTester/chartTesterTemplate');

    var angular = require('angular');
    var chartTesterController = require('chartTester/chartTesterController');
    var chartTesterService = require('chartTester/chartTesterService');
    var chartTesterDirective = require('chartTester/chartTesterDirective');

    var chartTesterModule = angular.module('my.chartTester', ['chartTester.template']);

    chartTesterModule
        .controller('chartTesterController', chartTesterController)
        .service('chartTesterService', chartTesterService)
        .directive('chartTesterDirective', chartTesterDirective);

    return chartTesterModule;
});


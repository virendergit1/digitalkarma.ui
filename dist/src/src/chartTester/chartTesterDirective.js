define(function() {
    'use strict';
    var chartTesterDirective = function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/chartTester/templates/chartTesterTemplate.html',
            controller: 'chartTesterController',
            link: function(scope, element, attrs) {
            }
        };
    };
    return chartTesterDirective;
});
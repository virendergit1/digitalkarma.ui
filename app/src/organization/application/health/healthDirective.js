define(function () {
    'use strict';
    var healthsDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/health/healthTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return healthsDirective;
});
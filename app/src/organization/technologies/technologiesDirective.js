define(function () {
    'use strict';
    var technologiesDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/technologies/technologiesTemplate.html',
            controller: 'technologiesController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return technologiesDirective;
});
define(function () {
    'use strict';
    var capabilitiesDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/capabilities/capabilitiesTemplate.html',
            controller: 'capabilitiesController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return capabilitiesDirective;
});
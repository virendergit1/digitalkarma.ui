define(function () {
    'use strict';
    var applicationDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/applicationTemplate.html',
            controller: 'applicationController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return applicationDirective;
});
define(function () {
    'use strict';
    var deploymentDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/deployment/deploymentTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return deploymentDirective;
});
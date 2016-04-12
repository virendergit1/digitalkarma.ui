define(function () {
    'use strict';
    var usageDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/usage/usageTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return usageDirective;
});
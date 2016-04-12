define(function () {
    'use strict';
    var securityDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/security/securityTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return securityDirective;
});
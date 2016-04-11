define(function () {
    'use strict';
    var securityDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return securityDirective;
});
define(function () {
    'use strict';
    var vendorsDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/vendors/vendorsTemplate.html',
            controller: 'vendorsController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return vendorsDirective;
});
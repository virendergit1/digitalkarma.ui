define(function () {
    'use strict';
    var topNavDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/topNav/topNavTemplate.html',
            controller: 'dk.topNavController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return topNavDirective;
});
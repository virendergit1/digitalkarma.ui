define(function () {
    'use strict';
    var usageDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return usageDirective;
});
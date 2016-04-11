define(function () {
    'use strict';
    var deploymentDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return deploymentDirective;
});
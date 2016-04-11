define(function () {
    'use strict';
    var generalDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return generalDirective;
});
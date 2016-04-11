define(function () {
    'use strict';
    var businessDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return businessDirective;
});
define(function () {
    'use strict';
    var generalDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/general/generalTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return generalDirective;
});
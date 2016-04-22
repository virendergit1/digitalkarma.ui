define(function () {
    'use strict';
    var contactDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/contact/contactTemplate.html',
            controller: 'contactController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return contactDirective;
});
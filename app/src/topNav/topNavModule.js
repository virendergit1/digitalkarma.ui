define(function (require) {
    'use strict';

    require('topNav/topNavTemplate');

    var angular = require('angular');
    var topNavController = require('topNav/topNavController');
    var topNavService = require('topNav/topNavService');
    var topNavDirective = require('topNav/topNavDirective');

    var topNavModule = angular.module('dk.topNav', []);

    topNavModule
        .controller('dk.topNavController', topNavController)
        .service('dk.topNavService', topNavService)
        .directive('topNavDirective', topNavDirective);

    return topNavModule;
});
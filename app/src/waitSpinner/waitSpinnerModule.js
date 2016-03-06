define(function (require) {
    'use strict';

    var angular = require('angular');
    require('waitSpinner/waitSpinnerTemplate');

    var spinnerModule = angular.module('dk.spinner', ['waitSpinner.template']);

    return spinnerModule;
});
define(function (require) {
    'use strict';

    var angular = require('angular');
    var loginController = require('login/loginController');
    var registrationController = require('login/registrationController');
    var forgotPasswordController = require('login/forgotPasswordController');

    var authenticationService = require('login/authenticationService');

    var loginModule = angular.module('my.login', []);

    loginModule
        .controller('loginController', loginController)
        .controller('registrationController', registrationController)
        .controller('forgotPasswordController', forgotPasswordController)
        .service('authenticationService', authenticationService);

    return loginModule;
});

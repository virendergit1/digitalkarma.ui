define(function (require) {
    'use strict';

    var angular = require('angular');
    var loginController = require('login/loginController');
    var registrationController = require('login/registrationController');
    var forgotPasswordController = require('login/forgotPasswordController');

    var loginrService = require('login/loginService');

    var loginModule = angular.module('my.login', []);

    loginModule
        .controller('loginController', loginController)
        .controller('registrationController', registrationController)
        .controller('forgotPasswordController', forgotPasswordController)
        .service('loginrService', loginrService);

    return loginModule;
});

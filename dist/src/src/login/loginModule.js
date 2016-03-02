define(function(require) {
    'use strict';

    var angular = require('angular');
    var loginController = require('login/loginController');
    var registrationController = require('login/registrationController');
    var forgotPasswordController = require('login/forgotPasswordController');
    var validatorService = require('src/src/services/validatorService');
    var configConstant = require('src/src/config/config');
    var serviceConstant = require('src/src/services/serviceConstant');
    var baseApiProxy = require('src/src/apiProxies/baseApiProxy');
    var userApiProxy = require('src/src/apiProxies/userApiProxy');
   
    var authenticationService = require('login/authenticationService');
    
    var loginModule = angular.module('my.login', []);

    loginModule
        .controller('loginController', loginController)
        .controller('registrationController', registrationController)
        .controller('forgotPasswordController', forgotPasswordController)
        .service('dk.validatorService', validatorService)
        .service('dk.authenticationService', authenticationService)
        .service('dk.baseApiProxy', baseApiProxy)
        .service('dk.userApiProxy', userApiProxy)
        .constant('dk.serviceConstant', serviceConstant)
        .constant('dk.configConstant', configConstant)
    ;

    return loginModule;
});

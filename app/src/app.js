define(function(require) {

    'use strict';

    var angular = require('angular');

    var session = require('login/session');
    var authIntercepter = require('login/authIntercepter');
    var loginController = require('login/loginController');
    var parentController = require('login/parentController');
    var registrationController = require('login/registrationController');
    var forgotPasswordController = require('login/forgotPasswordController');
    var validatorService = require('src/src/services/validatorService');
    var configConstant = require('src/src/config/config');
    var serviceConstant = require('src/src/services/serviceConstant');
    var baseApiProxy = require('src/src/apiProxies/baseApiProxy');
    var userApiProxy = require('src/src/apiProxies/userApiProxy');
    var authenticationService = require('login/authenticationService');
    var formAutofillFixDirective = require('login/formAutofillFixDirective');
    var loginConstant = require('login/loginConstant');
    var routes = require('route/routes');

    var app = angular.module('myApp', ['ui.router']);

    app.config(function($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });

    app.config(routes);

    app
        .controller('ParentController', parentController)
        .controller('loginController', loginController)
        .controller('registrationController', registrationController)
        .controller('forgotPasswordController', forgotPasswordController)
        .service('dk.validatorService', validatorService)
        .service('Auth', authenticationService)
        .service('dk.baseApiProxy', baseApiProxy)
        .service('dk.userApiProxy', userApiProxy)
        .service('Session', session)
        .service('AuthInterceptor', authIntercepter)
        .constant('dk.serviceConstant', serviceConstant)
        .constant('dk.configConstant', configConstant)
        .constant('USER_ROLES', loginConstant.USER_ROLES)
        .constant('AUTH_EVENTS', loginConstant.AUTH_EVENTS)
        .directive('formAutofillFix', formAutofillFixDirective)
        .config(function($httpProvider) {
            $httpProvider.interceptors.push([
                '$injector',
                function($injector) {
                    return $injector.get('AuthInterceptor');
                }
            ]);
        })
        .run(function($rootScope, $state, Auth, AUTH_EVENTS) {
            //before each state change, check if the user is logged in
            //and authorized to move onto the next state
            //console.log($state);
            $rootScope.$on('$stateChangeStart', function (event, next) {
                var authorizedRoles = next.data.authorizedRoles;
                if (!Auth.isAuthorized(authorizedRoles)) {
                    event.preventDefault();
                    if (Auth.isAuthenticated()) {
                        // user is not allowed
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
                        //console.log('AUTH_EVENTS.notAuthorized');
                    } else {
                        // user is not logged in
                        $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
                        //console.log('AUTH_EVENTS.notAuthenticated');
                    }
                }
            });

            /* To show current active state on menu */
            $rootScope.getClass = function(path) {
                if ($state.current.name === path) {
                    return "active";
                } else {
                    return "";
                }
            };

            $rootScope.logout = function() {
                Auth.logout();
            };
        });

    app.init = function() {
        angular.bootstrap(document, ['myApp']);
    };

    return app;
});


define('login/loginController',[],function() {
    'use strict';

    var loginController = function($scope, $state, authenticationService) {
        var self = this,
            loginValidationError = "There was an error validation the user.";

        $scope.submitted = false;
        $scope.isShowLoginError = false;
        $scope.loginErrorMessage = "";

        var onUserLoginReject = function(erro) {
            $scope.isShowLoginError = true;
            $scope.loginErrorMessage = erro.response;
        };

        $scope.validateUser = function (email, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {
                //--+--validate user here--
                var promise = authenticationService.validateUser(email, password);

                promise.then(function(data) {
                    data = data || {};
                    if (data.isValidUser) {
                        $state.transitionTo('home');
                    } else {
                        $scope.isShowLoginError = true;
                        $scope.loginErrorMessage = data.response;
                    }
                }, function(error) {
                    onUserLoginReject(error);
                });
            }
        };
    };

    loginController.$inject = ['$scope', '$state', 'dk.authenticationService'];

    return loginController;
});
define('login/registrationController',[],function () {
    'use strict';

    var registrationController = function ($scope) {
        var self = this;

        $scope.submitted = false;

        $scope.showMessageRegistration = false;

        $scope.RegisterUser = function () {
            $scope.submitted = true;
        };
    };

    registrationController.$inject = ['$scope'];

    return registrationController;
});
define('login/forgotPasswordController',[],function () {
    'use strict';

    var forgotPasswordController = function ($scope) {
        var self = this;

        $scope.controllerName = "forgotPasswordController";

        $scope.showMessageForgotPassword = true;
        
        $scope.Submit = function () {
            $scope.showMessageForgotPassword = false;
        };
    };

    forgotPasswordController.$inject = ['$scope'];

    return forgotPasswordController;
});
define('src/src/services/validatorService',[],function () {
    'user strict';
    var validatorSerice = function () {
        var self = this;
        self.isValidJson = function (jsonObj) {
            return jsonObj && typeof jsonObj === "object" ? true : false;
        };

        self.isValidFunction = function (functionToTest) {
            return functionToTest instanceof Function;
        };
    };
    validatorSerice.$inject = [];
    return validatorSerice;
});
define('src/src/config/config',[],function () {
    'use strict';

    return {
        dashboard: {
            limit: 30
        },
        loginUrl: "https://apmcore.herokuapp.com/user/login",
        url2: "test url2"
    };
});
define('src/src/services/serviceConstant',[],function () {
    return {
        "httpVerb": {
            GET: "GET",
            POST: "POST",
            DELETE: "DELETE",
            PUT: "PUT"
        }
    };
});
define('src/src/apiProxies/baseApiProxy',[], function() {
    'use strict';

    var baseApiProxy = function() {
        var self = this;

        self.getJSONHttpConfig = function (api, method, params, data) {
            var config = {
                url: api,
                method: method,
                data: data,
                params: params,
                timeout: 10000
            };
            return config;
        };
    };

    baseApiProxy.$inject = [];
    return baseApiProxy;
});
define('src/src/apiProxies/userApiProxy',[],function() {
    'use strict';

    var userApiProxy = function($http, $q, validatorService, config, serviceConstant, baseApiProxy) {
        var self = this;

        var isApiResponseInvalid = function(response) {
            return (!response && validatorService.isValidJson(response));
        };

        self.checkUserLogins = function(userId, password) {
            var deferred = $q.defer();
            var formData = { "username": userId, "password": password };

            var httpConfig = baseApiProxy.getJSONHttpConfig(config.loginUrl, serviceConstant.httpVerb.POST, '', formData);

            $http(httpConfig)
                .success(function(data) {
                    if (isApiResponseInvalid(data)) {
                        deferred.reject(data);
                    } else {
                        deferred.resolve(data);
                    }
                }).error(function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
    };

    userApiProxy.$inject = ['$http', '$q', 'dk.validatorService', 'dk.configConstant', 'dk.serviceConstant', 'dk.baseApiProxy'];
    return userApiProxy;
});
define('login/authenticationService',[],function() {
    'user strict';
    var authenticationService = function($q, $rootScope, $http, userApiProxy) {
        var self = this;

        var responseMessage = {
            badPassword: "Invalid username or password",
            notFound: "Not a registerd user. Please Register.",
            NOT_PROVIDED : "Not provide"
        };

        self.validateUser = function(userId, password) {
            var deferred = $q.defer();

            userApiProxy.checkUserLogins(userId, password)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        if (data.username === userId) {
                            deferred.resolve({
                                isValidUser: true
                            });
                        }
                        //if (data === "BAD_PASSWORD") {
                        //    deferred.resolve({
                        //        response: responseMessage.badPassword,
                        //        isValidUser: false
                        //    });
                        //}
                        //if (data === "NOT_FOUND") {
                        //    deferred.resolve({
                        //        response: responseMessage.notFound,
                        //        isValidUser: false
                        //    });
                        //}
                    }
                }, function(error) {
                    //deferred.reject(error);
                    if (error === "BAD_PASSWORD") {
                        deferred.reject({
                            response: responseMessage.badPassword,
                            isValidUser: false
                        });
                    }
                    if (error === "NOT_FOUND") {
                        deferred.reject({
                            response: responseMessage.notFound,
                            isValidUser: false
                        });
                    }
                    if (error === "NOT_PROVIDED") {
                        deferred.reject({
                            response: responseMessage.NOT_PROVIDED,
                            isValidUser: false
                        });
                    }
                });
            return deferred.promise;
        };
    };

    authenticationService.$inject = ['$q', '$rootScope', '$http', 'dk.userApiProxy'];
    return authenticationService;
});
define('login/loginModule',['require','angular','login/loginController','login/registrationController','login/forgotPasswordController','src/src/services/validatorService','src/src/config/config','src/src/services/serviceConstant','src/src/apiProxies/baseApiProxy','src/src/apiProxies/userApiProxy','login/authenticationService'],function(require) {
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


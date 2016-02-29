define('login/loginController',[],function () {
    'use strict';

    var loginController = function ($scope, $state, authenticationService) {
        var self = this;

        $scope.submitted = false;
        
        $scope.validateUser = function (email, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {
                //--+--validate user here--
                console.log(authenticationService.validateUser());
                $state.transitionTo('home');
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
        url1: 'test url1',
        url2: 'test url2'
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
define('src/src/apiProxies/userApiProxy',[],function () {
    'use strict';

    var userApiProxy = function (validatorService) {
        var self = this;

        self.getHttpConfig = function (api, method, params, data) {
            var config = {
                url: api,
                method: method,
                data: data,
                params: params,
                timeout: 10000
            };
            return config;
        };

        var isApiResponseInvalid = function (response) {
            return (!response && validatorService.isValidJson(response));
        };

        self.checkUserLogins = function (userId, password) {
            return 'responseFromProxy';
            //var deferred = $q.defer();
            //$http(httpConfig).success(function (data) {
            //    if (isApiResponseInvalid(data)) {
            //        deferred.reject(data);
            //    } else {
            //        deferred.resolve(data);
            //    }
            //}).error(function (error) {
            //    deferred.reject(error);
            //});
            //return deferred.promise;
        };
    };

    userApiProxy.$inject = ['dk.validatorService'];
    return userApiProxy;
});
define('login/authenticationService',[],function() {
    'user strict';
    var authenticationService = function ($q, $rootScope, $http, userApiProxy) {
        var self = this;

        self.validateUser = function (userId, password) {
            return userApiProxy.checkUserLogins(userId, password);
        };


    };

    authenticationService.$inject = ['$q', '$rootScope', '$http', 'dk.userApiProxy'];
    return authenticationService;
});
define('login/loginModule',['require','angular','login/loginController','login/registrationController','login/forgotPasswordController','src/src/services/validatorService','src/src/config/config','src/src/services/serviceConstant','src/src/apiProxies/userApiProxy','login/authenticationService'],function(require) {
    'use strict';

    var angular = require('angular');
    var loginController = require('login/loginController');
    var registrationController = require('login/registrationController');
    var forgotPasswordController = require('login/forgotPasswordController');
    var validatorService = require('src/src/services/validatorService');
    var configConstant = require('src/src/config/config');
    var serviceConstant = require('src/src/services/serviceConstant');
    var userApiProxy = require('src/src/apiProxies/userApiProxy');
   
    var authenticationService = require('login/authenticationService');
    
    var loginModule = angular.module('my.login', []);

    loginModule
        .controller('loginController', loginController)
        .controller('registrationController', registrationController)
        .controller('forgotPasswordController', forgotPasswordController)
        .service('dk.validatorService', validatorService)
        .service('dk.authenticationService', authenticationService)
        .service('dk.userApiProxy', userApiProxy)
        .constant('dk.serviceConstant', serviceConstant)
        .constant('dk.configConstant', configConstant)
    ;

    return loginModule;
});


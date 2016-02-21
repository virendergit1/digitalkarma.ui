define('login/loginController',[],function () {
    'use strict';

    var loginController = function ($scope, loginrService, $state) {
        var self = this;

        $scope.submitted = false;
        
        $scope.validateUser = function (email, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {
                //--+--validate user here--
                $state.transitionTo('home');
            }
        };
    };

    loginController.$inject = ['$scope', 'loginrService', '$state'];

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
define('login/loginService',[],function () {
    'user strict';
    var loginService = function ($q) {
        var self = this;

        self.validateUser = function (userId, password) {
            return 'user validated';
        };
    };

    loginService.$inject = ['$q'];
    return loginService;
});
define('login/loginModule',['require','angular','login/loginController','login/registrationController','login/forgotPasswordController','login/loginService'],function (require) {
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


/**
 * digitalkarma - 2016/03/06 15:41:16 UTC
*/
define('login/session',[],function() {
    'user strict';
    var session = function() {

        var self = this;

        self.create = function (user) {
            this.user = user;
            this.userRole = user.userRole;
        };
        self.destroy = function () {
            this.user = null;
            this.userRole = null;
        };
    };

    session.$inject = [];
    return session;
});
define('login/authIntercepter',[],function() {
    'user strict';
    var authIntercepter = function($rootScope, $q, Session, AUTH_EVENTS) {

        return {
            responseError: function (response) {
                $rootScope.$broadcast({
                    401: AUTH_EVENTS.notAuthenticated,
                    403: AUTH_EVENTS.notAuthorized,
                    419: AUTH_EVENTS.sessionTimeout,
                    440: AUTH_EVENTS.sessionTimeout
                }[response.status], response);
                return $q.reject(response);
            }
        };
    };

    authIntercepter.$inject = ['$rootScope', '$q', 'Session', 'AUTH_EVENTS'];
    return authIntercepter;
});
define('login/loginController',[],function() {
    'use strict';

    var loginController = function ($scope, $rootScope, $state, $window, authenticationService) {
        var self = this;

        var onUserLoginReject = function(error) {
            $scope.isShowLoginError = true;
            $scope.loginErrorMessage = error.response;
        };

        $scope.validateUser = function(email, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {

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

    loginController.$inject = ['$scope', '$rootScope', '$state', '$window', 'Auth'];

    return loginController;
});
define('login/parentController',[],function() {
    'use strict';

    var parentController = function ($scope, $rootScope, $state, Auth, AUTH_EVENTS, USER_ROLES) {
        var showLoginPage = function() {
            $state.go('login');
            $scope.isUserLoggedIn = false;
        };

        var setCurrentUser = function() {
            $scope.currentUser = $rootScope.currentUser;
            $scope.isUserLoggedIn = true;
        };

        var showNotAuthorized = function() {
            console.log("Not Authorized");
        };

       
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthenticated = Auth.isAuthenticated;
        $scope.isAuthorized = Auth.isAuthorized;

        $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);
    };

    parentController.$inject = ['$scope', '$rootScope', '$state', 'Auth', 'AUTH_EVENTS', 'USER_ROLES'];

    return parentController;
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
    var authenticationService = function($q, $rootScope, $http, $window, userApiProxy, AUTH_EVENTS, Session) {
        var self = this;

        var responseMessage = {
            badPassword: "Invalid username or password",
            notFound: "Not a registerd user. Please Register.",
            NOT_PROVIDED: "Not provided"
        };

        var createUserSession = function(loginData) {
            $window.sessionStorage["userInfo"] = JSON.stringify(loginData);
            Session.create(loginData);
            //or
            $rootScope.currentUser = loginData;
            //fire event of successful login
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        };

        self.validateUser = function(userId, password) {
            var deferred = $q.defer();

            userApiProxy.checkUserLogins(userId, password)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        if (data.username === userId) {
                            var loginData = {
                                user: data.username,
                                userRole: data.authorities
                            };

                            delete data.password;

                            console.log(loginData);

                            createUserSession(loginData);
                            
                            deferred.resolve({
                                isValidUser: true
                            });
                        }
                    }
                }, function(error) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
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

        self.isAuthenticated = function() {
            return !!Session.user;
        };

        var isUserHasAuthority = function (authorizedRoles) {
            var roles = Session.userRole[0].authority.split(",");
            return _.intersection(authorizedRoles, roles).length > 0;
        };

        //+--check if the user is authorized to access the next route
        //+--this function can be also used on element level
        //+--e.g. <p ng-if="isAuthorized(authorizedRoles)">show this only to admins</p>
        self.isAuthorized = function(authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (self.isAuthenticated() && isUserHasAuthority(authorizedRoles));
        };

        self.logout = function() {
            Session.destroy();
            $window.sessionStorage.removeItem("userInfo");
            $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
        };
    };

    authenticationService.$inject = ['$q', '$rootScope', '$http', '$window', 'dk.userApiProxy', 'AUTH_EVENTS', 'Session'];
    return authenticationService;
});
define('login/formAutofillFixDirective',[],function () {
    'use strict';
    var formAutofillFixDirective = function ($timeout) {
        return function (scope, element, attrs) {
            element.prop('method', 'post');
            if (attrs.ngSubmit) {
                $timeout(function () {
                    element
                        .unbind('submit')
                        .bind('submit', function (event) {
                            event.preventDefault();
                            element
                                .find('input, textarea, select')
                                .trigger('input')
                                .trigger('change')
                                .trigger('keydown');
                            scope.$apply(attrs.ngSubmit);
                        });
                });
            }
        };
    };
    return formAutofillFixDirective;
});
define('login/loginConstant',[],function() {
    return {
        "USER_ROLES": {
            all: '*',
            admin: 'admin',
            editor: 'editor',
            guest: 'guest',
            contributor: 'Contributor'
        },
        "AUTH_EVENTS": {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            sessionTimeout: 'auth-session-timeout',
            notAuthenticated: 'auth-not-authenticated',
            notAuthorized: 'auth-not-authorized'
        }
    };
});
define('route/routes',[],function () {
    var routes = function($stateProvider, $urlRouterProvider, USER_ROLES) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "login.html"
            })
            .state('registration', {
                url: "/registration",
                templateUrl: "registration.html"
            })
            .state('forgotpassword', {
                url: "/forgotpassword",
                templateUrl: "forgotpassword.html"
            })
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor]
                }
            })
            .state('tester', {
                url: "/tester",
                templateUrl: "testerPage.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor]
                }
            });
    };
    return routes;
});
define('app',['require','angular','login/session','login/authIntercepter','login/loginController','login/parentController','login/registrationController','login/forgotPasswordController','src/src/services/validatorService','src/src/config/config','src/src/services/serviceConstant','src/src/apiProxies/baseApiProxy','src/src/apiProxies/userApiProxy','login/authenticationService','login/formAutofillFixDirective','login/loginConstant','route/routes'],function(require) {

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



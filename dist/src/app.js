/**
 * digitalkarma - 2016/04/28 02:31:21 UTC
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

    var loginController = function($scope, $rootScope, $state, $window, authenticationService, idle, $translate, organizationContextService) {
        var self = this;

        $scope.isUserLoggedIn = false;

        $scope.delay = 0;
        $scope.minDuration = 0;
        $scope.message = 'Validating...';
        $scope.backdrop = true;
        $scope.promise = null;

        var getErrorMessage = function(error) {
            switch (error) {
            case "BAD_PASSWORD":
                return $translate.instant('loginResponse.badPassword');
            case "NOT_FOUND":
                return $translate.instant('loginResponse.notFound');
            case "NOT_PROVIDED":
                return $translate.instant('loginResponse.notProvided');
            default:
                return $translate.instant('loginResponse.error');
            }
        };

        var onUserLoginReject = function(error) {
            $scope.isShowLoginError = true;
            $scope.loginErrorMessage = getErrorMessage(error.response);
        };

        $scope.email = "ch_virender@yahoo.com";
        $scope.password = "viren";

        var setOrganizationData = function() {
            organizationContextService.data.organization = $rootScope.currentUser.userInfo.organization;
        };

        var redirectUserBasedOnUserState = function() {
            if (!_.isUndefined($rootScope.currentUser)) {
                if ($rootScope.currentUser.userInfo.organization) {
                    setOrganizationData();
                    $state.transitionTo('dashboard');
                } else {
                    $state.transitionTo('organization');
                }
            }
        };

        $scope.validateUser = function(userName, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {

                $scope.promise = authenticationService.validateUser(userName, password);

                $scope.promise.then(function(data) {
                    data = data || {};
                    if (data.isValidUser) {
                        redirectUserBasedOnUserState();
                        idle.watch();
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

    loginController.$inject = ['$scope', '$rootScope', '$state', '$window', 'Auth', 'Idle', '$translate', 'organizationContextService'];

    return loginController;
});
define('login/parentController',[],function() {
    'use strict';

    var parentController = function($scope, $rootScope, $state, Auth, AUTH_EVENTS, USER_ROLES, $uibModal, $timeout) {

        $scope.isLoggedOut = false;

        var showLoginPage = function() {
            $state.go('login');
        };

        var showLoginPageAfterLogout = function() {
            $scope.isLoggedOut = true;
            $state.go('login');
        };

        var setCurrentUser = function() {
            $scope.currentUser = $rootScope.currentUser;
            $scope.isUserLoggedIn = true;
        };

        var showNotAuthorized = function() {
            console.log("Not Authorized");
        };


        $scope.started = false;

        function closeModals() {
            if ($scope.warning) {
                $scope.warning.close();
                $scope.warning = null;
            }

            if ($scope.timedout) {
                $scope.timedout.close();
                $scope.timedout = null;
            }
        }

        $scope.$on('IdleStart', function() {
            closeModals();

            $scope.warning = $uibModal.open({
                templateUrl: 'warning-dialog.html',
                windowClass: 'modal-danger'
            });
        });

        $scope.$on('IdleEnd', function() {
            closeModals();
        });

        $scope.$on('IdleTimeout', function() {
            closeModals();
            $scope.timedout = $uibModal.open({
                templateUrl: 'timedout-dialog.html',
                windowClass: 'modal-danger'
            });
            console.log($scope.isUserLoggedIn);

            $scope.isUserLoggedIn = false;
            $state.go('login');
        });

        $scope.$on('$viewContentLoaded', function() {
            $timeout(function() {
                $(function() {
                    $('#side-menu').metisMenu();
                });

                //Loads the correct sidebar on window load,
                //collapses the sidebar on window resize.
                // Sets the min-height of #page-wrapper to window size
                $(function() {
                    $(window).bind("load resize", function() {
                        var topOffset = 50, width, height;

                        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
                        if (width < 768) {
                            $('div.navbar-collapse').addClass('collapse');
                            topOffset = 100; // 2-row-menu
                        } else {
                            $('div.navbar-collapse').removeClass('collapse');
                        }

                        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
                        height = height - topOffset;
                        if (height < 1) {
                            height = 1;
                        }
                        if (height > topOffset) {
                            $("#page-wrapper").css("min-height", (height) + "px");
                        }
                    });

                    var url = window.location;
                    var element = $('ul.nav a').filter(function() {
                        return this.href === url || url.href.indexOf(this.href) === 0;
                    }).addClass('active').parent().parent().addClass('in').parent();
                    if (element.is('li')) {
                        element.addClass('active');
                    }
                });
            }, 0, false);
        });

        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthenticated = Auth.isAuthenticated;
        $scope.isAuthorized = Auth.isAuthorized;

        $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
        $rootScope.$on(AUTH_EVENTS.notAuthenticated, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.sessionTimeout, showLoginPage);
        $rootScope.$on(AUTH_EVENTS.logoutSuccess, showLoginPageAfterLogout);
        $rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);
    };

    parentController.$inject = ['$scope', '$rootScope', '$state', 'Auth', 'AUTH_EVENTS', 'USER_ROLES', '$uibModal', '$timeout'];

    return parentController;
});
define('login/registrationController',[],function () {
    'use strict';

    var registrationController = function($scope, loginService, $translate) {
        var self = this;

        $scope.submitted = false;
        $scope.showMessageRegistration = false;

        $scope.roleItems = [
            {
                "roleId": 1,
                "roleName": "Admin",
                "description": "This is admin role"
            },
            {
                "roleId": 2,
                "roleName": "Contributer",
                "description": "This is contributer role"
            },
            {
                "roleId": 3,
                "roleName": "Guest",
                "description": "This is guest role"
            }
        ];

        //console.log($translate.instant('userRole'));
        //$scope.roleItems = $translate.instant('userRole');

        var onUserRegistrationReject = function(error) {
            $scope.showMessageRegistration = true;
            $scope.successMessage = $translate.instant('loginResponse.userRegistrationError');
        };

        var onUserRegistrationSuccess = function (email) {
            $scope.showMessageRegistration = true;
            $scope.successMessage = $translate.instant('loginResponse.userRegistrationSuccess').replace("Email", email);
        };

        $scope.RegisterUser = function(form, user) {
            $scope.submitted = true;

            if (form.$valid) {
                $scope.promise = loginService.registerUser(user);

                $scope.promise.then(function(data) {
                    data = data || {};
                    if (data.username) {
                        onUserRegistrationSuccess(user.email);
                    }
                }, function(error) {
                    onUserRegistrationReject(error);
                });
            }
        };
    };

    registrationController.$inject = ['$scope', 'dk.loginService', '$translate'];

    return registrationController;
});
define('login/forgotPasswordController',[],function () {
    'use strict';

    var forgotPasswordController = function ($scope) {
        var self = this;
        $scope.isUserLoggedIn = false;

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
        loginUrl: "https://apmcore.herokuapp.com/user/login",
        baseURL: "https://apmcore.herokuapp.com"
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
                timeout: 30000
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

        self.registerUser = function (userRegistrationData) {
            var deferred = $q.defer();
            var url = config.loginUrl + "/v1/users";

            var httpConfig = baseApiProxy.getJSONHttpConfig(url, serviceConstant.httpVerb.PUT, '', userRegistrationData);

            $http(httpConfig)
                .success(function(data) {
                    if (isApiResponseInvalid(data)) {
                        deferred.reject(data);
                    } else {
                        deferred.resolve(data);
                    }
                })
                .error(function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };


        self.logout = function() {
            var deferred = $q.defer();
            var formData = "",
                url = config.loginUrl + "/user/logout";

            var httpConfig = baseApiProxy.getJSONHttpConfig(url, serviceConstant.httpVerb.POST, '', formData);

            $http(httpConfig)
                .success(function(data) {
                    if (isApiResponseInvalid(data)) {
                        deferred.reject(data);
                    } else {
                        deferred.resolve(data);
                    }
                })
                .error(function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
    };

    userApiProxy.$inject = ['$http', '$q', 'dk.validatorService', 'dk.configConstant', 'dk.serviceConstant', 'dk.baseApiProxy'];
    return userApiProxy;
});
define('src/src/apiProxies/organizationApiProxy',[],function () {
    'use strict';

    var organizationApiProxy = function ($http, $q, validatorService, config, serviceConstant, baseApiProxy) {
        var self = this;

        var isApiResponseInvalid = function (response) {
            return (!response && validatorService.isValidJson(response));
        };

        self.getBusinessOwners = function(val) {
            var deferred = $q.defer();

            var data1 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


            deferred.resolve(data1);

            //var formData = { 'organizationId': organizationId };

            //var httpConfig = baseApiProxy.getJSONHttpConfig(config.loginUrl, serviceConstant.httpVerb.GET, '', formData);

            //$http(httpConfig)
            //    .success(function (data) {
            //        if (isApiResponseInvalid(data)) {
            //            deferred.reject(data);
            //        } else {
            //            deferred.resolve(data);
            //        }
            //    }).error(function (error) {
            //        deferred.reject(error);
            //    });

            return deferred.promise;
            //return data1;
        };


        self.saveOrgnaization = function(organizationData) {
            var deferred = $q.defer();
            var formData = { 'organization': organizationData };
            var apiUrl = config.baseURL + '/v1/organizations';

            var httpConfig = baseApiProxy.getJSONHttpConfig(apiUrl, serviceConstant.httpVerb.PUT, '', formData);

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

    organizationApiProxy.$inject = ['$http', '$q', 'dk.validatorService', 'dk.configConstant', 'dk.serviceConstant', 'dk.baseApiProxy'];
    return organizationApiProxy;
});
define('login/authenticationService',[],function() {
    'user strict';
    var authenticationService = function($q, $rootScope, $http, $window, userApiProxy, AUTH_EVENTS, Session) {
        var self = this;

        var createUserSession = function(loginData) {
            $window.sessionStorage["userInfo"] = JSON.stringify(loginData);
            Session.create(loginData);
            //or
            $rootScope.currentUser = loginData;
            //fire event of successful login
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        };

        self.validateUser = function(userName, password) {
            var deferred = $q.defer();

            //var loginData = {
            //    user: userName,
            //    userRole: ["Contributor"]
            //};
            //createUserSession(loginData);
            //deferred.resolve({
            //    isValidUser: true
            //});

            userApiProxy.checkUserLogins(userName, password)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        if (data.username === userName) {
                            var loginData = {
                                user: data.username,
                                userRole: data.authorities,
                                userInfo: data
                            };

                            delete data.password;

                            createUserSession(loginData);

                            deferred.resolve({
                                isValidUser: true
                            });
                        }
                    }
                }, function(error) {
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                    deferred.reject({
                        response: error,
                        isValidUser: false
                    });

                });
            return deferred.promise;
        };

        self.isAuthenticated = function() {
            return !!Session.user;
        };

        var isUserHasAuthority = function(authorizedRoles) {
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
            var deferred = $q.defer();

            userApiProxy.logout()
                .then(function(data) {
                    if (data === "LOGGED_OUT") {
                        deferred.resolve();
                        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
                    }
                }, function(error) {
                    deferred.reject(error);
                });

            Session.destroy();
            $window.sessionStorage.removeItem("userInfo");
            return deferred.promise;
        };
    };

    authenticationService.$inject = [
        '$q',
        '$rootScope',
        '$http',
        '$window',
        'dk.userApiProxy',
        'AUTH_EVENTS',
        'Session'
    ];
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
            contributor: 'Contributor',
            initial: 'initial'
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
define('route/routes',[],function() {
    var routes = function ($stateProvider, $urlRouterProvider, USER_ROLES) {

        function resolveControllerDataByRoute(controllerIdentifier) {
            var resolveRouteObject = {
                translationsLoaded: ['$log', '$q', '$translate', 'translateService',
                    function($log, $q, $translate, translateService) {
                        var deferred = $q.defer();
                        translateService.getCurrent()
                            .then(function(result) {
                                // set the language based on the user's preferences
                                $translate.use(result.language)
                                    .then(function() {
                                        deferred.resolve();
                                    });
                            });

                        return deferred.promise;
                    }
                ]
            };

            switch (controllerIdentifier) {
            case "home":
                return resolveRouteObject;
            case "registration":
                return resolveRouteObject;
            default:
                return resolveRouteObject;
            }
        }

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "login.html",
                controller: 'loginController',
                resolve: resolveControllerDataByRoute("login"),
                data: {
                    authorizedRoles: [USER_ROLES.initial]
                }
            })
            .state('registration', {
                url: "/registration",
                templateUrl: "registration.html",
                controller: 'registrationController',
                resolve: resolveControllerDataByRoute("registration"),
                data: {
                    authorizedRoles: [USER_ROLES.initial]
                }
            })
            .state('forgotpassword', {
                url: "/forgotpassword",
                templateUrl: "forgotpassword.html",
                controller: 'forgotPasswordController',
                data: {
                    authorizedRoles: [USER_ROLES.initial]
                }
            })
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor],
                    displayName: "Home"
                },
                resolve: resolveControllerDataByRoute("home")
            })
            .state('dashboard', {
                url: "/dashboard",
                templateUrl: "dashboard.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor],
                    displayName: "dashboard"
                },
                resolve: resolveControllerDataByRoute("dashboard")
            })
            .state('organization', {
                url: "/organization",
                templateUrl: "organization.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor],
                    displayName: "organization"
                },
                resolve: resolveControllerDataByRoute("organization")
            })
            .state('capabilities', {
                url: "/capabilities",
                templateUrl: "capabilities.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor],
                    displayName: "Capabilities"
                },
                resolve: resolveControllerDataByRoute("capabilities")
            })
            .state('application', {
                url: "/application",
                templateUrl: "application.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor],
                    displayName: "Application"
                },
                resolve: resolveControllerDataByRoute("application")
            })
            .state('technologies', {
                url: "/technologies",
                templateUrl: "technologies.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor],
                    displayName: "technologies"
                },
                resolve: resolveControllerDataByRoute("technologies")
            })
            .state('vendors', {
                url: "/vendors",
                templateUrl: "vendors.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor],
                    displayName: "vendors"
                },
                resolve: resolveControllerDataByRoute("vendors")
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
define('src/src/services/translateService',[], function() {

    'use strict';

    var translateService = function translateServiceRecipe($translate, $timeout, $q) {

        var self = this;

        self.getCurrent = function() {
            // normally an HTTP call to the server would take place here
            var deferred = $q.defer();

            $timeout(function() {
                deferred.resolve({
                    language: 'en-US'
                });
            }, 200);

            return deferred.promise;
        };

        self.setLocale = function() {
            var locale = "en-US";
            $translate.uses(locale);
        };

        self.isLocaleSet = function() {
            return $translate.uses() === "en-US";
        };
    };

    translateService.$inject = [
        '$translate', '$timeout', '$q'
    ];

    return translateService;

});
define('login/loginService',[],function () {
    'user strict';
    var loginService = function ($q, userApiProxy) {
        var self = this;

        self.registerUser = function(userData) {
            var deferred = $q.defer();

            userApiProxy.registerUser(userData).then(function(data) {
                if (!_.isEmpty(data)) {
                    deferred.resolve(data);
                }
            }, function (error) {
                deferred.reject(error);
            });
        };
    };

    loginService.$inject = ['$q', 'dk.userApiProxy'];
    return loginService;
});
define('src/src/services/utilities',[],function () {
    'user strict';
    var utilitiesService = function () {
        var self = this;

        self.guid = function() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }

            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        };
    };
    utilitiesService.$inject = [];
    return utilitiesService;
});
define('app',['require','angular','login/session','login/authIntercepter','login/loginController','login/parentController','login/registrationController','login/forgotPasswordController','src/src/services/validatorService','src/src/config/config','src/src/services/serviceConstant','src/src/apiProxies/baseApiProxy','src/src/apiProxies/userApiProxy','src/src/apiProxies/organizationApiProxy','login/authenticationService','login/formAutofillFixDirective','login/loginConstant','route/routes','src/src/services/translateService','login/loginService','src/src/services/utilities','topNav/topNavModule','organization/organizationModule'],function(require) {

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
    var organizationApiProxy = require('src/src/apiProxies/organizationApiProxy');
    var authenticationService = require('login/authenticationService');
    var formAutofillFixDirective = require('login/formAutofillFixDirective');
    var loginConstant = require('login/loginConstant');
    var routes = require('route/routes');
    var translateService = require('src/src/services/translateService');
    var loginService = require('login/loginService');
    var utilitiesService = require('src/src/services/utilities');


    require("topNav/topNavModule");
    require("organization/organizationModule");

    var app = angular.module('myApp', ['dk.topNav',
        'ui.router',
        'ngIdle',
        'ui.bootstrap',
        'cgBusy',
        'pascalprecht.translate',
        'angularUtils.directives.uiBreadcrumbs',
        'my.organizationModule',
        'treeControl'
    ]);

    app.config(function ($httpProvider) {
        $httpProvider.defaults.headers.common = {};
        $httpProvider.defaults.headers.post = {};
        $httpProvider.defaults.headers.put = {};
        $httpProvider.defaults.headers.patch = {};
    });

    app.config(['KeepaliveProvider', 'IdleProvider', function (keepaliveProvider, idleProvider) {
        idleProvider.idle(900);
        idleProvider.timeout(60);
        keepaliveProvider.interval(600);
    }]);

    app.config(['$translateProvider', function ($translateProvider) {
       $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '../i18n/{lang}.json'
        });

        $translateProvider.preferredLanguage('en-US').fallbackLanguage('en-US');
        $translateProvider.useMissingTranslationHandlerLog();
        $translateProvider.useSanitizeValueStrategy('escape');
    }]);

    app.config(['$translatePartialLoaderProvider', function ($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('en-US');
    }]);

    app.config(routes);

    app
        .controller('ParentController', parentController)
        .controller('loginController', loginController)
        .controller('registrationController', registrationController)
        .controller('forgotPasswordController', forgotPasswordController)
        .service('dk.validatorService', validatorService)
        .service('utilitiesService', utilitiesService)
        .service('Auth', authenticationService)
        .service('dk.loginService', loginService)
        .service('dk.baseApiProxy', baseApiProxy)
        .service('dk.userApiProxy', userApiProxy)
        .service('organizationApiProxy', organizationApiProxy)
        .service('Session', session)
        .service('AuthInterceptor', authIntercepter)
        .service('translateService', translateService)
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
            //$rootScope.$on('$stateChangeStart', function (event, next) {
            //    var authorizedRoles = next.data.authorizedRoles;

            //    if (authorizedRoles[0] === "initial") {
            //        return;
            //    }
                
            //    if (!Auth.isAuthorized(authorizedRoles)) {
            //        event.preventDefault();
            //        if (Auth.isAuthenticated()) {
            //            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            //        } else {
            //            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            //        }
            //    }
            //});

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



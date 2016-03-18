define(function() {
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
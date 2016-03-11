define(function () {
    var routes = function ($stateProvider, $urlRouterProvider, USER_ROLES) {

        function resolveControllerDataByRoute(controllerIdentifier) {
            var resolveRouteObject = {
                translationsLoaded: ['$log', '$q', '$translate', 'translateService',
                function ($log, $q, $translate, translateService) {
                    var deferred = $q.defer();
                    translateService.getCurrent()
                      .then(function (result) {
                          // set the language based on the user's preferences
                          $translate.use(result.language)
                            .then(function () {
                                deferred.resolve();
                            });
                      });

                    return deferred.promise;
                }]
            };

            switch (controllerIdentifier) {
                case "home":
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
                resolve: resolveControllerDataByRoute("login")
            })
            .state('registration', {
                url: "/registration",
                templateUrl: "registration.html",
                controller: 'registrationController'
            })
            .state('forgotpassword', {
                url: "/forgotpassword",
                templateUrl: "forgotpassword.html",
                controller: 'forgotPasswordController'
            })
            .state('home', {
                url: "/home",
                templateUrl: "home.html",
                data: {
                    authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor, USER_ROLES.guest, USER_ROLES.contributor]
                },
                resolve: resolveControllerDataByRoute("home")
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
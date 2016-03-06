define(function () {
    var routes = function($stateProvider, $urlRouterProvider, USER_ROLES) {

        $urlRouterProvider.otherwise("/login");

        $stateProvider
            .state('login', {
                url: "/login",
                templateUrl: "login.html",
                controller: 'loginController'
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
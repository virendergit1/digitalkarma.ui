define(function () {
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
/**
 * digitalkarma - 2016/02/27 19:16:59 UTC
*/
/**
 * digitalkarma - 2016/02/27 19:16:53 UTC
*/
define(['angular', 'app'],
    function(angular, app) {
        'use strict';

        return app.config(['$stateProvider', '$urlRouterProvider',
            function($stateProvider, $urlRouterProvider) {

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
                        templateUrl: "home.html"
                    })
                    .state('tester', {
                        url: "/tester",
                        templateUrl: "testerPage.html"
                    });
            }
        ]);
    });
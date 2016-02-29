/**
 * digitalkarma - 2016/02/29 00:21:35 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:21:30 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:16:24 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:16:02 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:15:52 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:13:06 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:13:00 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:12:48 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:11:45 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:11:33 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:11:07 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:10:03 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:09:14 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:08:23 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:08:17 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:07:36 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:06:47 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:06:45 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:01:30 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:01:21 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:00:38 UTC
*/
/**
 * digitalkarma - 2016/02/29 00:00:19 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:58:37 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:58:31 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:58:01 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:54:49 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:54:20 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:54:07 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:53:21 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:50:45 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:50:04 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:49:51 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:49:40 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:36:37 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:36:11 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:35:58 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:35:38 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:35:07 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:34:48 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:33:01 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:32:46 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:32:11 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:31:53 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:30:31 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:27:13 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:26:23 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:25:34 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:24:49 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:24:32 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:21:58 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:21:45 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:18:50 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:18:40 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:18:13 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:18:05 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:17:35 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:16:56 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:16:22 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:13:34 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:13:00 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:12:48 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:11:48 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:11:31 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:11:20 UTC
*/
/**
 * digitalkarma - 2016/02/28 23:09:32 UTC
*/
/**
 * digitalkarma - 2016/02/28 16:45:55 UTC
*/
/**
 * digitalkarma - 2016/02/28 16:43:38 UTC
*/
/**
 * digitalkarma - 2016/02/28 16:41:30 UTC
*/
/**
 * digitalkarma - 2016/02/28 16:40:11 UTC
*/
/**
 * digitalkarma - 2016/02/28 16:31:34 UTC
*/
/**
 * digitalkarma - 2016/02/28 16:28:13 UTC
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
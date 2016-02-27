/**
 * digitalkarma - 2016/02/27 19:16:59 UTC
*/
define('apiProxies/baseApiProxy',[], function() {
    'use strict';

    var baseApiProxy = function($http, $q) {
        var self = this;
    };

    baseApiProxy.$inject = ['$http','$q'];
});
define('apiProxies/userApiProxy',[], function () {
    'use strict';

    var loginApiProxy = function ($q, $http) {
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
            return (!response);
        };

        self.validateTheUser = function (httpConfig) {
            var deferred = $q.defer();
            $http(httpConfig).success(function (data) {
                if (isApiResponseInvalid(data)) {
                    deferred.reject(data);
                } else {
                    deferred.resolve(data);
                }
            }).error(function (error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };
    };

    loginApiProxy.$inject = ['$q', '$http'];
});
define('services/serviceConstant',[],function () {
    return {
        "httpVerb": {
            GET: "GET",
            POST: "POST"
        }
    };
});
define('services/validatorService',[],function () {
    var self = this;

    self.isValidJson = function (jsonObj) {
        return jsonObj && typeof jsonObj === "object" ? true : false;
    };

    self.isValidFunction = function (functionToTest) {
        return functionToTest instanceof Function;
    };
});

define('app',[
        'angular',
        'apiProxies/baseApiProxy',
        'apiProxies/userApiProxy',
        'services/serviceConstant',
        'services/validatorService',
        'uiRouter',
        'login/loginModule',
        'chartTester/chartTesterModule'
    ],
    function(angular, baseApi, userApi) {
        'use strict';

        var app = angular.module('myApp', ['ui.router', 'my.login', 'my.chartTester']);

        app
            .service('baseApi', baseApi)
            .service('userApi', userApi);


        app.init = function() {
            angular.bootstrap(document, ['myApp']);
        };

        return app;
    });



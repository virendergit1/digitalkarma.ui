define([], function () {
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

        self.validateTheUser = function (httpConfig) {
            var deferred = $q.defer();

            $http(httpConfig).success(function (data) {
               //+--validate user and return required data--
            }).error(function (error) {
                deferred.reject("requestFailed");
            });
            return deferred.promise;
        };
    };

    loginApiProxy.$inject = ['$q', '$http'];
});
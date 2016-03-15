define(function() {
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
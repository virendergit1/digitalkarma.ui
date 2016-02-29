define(function () {
    'use strict';

    var userApiProxy = function (validatorService) {
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
            return (!response && validatorService.isValidJson(response));
        };

        self.checkUserLogins = function (userId, password) {
            return 'responseFromProxy';
            //var deferred = $q.defer();
            //$http(httpConfig).success(function (data) {
            //    if (isApiResponseInvalid(data)) {
            //        deferred.reject(data);
            //    } else {
            //        deferred.resolve(data);
            //    }
            //}).error(function (error) {
            //    deferred.reject(error);
            //});
            //return deferred.promise;
        };
    };

    userApiProxy.$inject = ['dk.validatorService'];
    return userApiProxy;
});
define(function () {
    'use strict';

    var organizationApiProxy = function ($http, $q, validatorService, config, serviceConstant, baseApiProxy) {
        var self = this;

        var isApiResponseInvalid = function (response) {
            return (!response && validatorService.isValidJson(response));
        };

        self.getBusinessOwners = function(val) {
            var deferred = $q.defer();

            var data1 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


            deferred.resolve(data1);

            //var formData = { 'organizationId': organizationId };

            //var httpConfig = baseApiProxy.getJSONHttpConfig(config.loginUrl, serviceConstant.httpVerb.GET, '', formData);

            //$http(httpConfig)
            //    .success(function (data) {
            //        if (isApiResponseInvalid(data)) {
            //            deferred.reject(data);
            //        } else {
            //            deferred.resolve(data);
            //        }
            //    }).error(function (error) {
            //        deferred.reject(error);
            //    });

            return deferred.promise;
            //return data1;
        };


        self.saveOrgnaization = function(organizationData) {
            var deferred = $q.defer();
            var formData = { 'organization': organizationData };
            var apiUrl = config.baseURL + '/v1/organizations';

            var httpConfig = baseApiProxy.getJSONHttpConfig(apiUrl, serviceConstant.httpVerb.PUT, '', formData);

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

    };

    organizationApiProxy.$inject = ['$http', '$q', 'dk.validatorService', 'dk.configConstant', 'dk.serviceConstant', 'dk.baseApiProxy'];
    return organizationApiProxy;
});
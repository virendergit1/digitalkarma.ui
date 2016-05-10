define(function () {
    'use strict';

    var organizationApiProxy = function (config, serviceConstant, baseApiProxy) {
        var self = this;

       self.getBusinessOwners = function(val) {
            //var deferred = $q.defer();

            var data1 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];


            //deferred.resolve(data1);

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

            //return deferred.promise;
            return data1;
        };

        var getHttpConfigForAction = function (action, organizationData) {
            var apiUrl, orgId;
            if (action === "save") {
                apiUrl = config.baseURL + '/v1/organizations';
                return baseApiProxy.getJSONHttpConfig(apiUrl, serviceConstant.httpVerb.PUT, '', organizationData);
            } else {
                orgId = organizationData.organizationId;
                apiUrl = config.baseURL + '/v1/organizations/' + orgId;
               return baseApiProxy.getJSONHttpConfig(apiUrl, serviceConstant.httpVerb.POST, '', organizationData);
            }
        };

        self.saveOrgnaization = function(organizationData, action) {
            var httpConfig = getHttpConfigForAction(action, organizationData);
            return baseApiProxy.getApiResponse(httpConfig);
        };

        self.getOrganizationById = function (orgId) {
            var apiUrl = config.baseURL + '/v1/organizations/' + orgId;
            var httpConfig = baseApiProxy.getJSONHttpConfig(apiUrl, serviceConstant.httpVerb.GET, '', '');
            return baseApiProxy.getApiResponse(httpConfig);
        };
    };

    organizationApiProxy.$inject = ['dk.configConstant', 'dk.serviceConstant', 'dk.baseApiProxy'];
    return organizationApiProxy;
});
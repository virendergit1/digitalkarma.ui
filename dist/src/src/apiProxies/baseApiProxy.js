define([], function() {
    'use strict';

    var baseApiProxy = function() {
        var self = this;

        self.getJSONHttpConfig = function (api, method, params, data) {
            var config = {
                url: api,
                method: method,
                data: data,
                params: params,
                timeout: 10000
            };
            return config;
        };
    };

    baseApiProxy.$inject = [];
    return baseApiProxy;
});
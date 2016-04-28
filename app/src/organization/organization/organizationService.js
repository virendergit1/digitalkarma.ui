define(function() {
    'user strict';
    var organizationService = function($q, organizationApiProxy) {
        var self = this;

        self.saveOrgnaization = function(organization) {
            var deferred = $q.defer();

            organizationApiProxy.saveOrgnaization(organization)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        deferred.resolve(data);
                    }
                }, function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
    };

    organizationService.$inject = ['$q', 'organizationApiProxy'];
    return organizationService;
});
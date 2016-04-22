define(function() {
    'user strict';
    var contactService = function($q, organizationApiProxy) {

        var self = this;

        self.getBusinessOwners = function(val) {
            var deferred = $q.defer();

            organizationApiProxy.getBusinessOwners(val)
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

    contactService.$inject = ['$q', 'organizationApiProxy'];
    return contactService;
});
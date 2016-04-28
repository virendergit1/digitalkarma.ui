define(function () {
    'user strict';
    var organizationContextService = function ($rootScope) {
        var self = this;

        self.data = {};

    };

    organizationContextService.$inject = ['$rootScope'];
    return organizationContextService;
});
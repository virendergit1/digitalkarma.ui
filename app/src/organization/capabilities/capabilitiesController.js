define(function() {
    'use strict';

    var capabilitiesController = function ($scope, $compile, organizationContextService, utilities, $uibModal) {
        
        $scope.addCapability = function () {
            $uibModal.open({
                animation:true,
                templateUrl: '/app/src/organization/capabilities/details/manageCapability.html',
                controller: 'manageCapabilityController',
                resolve:{}
            });
        };
    };

    capabilitiesController.$inject = ['$scope', '$compile', 'organizationContextService', 'utilitiesService', '$uibModal'];

    return capabilitiesController;
});
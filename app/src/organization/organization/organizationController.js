define(function () {
    'use strict';

    var organizationController = function ($scope, $state, organizationContextService, utilities) {
        
        $scope.SaveAndContinue = function (form, organization) {
            $scope.submitted = true;
            
            if (form.$valid) {
                $scope.organization.id = utilities.guid();
                organizationContextService.data.organization = organization;
                $state.transitionTo('capabilities');
            }
        };

        var init = function () {
            $scope.organization = {};
            $scope.organization = organizationContextService.data.organization;
        };

        init();
    };

    organizationController.$inject = ['$scope', '$state', 'organizationContextService', 'utilitiesService'];

    return organizationController;
});
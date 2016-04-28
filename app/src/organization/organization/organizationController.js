define(function () {
    'use strict';

    var organizationController = function ($scope, $state, organizationContextService, utilities, organizationService) {

        var saveOrgnaization = function(organization) {
            $scope.promise = organizationService.saveOrgnaization(organization);

            $scope.promise.then(function(data) {
                data = data || {};

            });

        };

        $scope.SaveAndContinue = function (form, organization) {
            $scope.submitted = true;
            
            if (form.$valid) {
                $scope.organization.id = utilities.guid();
                organizationContextService.data.organization = organization;

                if (saveOrgnaization(organization)) {
                    $state.transitionTo('capabilities');
                }
            }
        };

        var init = function () {
            $scope.organization = {};
            $scope.organization = organizationContextService.data.organization;
            console.log($scope.organization);
        };

        init();
    };

    organizationController.$inject = ['$scope', '$state', 'organizationContextService', 'utilitiesService', 'organizationService'];

    return organizationController;
});
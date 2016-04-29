define(function () {
    'use strict';

    var organizationController = function ($scope, $state, organizationContextService, utilities, organizationService, session) {

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
            $scope.userName = session.user.userInfo.firstName + " " + session.user.userInfo.lastName;
            $scope.organization = {};
            $scope.organization = organizationContextService.data.organization;
        };

        init();
    };

    organizationController.$inject = ['$scope', '$state', 'organizationContextService', 'utilitiesService', 'organizationService', 'Session'];

    return organizationController;
});
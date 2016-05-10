define(function() {
    'use strict';

    var organizationController = function($scope,
        $state,
        organizationContextService,
        utilities,
        organizationService,
        session,
        alertTypeConstant,
        alertService
    ) {

        $scope.delay = 0;
        $scope.minDuration = 0;
        $scope.message = 'Saving...';
        $scope.backdrop = true;
        $scope.promise = null;

        var getAction = function() {
            if (session.user.userInfo.organization) {
                return "update";
            } else {
                return "add";
            }
        };

        var showSaveStatus = function (data) {
            //TODO:use translation here for success message

            if (data.code === 'ORGANIZATION_CREATED' || data.code === 'ORGANIZATION_UPDATED') {
                alertService.addAlert("Organization data is saved successfully successfully", alertTypeConstant.alertType.SUCCESS);

            } else {
                alertService.addAlert("Error saving organization data. Please try again.", alertTypeConstant.alertType.DANGER);
            }
        };

        var saveOrgnaization = function (organization) {
            var action = getAction();

            $scope.promise = organizationService.saveOrgnaization(organization, action);

            $scope.promise.then(function(data) {
                data = data || {};
                showSaveStatus(data);
            });
        };

        $scope.SaveAndContinue = function(form, organization) {
            $scope.submitted = true;

            if (form.$valid) {
                $scope.organization.id = utilities.guid();

                if (saveOrgnaization(organization)) {
                    $state.transitionTo('capabilities');
                }
            }
        };

        var getOrganizationById = function() {
            if (session.user.userInfo.organization) {

                $scope.promise = organizationService.getOrganizationById(session.user.userInfo.organization.organizationId);

                $scope.promise
                    .then(function(data) {
                        data = data || {};
                        $scope.organization = data;
                        organizationContextService.data.organization = data;
                    }, function(error) {
                        console.log(error);
                    });
            }
        };

        var init = function() {
            $scope.userName = session.user.userInfo.firstName + " " + session.user.userInfo.lastName;
            $scope.organization = {};
            getOrganizationById();
        };

        init();
    };

    organizationController.$inject = [
        '$scope',
        '$state',
        'organizationContextService',
        'utilitiesService',
        'organizationService',
        'Session',
        'alertTypeConstant',
        'alertService'
    ];

    return organizationController;
});
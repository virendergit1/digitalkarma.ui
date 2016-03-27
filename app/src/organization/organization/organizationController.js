define(function () {
    'use strict';

    var organizationController = function ($scope, $state) {
        $scope.SaveAndContinue = function() {
            $state.transitionTo('capabilities');
        };
    };

    organizationController.$inject = ['$scope', '$state'];

    return organizationController;
});
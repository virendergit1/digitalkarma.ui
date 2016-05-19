define(function () {
    'use strict';

    var manageCapabilityController = function ($scope, $compile, organizationContextService, utilities) {
        console.log('yo yo');
        var addParentCapability = function (capability) {
            var elementId = "1";//utilities.guid();

            var element = '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                capability.name +
                '<div class="pull-right"><div class="btn-group"><button class="btn btn-success btn-xs" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-plus"></span> Add Child Capability</button></div></div>' +
                '</div>' +
                '<div class="panel-body">' +
                '<div class="flot-chart" id=' + elementId + '></div>' +
                '</div>' +
                '</div>';
            var parentElement = angular.element(document.querySelector('#capbilityContainer'));

            parentElement.append(element);

            $compile(parentElement)($scope);
        };

        var addChildCapabilityLevel2 = function (capability) {
            var elementId = "2";//utilities.guid();

            var element = '<div class="panel panel-default">' +
                '<div class="panel-heading">' +
                capability.name +
                '<div class="pull-right"><a class="btn btn-success" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-plus"></span> Add Capability</a></div>' +
                '</div>' +
                '<div class="panel-body">' +
                '<div class="flot-chart" id=' + elementId + '></div>' +
                '</div>' +
                '</div>';
            var parentElement = angular.element(document.querySelector('#capbilityContainer'));

            parentElement.append(element);

            $compile(parentElement)($scope);
        };

        $scope.addCapability = function (capability) {
            addParentCapability(capability);
        };
    };

    manageCapabilityController.$inject = ['$scope', '$compile', 'organizationContextService', 'utilitiesService'];

    return manageCapabilityController;
});
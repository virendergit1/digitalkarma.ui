define(function() {
    'use strict';

    var capabilitiesController = function ($scope, $compile, organizationContextService, utilities) {
        
        var capabilityList = [],
            parentElement = angular.element(document.querySelector('#spaceforbuttons'));

        var addChildElementVisual = function(panelType, capability) {
            var element = '<div class="col-lg-3 col-md-6">' +
                panelType +
                '<div class="panel-heading">' +
                '<div class="row">' +
                '<div class="col-xs-3">' +
                '</div>' +
                '<div class="col-xs-9 text-right">' +
                '<div>' + capability.name + '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<a href="" id="' + capability.id + '" ng-click="displayChildCapability($event)">' +
                '<div class="panel-footer">' +
                '<span class="pull-left">View Details</span>' +
                '<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
                '<div class="clearfix"></div>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div';

            parentElement.append(element);

            $compile(parentElement)($scope);
        };

       var getPanelType = function(state) {
            if (state === "Exists") {
                return '<div class="panel panel-green">';
            }

            if (state === "Gap") {
                return '<div class="panel panel-danger">';
            }

            if (state === "Planned") {
                return '<div class="panel panel-default">';
            }
            return '<div class="panel panel-green">';
        };

        var addTreeRoot = function(rootElement) {
            $scope.treedata.push({ "label": rootElement.text, "id": rootElement.id, "children": [] });
        };

        var addTreeChild = function(childElement, capability) {
            var panelType = getPanelType(capability.state);
            capability.id = childElement.id;
            $scope.selectedNode.children.push({ "label": childElement.text, "id": childElement.id, "children": [] });

            addChildElementVisual(panelType, capability);
        };

        var getObjectById = function(list, id, callback) {
            _.each(list, function(item) {
                if (item.id === id) {
                    callback(item);
                }
                if (item.childCapability) {
                    getObjectById(item.childCapability, id, callback);
                }
            });
        };

        var addParentCapability = function (id, capability) {
            capability.id = id;
            capability.parentId = null;
            capabilityList.push({
                "id":id,
                "name": capability.name,
                "description": capability.description,
                "level": capability.level,
                "state": capability.state,
                "plannedDate": capability.plannedDate,
                "childCapability": []
            });
        };

        var addChildCapability = function (id, capability) {
            var parentCapability;

            getObjectById(capabilityList, $scope.selectedNode.id, function (parent) {
                parentCapability = parent;
            });

            parentCapability.childCapability.push({
                "id": id,
                "parentId": $scope.selectedNode.id,
                "name": capability.name,
                "description": capability.description,
                "level": capability.level,
                "state": capability.state,
                "plannedDate": capability.plannedDate,
                "childCapability": []
            });
        };

        var setCapabilityForSelectedNode = function (capability) {
            $scope.capability = {
                "name": capability.name,
                "description": capability.description,
                "level": capability.level,
                "state": capability.state,
                "plannedDate": capability.plannedDate
            };
        };

        var updateCapability = function (capability) {
            var currentCapability;

            getObjectById(capabilityList, $scope.selectedNode.id, function (current) {
                currentCapability = current;
            });

            if (!_.isUndefined(currentCapability)) {
                currentCapability.name = capability.name;
                currentCapability.description = capability.description;
                currentCapability.level = capability.level;
                currentCapability.state = capability.state;
            }
        };

        $scope.save = function(form) {
            $scope.submitted = true;
            var treeElement = {},
                capability = $scope.capability,
                currentCapability;

            if (form.$valid) {
                treeElement.id = utilities.guid();
                treeElement.text = capability.name;

                if (!_.isUndefined($scope.selectedNode)) {
                    getObjectById(capabilityList, $scope.selectedNode.id, function(current) {
                        currentCapability = current;
                    });

                    if (!_.isUndefined($scope.selectedNode) && currentCapability.level === capability.level) {
                        updateCapability(capability);
                        return;
                    }
                }

                if (capability.level === "Level 1") {
                    addTreeRoot(treeElement);
                    addParentCapability(treeElement.id, capability);
                } else {
                    addChildCapability(treeElement.id, capability);
                    addTreeChild(treeElement, capability);
                }
            }
        };

        $scope.saveAndContinue = function() {
            $scope.submitted = true;
        };

        $scope.deleteCapability = function (node) {
        };

        $scope.displayChildCapability = function (e) {
            var capabilityId = e.currentTarget.id, capabilityItem;

            getObjectById(capabilityList, capabilityId, function (item) {
                capabilityItem = item;
            });
            setCapabilityForSelectedNode(capabilityItem);
        };

        var showChildren = function() {
            var capability, panelType;

            parentElement.empty();

            getObjectById(capabilityList, $scope.selectedNode.id, function (item) {
                capability = item;
            });

            setCapabilityForSelectedNode(capability);

            if (capability.childCapability) {
                _.each(capability.childCapability, function (item) {
                    panelType = getPanelType(item.state);
                    addChildElementVisual(panelType, item);
                });
            }
        };

        $scope.showSelected = function(sel) {
            $scope.selected = sel.label;
            $scope.selectedNode = sel;
            showChildren();
        };

        var init = function() {
            $scope.treedata = [];

            $scope.capability = {
                "id": null,
                "name": "test",
                "description": "test",
                "level": "Level 1",
                "state": "Gap",
                "plannedDate": null
            };

            if (!_.isUndefined(organizationContextService.data.organization)) {
                $scope.orgnizationName = organizationContextService.data.organization.name;
            }

            if (!_.isUndefined(organizationContextService.data.capabilities)) {
                capabilityList = organizationContextService.data.capabilities;
            }
        };

        init();
    };

    capabilitiesController.$inject = ['$scope', '$compile', 'organizationContextService', 'utilitiesService'];

    return capabilitiesController;
});
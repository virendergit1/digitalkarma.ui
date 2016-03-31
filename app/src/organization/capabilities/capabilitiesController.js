define(function () {
    'use strict';

    var capabilitiesController = function ($scope) {
        $scope.orgnizationName = "Proctor & Gamble Company (P&G)";

        $scope.treedata = [];

        var addElement = function (panelType, name, capabilityId) {
            var parentElement = angular.element(document.querySelector('#spaceforbuttons'));
            var element = '<div class="col-lg-3 col-md-6">' +
                panelType +
                '<div class="panel-heading">' +
                '<div class="row">' +
                '<div class="col-xs-3">' +
                '</div>' +
                '<div class="col-xs-9 text-right">' +
                '<div>' + name + '</div>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<a href="#">' +
                '<div class="panel-footer">' +
                '<span class="pull-left">View Details</span>' +
                '<span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>' +
                '<div class="clearfix"></div>' +
                '</div>' +
                '</a>' +
                '</div>' +
                '</div>';
            parentElement.append(element);
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
        };

        var addRoot = function (rootElement) {
            $scope.treedata.push({ "label": rootElement.text, "id": rootElement.id, "children": [] });
        };
        var addChild = function (childElement, capability) {
            var panelType = getPanelType(capability.state);
            $scope.capabilityid = childElement.id;
            $scope.selectedNode.children.push({ "label": childElement.text, "id": childElement.id, "children": [] });
            addElement(panelType, childElement.text, childElement.id);
        };

       function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                  .toString(16)
                  .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
              s4() + '-' + s4() + s4() + s4();
        }

        var resetForm = function(form) {
            $scope.capability = null;
            form.$setPristine();
            $scope.submitted = false;
        };

        $scope.saveAndMore = function(form, capability) {
            $scope.submitted = true;
            var treeElement = {};

            if (form.$valid) {
                treeElement.id = guid();
                treeElement.text = capability.name;
                
                if (capability.level === "Level 1") {
                    addRoot(treeElement);
                } else {
                    addChild(treeElement, capability);
                }
            }
        };
        
        $scope.saveAndContinue = function() {
            $scope.submitted = true;
        };
       

        $scope.showSelected = function (sel) {
            $scope.selected = sel.label;
            $scope.selectedNode = sel;
        };
       
    };

    capabilitiesController.$inject = ['$scope'];

    return capabilitiesController;
});
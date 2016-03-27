define(function () {
    'use strict';

    var capabilitiesController = function ($scope) {
        $scope.orgnizationName = "Proctor & Gamble Company (P&G)";

        $scope.capabilityName = "";

        $scope.treedata = [];

        var addRoot = function (rootElement) {
            $scope.treedata.push({ "label": rootElement.text, "id": rootElement.id, "children": [] });
        };
        var addChild = function (childElement) {
            $scope.selectedNode.children.push({ "label": childElement.text, "id": childElement.id, "children": [] });
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
                    addChild(treeElement);
                }
                resetForm(form);
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
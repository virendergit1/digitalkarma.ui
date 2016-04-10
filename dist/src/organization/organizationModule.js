angular.module('application.template', ['/app/src/organization/application/applicationTemplate.html']);

angular.module("/app/src/organization/application/applicationTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/applicationTemplate.html",
    "<div><div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h1 class=page-header>Applications</h1></div></div></div></div>");
}]);

define("application/applicationTemplate", function(){});

angular.module('capabilities.template', ['/app/src/organization/capabilities/capabilitiesTemplate.html']);

angular.module("/app/src/organization/capabilities/capabilitiesTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/capabilities/capabilitiesTemplate.html",
    "<div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>{{orgnizationName}}</h3></div></div><div class=row><div class=col-lg-12><div class=\"panel panel-default\"><div class=panel-body><h3>Organization Capability Setup</h3><p class=text-info>As a best practice there should be 3 levels of hierarchies for capabilities. Below forms allows to setup all the levels of capabilities. You can also review your Capability Architecture in the section below.</p><p>* {{'orgSetUpFieldLabel.mandatoryFiels'|translate}}</p><form role=form name=frmCapability><div class=row><div class=col-lg-6><div class=\"panel panel-default\"><div class=panel-heading>Parent Capability for {{orgnizationName}}</div><div class=panel-body><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityName.$error.required && (submitted)}\"><label>Name *</label><input class=form-control placeholder=\"Capability Name\" name=capabilityName ng-model=capability.name ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityName.$error.required && (submitted)\">Capability Name is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityDescription.$error.required && (submitted)}\"><label>Description *</label><textarea class=form-control rows=3 placeholder=Description name=capabilityDescription ng-model=capability.description ng-required=true ng-minlength=2></textarea><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityDescription.$error.required && (submitted)\">Capability Description is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityLevel.$error.required && (submitted)}\"><label>Capability level *</label><select class=form-control ng-model=capability.level name=capabilityLevel ng-required=true><option>Level 1</option><option>Level 2</option><option>Level 3</option></select><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityLevel.$error.required && (submitted)\">Capability Level is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityLevel !== 'Level 1'}\" ng-disabled=\"capability.level!=='Level 1'\"><div><label>Capabilities</label></div><div><treecontrol class=tree-classic tree-model=treedata node-children=children on-selection=showSelected(node) expanded-nodes=expandedNodes name=parentNode>{{node.label}}</treecontrol></div><label class=\"help-block has-error\" ng-if=\"capability.level != 'Level 1' && frmCapability.capabilityLevel.$valid\">Select Parent Capability</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityState.$error.required && (submitted)}\"><label>State *</label><select class=form-control ng-model=capability.state name=capabilityState ng-required=true><option>Exists</option><option>Gap</option><option>Planned</option></select><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityState.$error.required && (submitted)\">Capability Gap is required</label></div><div class=form-group><label>Planned Completion Date</label><input class=form-control placeholder=\"Planned Completeion date\" name=plannedDate type=date ng-model=capability.plannedDate ng-disabled=\"capability.state !== 'Planned'\"/></div></div></div></div><div class=col-lg-6><div class=\"panel panel-default\"><div class=panel-heading>Child Capabilities for - {{selected}}<div class=pull-right><span><i class=\"fa fa-square text-success\"></i> Exists&nbsp;</span> <span><i class=\"fa fa-square text-danger\"></i> Gap&nbsp;</span> <span><i class=\"fa fa-square-o\"></i> Planned</span></div></div><div class=panel-body><div id=spaceforbuttons></div></div></div></div></div></form><div class=col-lg-6><a class=\"btn btn-success\" ng-click=save(frmCapability)>Save</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-success\" ng-click=\"saveAndContinue(frmCapability, capability)\">Save & Continue</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-default\">Save & Exit</a></div></div></div></div></div></div>");
}]);

define("capabilities/capabilitiesTemplate", function(){});

angular.module('organization.template', ['/app/src/organization/organization/organizationTemplate.html']);

angular.module("/app/src/organization/organization/organizationTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/organization/organizationTemplate.html",
    "<div><div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>{{'welcome' | translate}} Virender Choudhary<br/><small>{{'orgSetupMessage' | translate}}</small></h3></div></div><div class=row><div class=col-lg-12><div class=\"panel panel-default\"><div class=panel-heading>Organization Setup</div><div class=panel-body><p>* {{'orgSetUpFieldLabel.mandatoryFiels'|translate}}</p><div class=row><form role=form name=form><div class=col-lg-6><div class=form-group ng-class=\"{'has-error': form.organizationName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.name'|translate}} *</label><input class=form-control placeholder=\"Organization Name\" name=organizationName ng-model=organization.name ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"form.organizationName.$error.required && (submitted)\">Organization Name is required</label></div><div class=form-group ng-class=\"{'has-error': form.description.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.description'|translate}} *</label><textarea class=form-control rows=3 name=description ng-model=organization.description ng-required=true></textarea><label class=\"help-block has-error\" ng-if=\"form.description.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.country.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.country'|translate}} *</label><select class=form-control name=country ng-model=organization.country ng-required=true><option>United States of America</option><option>Canada</option><option>Mexico</option><option>UK</option><option>China</option></select><label class=\"help-block has-error\" ng-if=\"form.country.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.city.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.city'|translate}} *</label><select class=form-control name=city ng-model=organization.city ng-required=true><option>Chicago</option><option>St Paul</option><option>New York</option><option>Boston</option><option>Los Angles</option></select><label class=\"help-block has-error\" ng-if=\"form.city.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.email.$error.pattern || form.email.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.email' | translate}}</label><input class=form-control placeholder=E-mail name=email type=email autofocus ng-model=organization.email ng-pattern=\"/^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$/\"/><label class=help-block ng-if=\"form.email.$error.pattern && (submitted)\">The Email is invalid</label></div></div><div class=col-lg-6><div class=form-group ng-class=\"{'has-error': form.acronym.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.acronym'|translate}} *</label><input class=form-control placeholder=Acronym name=acronym ng-model=organization.acronym ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"form.acronym.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.address.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.streetAddress'|translate}} *</label><textarea class=form-control rows=3 name=address ng-model=organization.address ng-required=true></textarea><label class=\"help-block has-error\" ng-if=\"form.address.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.state.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.state'|translate}} *</label><select class=form-control name=state ng-model=organization.state ng-required=true><option>Illinois</option><option>Minnesota</option><option>Wisconsin</option><option>New York</option><option>Washington</option></select><label class=\"help-block has-error\" ng-if=\"form.state.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.phone.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.phone'|translate}}</label><input class=form-control placeholder=\"Phone Number\" name=phone ng-model=organization.phone ng-minlength=\"15\"/></div><div class=form-group ng-class=\"{'has-error': form.website.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.website'|translate}}</label><input class=form-control placeholder=\"Web Site\" name=website ng-model=organization.website ng-minlength=\"15\"/></div></div></form></div></div><div class=panel-footer><a class=\"btn btn-success\" ng-click=\"SaveAndContinue(form, organization)\">Save & Continue</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-default\">Save & Exit</a></div></div></div></div></div></div>");
}]);

define("organization/organizationTemplate", function(){});

angular.module('technologies.template', ['/app/src/organization/technologies/technologiesTemplate.html']);

angular.module("/app/src/organization/technologies/technologiesTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/technologies/technologiesTemplate.html",
    "<div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h1 class=page-header>Techonologies</h1></div></div></div>");
}]);

define("technologies/technologiesTemplate", function(){});

angular.module('vendors.template', ['/app/src/organization/vendors/vendorsTemplate.html']);

angular.module("/app/src/organization/vendors/vendorsTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/vendors/vendorsTemplate.html",
    "<div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h1 class=page-header>Vendors</h1></div></div></div>");
}]);

define("vendors/vendorsTemplate", function(){});

define('application/applicationController',[],function() {
    'use strict';

    var applicationController = function ($scope) {

    };

    applicationController.$inject = ['$scope'];

    return applicationController;
});
;
define("application/applicationService", function(){});

define('application/applicationDirective',[],function () {
    'use strict';
    var applicationDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/applicationTemplate.html',
            controller: 'applicationController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return applicationDirective;
});
define('capabilities/capabilitiesController',[],function() {
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
;
define("capabilities/capabilitiesService", function(){});

define('capabilities/capabilitiesDirective',[],function () {
    'use strict';
    var capabilitiesDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/capabilities/capabilitiesTemplate.html',
            controller: 'capabilitiesController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return capabilitiesDirective;
});
define('organization/organizationController',[],function () {
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
;
define("organization/organizationService", function(){});

define('organization/organizationDirective',[],function () {
    'use strict';
    var organizationDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/organization/organizationTemplate.html',
            controller: 'organizationController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return organizationDirective;
});
define('technologies/technologiesController',[],function () {
    'use strict';

    var technologiesController = function ($scope) {

    };

    technologiesController.$inject = ['$scope'];

    return technologiesController;
});
;
define("technologies/technologiesService", function(){});

define('technologies/technologiesDirective',[],function () {
    'use strict';
    var technologiesDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/technologies/technologiesTemplate.html',
            controller: 'technologiesController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return technologiesDirective;
});
define('vendors/vendorsController',[],function () {
    'use strict';

    var vendorsController = function ($scope) {

    };

    vendorsController.$inject = ['$scope'];

    return vendorsController;
});
;
define("vendors/vendorsService", function(){});

define('vendors/vendorsDirective',[],function () {
    'use strict';
    var vendorsDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/vendors/vendorsTemplate.html',
            controller: 'vendorsController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return vendorsDirective;
});
define('services/organizationContextService',[],function () {
    'user strict';
    var organizationContextService = function () {
        var self = this;

        self.data = {};
    };

    organizationContextService.$inject = [];
    return organizationContextService;
});
define('organization/organizationModule',['require','application/applicationTemplate','capabilities/capabilitiesTemplate','organization/organizationTemplate','technologies/technologiesTemplate','vendors/vendorsTemplate','angular','application/applicationController','application/applicationService','application/applicationDirective','capabilities/capabilitiesController','capabilities/capabilitiesService','capabilities/capabilitiesDirective','organization/organizationController','organization/organizationService','organization/organizationDirective','technologies/technologiesController','technologies/technologiesService','technologies/technologiesDirective','vendors/vendorsController','vendors/vendorsService','vendors/vendorsDirective','services/organizationContextService'],function(require) {
    'use strict';

    require('application/applicationTemplate');
    require('capabilities/capabilitiesTemplate');
    require('organization/organizationTemplate');
    require('technologies/technologiesTemplate');
    require('vendors/vendorsTemplate');

    var angular = require('angular');

    var applicationController = require('application/applicationController');
    var applicationService = require('application/applicationService');
    var applicationDirective = require('application/applicationDirective');

    var capabilitiesController = require('capabilities/capabilitiesController');
    var capabilitiesService = require('capabilities/capabilitiesService');
    var capabilitiesDirective = require('capabilities/capabilitiesDirective');

    var organizationController = require('organization/organizationController');
    var organizationService = require('organization/organizationService');
    var organizationDirective = require('organization/organizationDirective');

    var technologiesController = require('technologies/technologiesController');
    var technologiesService = require('technologies/technologiesService');
    var technologiesDirective = require('technologies/technologiesDirective');

    var vendorsController = require('vendors/vendorsController');
    var vendorsService = require('vendors/vendorsService');
    var vendorsDirective = require('vendors/vendorsDirective');

    var organizationContextService = require('services/organizationContextService');

    var organizationModule = angular.module('my.organizationModule',
    [
        'application.template',
        'capabilities.template',
        'organization.template',
        'technologies.template',
        'vendors.template'
    ]);

    organizationModule
        .controller('applicationController', applicationController)
        .service('applicationService', applicationService)
        .directive('applicationDirective', applicationDirective)
        .controller('capabilitiesController', capabilitiesController)
        .service('capabilitiesService', capabilitiesService)
        .directive('capabilitiesDirective', capabilitiesDirective)
        .controller('organizationController', organizationController)
        .service('organizationService', organizationService)
        .directive('organizationDirective', organizationDirective)
        .controller('technologiesController', technologiesController)
        .service('technologiesService', technologiesService)
        .directive('technologiesDirective', technologiesDirective)
        .controller('vendorsController', vendorsController)
        .service('vendorsService', vendorsService)
        .directive('vendorsDirective', vendorsDirective)
        .service('organizationContextService', organizationContextService);

    return organizationModule;
});

angular.module('capabilities.template', ['/app/src/organization/capabilities/capabilitiesTemplate.html']);

angular.module("/app/src/organization/capabilities/capabilitiesTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/capabilities/capabilitiesTemplate.html",
    "<div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>{{orgnizationName}} capability setup<br/><small>As a best practice there should be 3 levels of hierarchies for capabilities. Below forms allows to setup all the levels of capabilities. You can also review your Capability Architecture in the section below.</small></h3></div></div><div class=row><div class=col-lg-12><div class=\"panel panel-default\"><div class=panel-heading>Capability Setup</div><div class=panel-body><div class=row><form role=form name=form><div class=panel-body><a class=\"btn btn-success\" data-toggle=modal data-target=#myModal><span class=\"glyphicon glyphicon-plus\"></span> Add Capability</a></div><div class=\"modal fade\" id=myModal tabindex=-1 role=dialog aria-labelledby=myModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title id=myModalLabel>Add Capability</h4></div><div class=modal-body><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityName.$error.required && (submitted)}\"><label>Name *</label><input class=form-control placeholder=\"Capability Name\" name=capabilityName ng-model=capability.name ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityName.$error.required && (submitted)\">Capability Name is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityDescription.$error.required && (submitted)}\"><label>Description *</label><textarea class=form-control rows=3 placeholder=Description name=capabilityDescription ng-model=capability.description ng-required=true ng-minlength=2></textarea><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityDescription.$error.required && (submitted)\">Capability Description is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityLevel.$error.required && (submitted)}\"><label>Capability level *</label><select class=form-control ng-model=capability.level name=capabilityLevel ng-required=true><option>Level 1</option><option>Level 2</option><option>Level 3</option></select><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityLevel.$error.required && (submitted)\">Capability Level is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityState.$error.required && (submitted)}\"><label>State *</label><select class=form-control ng-model=capability.state name=capabilityState ng-required=true><option>Exists</option><option>Gap</option><option>Planned</option></select><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityState.$error.required && (submitted)\">Capability Gap is required</label></div><div class=form-group><label>Planned Completion Date</label><input class=form-control placeholder=\"Planned Completeion date\" name=plannedDate type=date ng-model=capability.plannedDate ng-disabled=\"capability.state !== 'Planned'\"/></div></div><div class=modal-footer><button type=button class=\"btn btn-default\" data-dismiss=modal>Close</button> <button type=button class=\"btn btn-success\">Save</button></div></div></div></div></form></div></div></div></div></div></div>");
}]);

define("capabilities/capabilitiesTemplate", function(){});

angular.module('organization.template', ['/app/src/organization/organization/organizationTemplate.html']);

angular.module("/app/src/organization/organization/organizationTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/organization/organizationTemplate.html",
    "<div><div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>{{'welcome' | translate}} {{userName}}<br/><small>{{'orgSetupMessage' | translate}}</small></h3></div></div><div class=row cg-busy={promise:promise,templateUrl:templateUrl,message:message,backdrop:backdrop,delay:delay,minDuration:minDuration}><div class=col-lg-12><div class=\"panel panel-default\"><div class=panel-heading>Organization Setup</div><div class=panel-body><p>* {{'orgSetUpFieldLabel.mandatoryFiels'|translate}}</p><div class=row><form role=form name=form><div class=col-lg-6><div class=form-group ng-class=\"{'has-error': form.organizationName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.name'|translate}} *</label><input class=form-control placeholder=\"Organization Name\" name=organizationName ng-model=organization.name ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"form.organizationName.$error.required && (submitted)\">Organization Name is required</label></div><div class=form-group ng-class=\"{'has-error': form.description.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.description'|translate}}</label><textarea class=form-control rows=3 name=description ng-model=organization.description></textarea></div><div class=form-group ng-class=\"{'has-error': form.country.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.country'|translate}}</label><select class=form-control name=country ng-model=organization.country><option>United States of America</option><option>Canada</option><option>Mexico</option><option>UK</option><option>China</option></select><label class=\"help-block has-error\" ng-if=\"form.country.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.city.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.city'|translate}}</label><select class=form-control name=city ng-model=organization.city><option>Chicago</option><option>St Paul</option><option>New York</option><option>Boston</option><option>Los Angles</option></select></div><div class=form-group ng-class=\"{'has-error': form.email.$error.pattern || form.email.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.email' | translate}}</label><input class=form-control placeholder=E-mail name=email type=email autofocus ng-model=organization.email ng-pattern=\"/^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$/\"/><label class=help-block ng-if=\"form.email.$error.pattern && (submitted)\">The Email is invalid</label></div></div><div class=col-lg-6><div class=form-group ng-class=\"{'has-error': form.acronym.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.acronym'|translate}}</label><input class=form-control placeholder=Acronym name=acronym ng-model=organization.alias ng-minlength=\"2\"/></div><div class=form-group ng-class=\"{'has-error': form.address.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.streetAddress'|translate}}</label><textarea class=form-control rows=3 name=address ng-model=organization.address></textarea></div><div class=form-group ng-class=\"{'has-error': form.state.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.state'|translate}}</label><select class=form-control name=state ng-model=organization.state><option>Illinois</option><option>Minnesota</option><option>Wisconsin</option><option>New York</option><option>Washington</option></select></div><div class=form-group ng-class=\"{'has-error': form.phone.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.phone'|translate}}</label><input class=form-control placeholder=\"Phone Number\" name=phone ng-model=organization.phone ng-minlength=\"15\"/></div><div class=form-group ng-class=\"{'has-error': form.website.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.website'|translate}}</label><input class=form-control placeholder=\"Web Site\" name=website ng-model=organization.website ng-minlength=\"15\"/></div></div></form></div></div><div class=panel-footer><a class=\"btn btn-success\" ng-click=\"SaveAndContinue(form, organization)\">Save & Continue</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-default\">Save & Exit</a></div></div></div></div></div></div>");
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
define('organization/organizationController',[],function() {
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
define('organization/organizationService',[],function() {
    'user strict';
    var organizationService = function($q, organizationApiProxy) {
        var self = this;

        self.saveOrgnaization = function (organization, action) {
            var deferred = $q.defer();

            organizationApiProxy.saveOrgnaization(organization, action)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        deferred.resolve(data);
                    }
                }, function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };

        self.getOrganizationById = function(orgId) {
            var deferred = $q.defer();

            organizationApiProxy.getOrganizationById(orgId)
                .then(function (data) {
                    if (!_.isEmpty(data)) {
                        deferred.resolve(data);
                    }
                }, function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
    };

    organizationService.$inject = ['$q', 'organizationApiProxy'];
    return organizationService;
});
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
    var organizationContextService = function ($rootScope) {
        var self = this;

        self.data = {};

    };

    organizationContextService.$inject = ['$rootScope'];
    return organizationContextService;
});
define('organization/organizationModule',['require','application/applicationTemplate','capabilities/capabilitiesTemplate','organization/organizationTemplate','technologies/technologiesTemplate','vendors/vendorsTemplate','application/applicationModule','angular','capabilities/capabilitiesController','capabilities/capabilitiesService','capabilities/capabilitiesDirective','organization/organizationController','organization/organizationService','organization/organizationDirective','technologies/technologiesController','technologies/technologiesService','technologies/technologiesDirective','vendors/vendorsController','vendors/vendorsService','vendors/vendorsDirective','services/organizationContextService'],function(require) {
    'use strict';

    require('application/applicationTemplate');
    require('capabilities/capabilitiesTemplate');
    require('organization/organizationTemplate');
    require('technologies/technologiesTemplate');
    require('vendors/vendorsTemplate');

    require("application/applicationModule");

    var angular = require('angular');

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
        'my.applicationModule',
        'application.template',
        'capabilities.template',
        'organization.template',
        'technologies.template',
        'vendors.template'
    ]);

    organizationModule
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

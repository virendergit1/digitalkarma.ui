angular.module('capabilities.template', ['/app/src/organization/capabilities/capabilitiesTemplate.html', '/app/src/organization/capabilities/details/manageCapability.html']);

angular.module("/app/src/organization/capabilities/capabilitiesTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/capabilities/capabilitiesTemplate.html",
    "<div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>{{orgnizationName}} Capability setup<br/><small>As a best practice there should be 3 levels of hierarchies for capabilities. Below forms allows to setup all the levels of capabilities. You can also review your Capability Architecture in the section below.</small></h3></div></div><div class=row><div class=col-lg-12><a class=\"btn btn-success\" ng-click=addCapability()><span class=\"glyphicon glyphicon-plus\"></span> Add Capability</a></div></div><div class=row><form role=form name=frmCapability><div>&nbsp;</div><div class=col-lg-6 name=capbilityContainer id=capbilityContainer></div></form></div></div>");
}]);

angular.module("/app/src/organization/capabilities/details/manageCapability.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/capabilities/details/manageCapability.html",
    "<div class=\"modal fade\" id=myModal tabindex=-1 role=dialog aria-labelledby=myModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title id=myModalLabel>Add Capability</h4></div><div class=modal-body><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityName.$error.required && (submitted)}\"><label>Name *</label><input class=form-control placeholder=\"Capability Name\" name=capabilityName ng-model=capability.name ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityName.$error.required && (submitted)\">Capability Name is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityDescription.$error.required && (submitted)}\"><label>Description *</label><textarea class=form-control rows=3 placeholder=Description name=capabilityDescription ng-model=capability.description ng-required=true ng-minlength=2></textarea><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityDescription.$error.required && (submitted)\">Capability Description is required</label></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityLevel.$error.required && (submitted)}\"><label>Capability level *</label><div class=form-control>Division (Level - 1)</div></div><div class=form-group ng-class=\"{'has-error': frmCapability.capabilityState.$error.required && (submitted)}\"><label>State *</label><select class=form-control ng-model=capability.state name=capabilityState ng-required=true><option>Exists</option><option>Gap</option><option>Planned</option></select><label class=\"help-block has-error\" ng-if=\"frmCapability.capabilityState.$error.required && (submitted)\">Capability Gap is required</label></div><div class=form-group><label>Planned Completion Date</label><input class=form-control placeholder=\"Planned Completeion date\" name=plannedDate type=date ng-model=capability.plannedDate ng-disabled=\"capability.state !== 'Planned'\"/></div></div><div class=modal-footer><button type=button class=\"btn btn-default\">Close</button> <button type=button class=\"btn btn-success\" ng-click=addCapability(capability)>Save</button></div></div></div></div>");
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

    var capabilitiesController = function ($scope, $compile, organizationContextService, utilities, $uibModal) {
        
        $scope.addCapability = function () {
            $uibModal.open({
                animation:true,
                templateUrl: '/app/src/organization/capabilities/details/manageCapability.html',
                controller: 'manageCapabilityController',
                resolve:{}
            });
        };
    };

    capabilitiesController.$inject = ['$scope', '$compile', 'organizationContextService', 'utilitiesService', '$uibModal'];

    return capabilitiesController;
});
define('capabilities/details/manageCapabilityController',[],function () {
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
define('organization/organizationModule',['require','application/applicationTemplate','capabilities/capabilitiesTemplate','organization/organizationTemplate','technologies/technologiesTemplate','vendors/vendorsTemplate','application/applicationModule','angular','capabilities/capabilitiesController','capabilities/details/manageCapabilityController','capabilities/capabilitiesService','capabilities/capabilitiesDirective','organization/organizationController','organization/organizationService','organization/organizationDirective','technologies/technologiesController','technologies/technologiesService','technologies/technologiesDirective','vendors/vendorsController','vendors/vendorsService','vendors/vendorsDirective','services/organizationContextService'],function(require) {
    'use strict';

    require('application/applicationTemplate');
    require('capabilities/capabilitiesTemplate');
    require('organization/organizationTemplate');
    require('technologies/technologiesTemplate');
    require('vendors/vendorsTemplate');

    require("application/applicationModule");

    var angular = require('angular');

    var capabilitiesController = require('capabilities/capabilitiesController');
    var manageCapabilityController = require('capabilities/details/manageCapabilityController');
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
        .controller('manageCapabilityController', manageCapabilityController)
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

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
    "<div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h1 class=page-header>Capabilities</h1></div></div></div>");
}]);

define("capabilities/capabilitiesTemplate", function(){});

angular.module('organization.template', ['/app/src/organization/organization/organizationTemplate.html']);

angular.module("/app/src/organization/organization/organizationTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/organization/organizationTemplate.html",
    "<div><div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>{{'welcome' | translate}} Virender Choudhary<br/><small>{{'orgSetupMessage' | translate}}</small></h3></div></div><div class=row><div class=col-lg-12><div class=\"panel panel-default\"><div class=panel-heading>Organization Setup</div><div class=panel-body><p>* {{'orgSetUpFieldLabel.mandatoryFiels'|translate}}</p><div class=row><form role=form><div class=col-lg-6><div class=form-group ng-class=\"{'has-error': form.organizationName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.name'|translate}} *</label><input class=form-control placeholder=\"Organization Name\" name=organizationName ng-model=org.name ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"form.organizationName.$error.required && (submitted)\">Organization Name is required</label></div><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.description'|translate}} *</label><textarea class=form-control rows=3></textarea><label class=\"help-block has-error\" ng-if=\"form.acronym.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.country'|translate}} *</label><select class=form-control><option>United States of America</option><option>Canada</option><option>Mexico</option><option>UK</option><option>China</option></select><label class=\"help-block has-error\" ng-if=\"form.acronym.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.city'|translate}} *</label><select class=form-control><option>Chicago</option><option>St Paul</option><option>New York</option><option>Boston</option><option>Los Angles</option></select><label class=\"help-block has-error\" ng-if=\"form.acronym.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.email.$error.pattern || form.email.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.email' | translate}}</label><input class=form-control placeholder=E-mail name=email type=email autofocus ng-model=user.username ng-pattern=\"/^[_a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,4})$/\"/><label class=help-block ng-if=\"form.email.$error.pattern && (submitted)\">The Email is invalid</label></div></div><div class=col-lg-6><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.acronym'|translate}} *</label><input class=form-control placeholder=Acronym name=acronym ng-model=org.acronym ng-required=true ng-minlength=\"2\"/><label class=\"help-block has-error\" ng-if=\"form.acronym.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.streetAddress'|translate}} *</label><textarea class=form-control rows=3></textarea><label class=\"help-block has-error\" ng-if=\"form.acronym.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.state'|translate}} *</label><select class=form-control><option>Illinois</option><option>Minnesota</option><option>Wisconsin</option><option>New York</option><option>Washington</option></select><label class=\"help-block has-error\" ng-if=\"form.acronym.$error.required && (submitted)\">Acronym is required</label></div><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.phone'|translate}}</label><input class=form-control placeholder=\"Phone Number\" name=acronym ng-model=org.acronym ng-minlength=\"15\"/></div><div class=form-group ng-class=\"{'has-error': form.firstName.$error.required && (submitted)}\"><label>{{'orgSetUpFieldLabel.website'|translate}}</label><input class=form-control placeholder=\"Web Site\" name=acronym ng-model=org.acronym ng-minlength=\"15\"/></div></div></form></div></div><div class=panel-footer><a class=\"btn btn-success\">Save & Continue</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-default\">Save & Exit</a></div></div></div></div></div></div>");
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
define('capabilities/capabilitiesController',[],function () {
    'use strict';

    var capabilitiesController = function ($scope) {

    };

    capabilitiesController.$inject = ['$scope'];

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

    var organizationController = function ($scope) {

    };

    organizationController.$inject = ['$scope'];

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
define('organization/organizationModule',['require','application/applicationTemplate','capabilities/capabilitiesTemplate','organization/organizationTemplate','technologies/technologiesTemplate','vendors/vendorsTemplate','angular','application/applicationController','application/applicationService','application/applicationDirective','capabilities/capabilitiesController','capabilities/capabilitiesService','capabilities/capabilitiesDirective','organization/organizationController','organization/organizationService','organization/organizationDirective','technologies/technologiesController','technologies/technologiesService','technologies/technologiesDirective','vendors/vendorsController','vendors/vendorsService','vendors/vendorsDirective'],function(require) {
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
        .directive('vendorsDirective', vendorsDirective);

    return organizationModule;
});

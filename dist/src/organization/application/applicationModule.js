angular.module('application.template', ['/app/src/organization/application/applicationTemplate.html']);

angular.module("/app/src/organization/application/applicationTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/applicationTemplate.html",
    "<div><div><top-nav-directive></top-nav-directive></div><div id=page-wrapper><div class=row><div class=col-lg-12><h3 class=page-header>Systems / Application Setup</h3></div></div><div class=row><div class=col-lg-12><div class=\"panel panel-default\"><div class=panel-heading>Organization Setup</div><div class=panel-body><p>* {{'orgSetUpFieldLabel.mandatoryFiels'|translate}}</p><div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=name>Name:</label><div class=col-sm-9><input class=form-control id=name placeholder=\"What is the name of the application\"></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=version>Version:</label><div class=col-sm-9><input class=form-control id=version placeholder=\"Enter Version\"></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=description>Description:</label><div class=col-sm-9><input class=form-control id=description placeholder=\"Enter Description\"></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=region>Region:</label><div class=col-sm-9><input class=form-control id=region placeholder=\"Enter Region\"></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=managedType>Managed Type:</label><div class=col-sm-9><input class=form-control id=managedType placeholder=\"Enter Managed Type\"></div></div></form></div><div class=col-lg-12><ul class=\"nav nav-tabs\"><li class=active><a href=#general data-toggle=tab>General</a></li><li><a href=#contact data-toggle=tab>Contact</a></li><li><a href=#usage data-toggle=tab>Usage</a></li><li><a href=#deployment data-toggle=tab>Deployment</a></li><li><a href=#business data-toggle=tab>Business Value</a></li><li><a href=#cost data-toggle=tab>Cost</a></li><li><a href=#health data-toggle=tab>Health</a></li><li><a href=#security data-toggle=tab>Security</a></li></ul><div class=tab-content><div class=\"tab-pane fade in active\" id=general><h4>General</h4><p><general-directive></general-directive></p></div><div class=\"tab-pane fade\" id=contact><h4>Contact</h4><p><contact_directive></contact_directive></p></div><div class=\"tab-pane fade\" id=usage><h4>Usage</h4><p><usage-directive></usage-directive></p></div><div class=\"tab-pane fade\" id=deployment><h4>Deployment</h4><p><deployment-directive></deployment-directive></p></div><div class=\"tab-pane fade\" id=business><h4>Business Value</h4><p><business-value-directive></business-value-directive></p></div><div class=\"tab-pane fade\" id=cost><h4>Cost</h4><p><cost-directive></cost-directive></p></div><div class=\"tab-pane fade\" id=health><h4>Health</h4><p><health-directive></health-directive></p></div><div class=\"tab-pane fade\" id=security><h4>Security</h4><p><security-directive></security-directive></p></div></div></div></div></div><div class=panel-footer><a class=\"btn btn-success\" ng-click=\"Save(form, organization)\">Save</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-success\" ng-click=\"SaveAndContinue(form, organization)\">Save and Continue</a>&nbsp;&nbsp;&nbsp; <a class=\"btn btn-default\">Save & Exit</a></div></div></div></div></div></div>");
}]);

define("application/applicationTemplate", function(){});

angular.module('businessValue.template', ['/app/src/organization/application/businessValue/businessValueTemplate.html']);

angular.module("/app/src/organization/application/businessValue/businessValueTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/businessValue/businessValueTemplate.html",
    "<div>Business Value</div>");
}]);

define("businessValue/businessValueTemplate", function(){});

angular.module('contact.template', ['/app/src/organization/application/contact/contactTemplate.html']);

angular.module("/app/src/organization/application/contact/contactTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/contact/contactTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=businessOwner>Business Owner:</label><div class=\"input-group custom-search-form\"><input class=form-control id=businessOwner ng-model=asyncSelected placeholder=\"Business Owner loaded via $http\" uib-typeahead=\"state for state in getBusinessOwner($viewValue)\" typeahead-loading=loadingLocations typeahead-no-results=noResults> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Business Owner\" data-content=\"Is the business sponsor of the application who has the financial ownership of the application and also signs off on the business requirements and attests to the proper functionality of the application system; input at least three letters of the individual’s first name and last name and use the “Look Up” button to obtain narrowed down names; using the “Look Up” button is mandatory to load the correct information\"><i class=\"fa fa-info\"></i></button></span></div><i ng-show=loadingLocations class=\"glyphicon glyphicon-refresh\"></i><div ng-show=noResults><i class=\"glyphicon glyphicon-remove\"></i> No Results Found</div></div></form></div></div>");
}]);

define("contact/contactTemplate", function(){});

angular.module('cost.template', ['/app/src/organization/application/cost/costTemplate.html']);

angular.module("/app/src/organization/application/cost/costTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/cost/costTemplate.html",
    "<div>cost</div>");
}]);

define("cost/costTemplate", function(){});

angular.module('deployment.template', ['/app/src/organization/application/deployment/deploymentTemplate.html']);

angular.module("/app/src/organization/application/deployment/deploymentTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/deployment/deploymentTemplate.html",
    "<div>deployment</div>");
}]);

define("deployment/deploymentTemplate", function(){});

angular.module('general.template', ['/app/src/organization/application/general/generalTemplate.html']);

angular.module("/app/src/organization/application/general/generalTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/general/generalTemplate.html",
    "<div class=row><div class=col-lg-6><form class=form-horizontal role=form><div class=form-group><label class=\"control-label col-sm-3\" for=name>Application Name:</label><div class=\"input-group custom-search-form\"><input class=form-control id=name> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Application Name\" data-content=\"The full name of the application; some of the special characters are not allowed in this field (Note: You cannot add two applications with the same name; please check to see if an application with the same name exists before you add a new application)\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=alias>Alias:</label><div class=\"input-group custom-search-form\"><input class=form-control id=alias> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Alias data-content=\"The short name by which the application is commonly known\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=description>Description:</label><div class=\"input-group custom-search-form\"><input class=form-control id=description> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Description data-content=\"High-level description of the application and the functionality\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=status>Status:</label><div class=\"input-group custom-search-form\"><input class=form-control id=status> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=Status data-content=\"The status of the application; emerging, standard, contained, sunset, retired\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=currentVersion>Current Version:</label><div class=\"input-group custom-search-form\"><input class=form-control id=currentVersion> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Current Version\" data-content=\"Current version of the application deployed\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=accessLocation>Access Location:</label><div class=\"input-group custom-search-form\"><input class=form-control id=accessLocation> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover data-placement=top title=\"Access Location\" data-content=\"Please provide the information about accessing this application. In most cases it will be a URL to the application\"><i class=\"fa fa-info\"></i></button></span></div></div><div class=form-group><label class=\"control-label col-sm-3\" for=notes>Notes:</label><div class=\"input-group custom-search-form\"><input class=form-control id=notes> <span class=input-group-btn><button class=\"btn btn-default\" type=button data-container=body data-toggle=popover title=Notes data-placement=top data-content=\"Free-form text field to enter any additional information regarding the application\"><i class=\"fa fa-info\"></i></button></span></div></div></form></div></div>");
}]);

define("general/generalTemplate", function(){});

angular.module('health.template', ['/app/src/organization/application/health/healthTemplate.html']);

angular.module("/app/src/organization/application/health/healthTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/health/healthTemplate.html",
    "<div>health</div>");
}]);

define("health/healthTemplate", function(){});

angular.module('security.template', ['/app/src/organization/application/security/securityTemplate.html']);

angular.module("/app/src/organization/application/security/securityTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/organization/application/security/securityTemplate.html",
    "<div>security</div>");
}]);

define("security/securityTemplate", function(){});

angular.module('usage.template', []);


define("usage/usageTemplate", function(){});

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
define('businessValue/businessValueController',[],function () {
    'use strict';

    var businessValueController = function ($scope) {

    };

    businessValueController.$inject = ['$scope'];

    return businessValueController;
});
define('businessValue/businessValueService',[],function () {
    'user strict';
    var businessValueService = function () {
       
    };

    businessValueService.$inject = [];
    return businessValueService;
});
define('businessValue/businessValueDirective',[],function () {
    'use strict';
    var businessDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/businessValue/businessValueTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return businessDirective;
});
define('contact/contactController',[],function() {
    'use strict';

    var contactController = function ($scope, contactService) {

        $scope.promise = null;

        $scope.getBusinessOwner = function(val) {
            $scope.promise = contactService.getBusinessOwners(val);

            return $scope.promise.then(function(data) {
                return _.filter(data, function (filter) {
                    return filter.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }, function(error) {
                //--+--reject error
            });
        };

       
        var init = function () {
            
        };

        init();
    };

    contactController.$inject = ['$scope', 'contactService'];

    return contactController;
});
define('contact/contactService',[],function() {
    'user strict';
    var contactService = function($q, organizationApiProxy) {

        var self = this;

        self.getBusinessOwners = function(val) {
            var deferred = $q.defer();

            organizationApiProxy.getBusinessOwners(val)
                .then(function(data) {
                    if (!_.isEmpty(data)) {
                        deferred.resolve(data);
                    }
                }, function(error) {
                    deferred.reject(error);
                });
            return deferred.promise;
        };
    };

    contactService.$inject = ['$q', 'organizationApiProxy'];
    return contactService;
});
define('contact/contactDirective',[],function () {
    'use strict';
    var contactDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/contact/contactTemplate.html',
            controller: 'contactController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return contactDirective;
});
define('cost/costController',[],function () {
    'use strict';

    var costController = function ($scope) {

    };

    costController.$inject = ['$scope'];

    return costController;
});
define('cost/costDirective',[],function () {
    'use strict';
    var costDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/cost/costTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return costDirective;
});
define('deployment/deploymentController',[],function () {
    'use strict';

    var deploymentController = function ($scope) {

    };

    deploymentController.$inject = ['$scope'];

    return deploymentController;
});
define('deployment/deploymentService',[],function () {
    'user strict';
    var deploymentService = function () {
       
    };

    deploymentService.$inject = [];
    return deploymentService;
});
define('deployment/deploymentDirective',[],function () {
    'use strict';
    var deploymentDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/deployment/deploymentTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return deploymentDirective;
});
define('general/generalController',[],function () {
    'use strict';

    var generalController = function ($scope) {

    };

    generalController.$inject = ['$scope'];

    return generalController;
});
define('general/generalService',[],function () {
    'user strict';
    var generalService = function () {
       
    };

    generalService.$inject = [];
    return generalService;
});
define('general/generalDirective',[],function () {
    'use strict';
    var generalDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/general/generalTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return generalDirective;
});
define('health/healthController',[],function () {
    'use strict';

    var healthController = function ($scope) {

    };

    healthController.$inject = ['$scope'];

    return healthController;
});
define('health/healthService',[],function () {
    'user strict';
    var healthService = function () {
       
    };

    healthService.$inject = [];
    return healthService;
});
define('health/healthDirective',[],function () {
    'use strict';
    var healthsDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/health/healthTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return healthsDirective;
});
define('security/securityController',[],function () {
    'use strict';

    var securityController = function ($scope) {

    };

    securityController.$inject = ['$scope'];

    return securityController;
});
define('security/securityService',[],function () {
    'user strict';
    var securityService = function () {
       
    };

    securityService.$inject = [];
    return securityService;
});
define('security/securityDirective',[],function () {
    'use strict';
    var securityDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/security/securityTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return securityDirective;
});
define('usage/usageController',[],function () {
    'use strict';

    var usageController = function ($scope) {

    };

    usageController.$inject = ['$scope'];

    return usageController;
});
define('usage/usageService',[],function () {
    'user strict';
    var usageService = function () {
       
    };

    usageService.$inject = [];
    return usageService;
});
define('usage/usageDirective',[],function () {
    'use strict';
    var usageDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/organization/application/usage/usageTemplate.html',
            controller: 'businessValueController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return usageDirective;
});
define('application/applicationModule',['require','application/applicationTemplate','businessValue/businessValueTemplate','contact/contactTemplate','cost/costTemplate','deployment/deploymentTemplate','general/generalTemplate','health/healthTemplate','security/securityTemplate','usage/usageTemplate','angular','application/applicationController','application/applicationService','application/applicationDirective','businessValue/businessValueController','businessValue/businessValueService','businessValue/businessValueDirective','contact/contactController','contact/contactService','contact/contactDirective','cost/costController','cost/costController','cost/costDirective','deployment/deploymentController','deployment/deploymentService','deployment/deploymentDirective','general/generalController','general/generalService','general/generalDirective','health/healthController','health/healthService','health/healthDirective','security/securityController','security/securityService','security/securityDirective','usage/usageController','usage/usageService','usage/usageDirective'],function(require) {
    'use strict';

    require('application/applicationTemplate');
    require('businessValue/businessValueTemplate');
    require('contact/contactTemplate');
    require('cost/costTemplate');
    require('deployment/deploymentTemplate');
    require('general/generalTemplate');
    require('health/healthTemplate');
    require('security/securityTemplate');
    require('usage/usageTemplate');

    var angular = require('angular');

    var applicationController = require('application/applicationController');
    var applicationService = require('application/applicationService');
    var applicationDirective = require('application/applicationDirective');

    var businessValueController = require('businessValue/businessValueController');
    var businessValueService = require('businessValue/businessValueService');
    var businessValueDirective = require('businessValue/businessValueDirective');

    var contactController = require('contact/contactController');
    var contactService = require('contact/contactService');
    var contactDirective = require('contact/contactDirective');

    var costController = require('cost/costController');
    var costService = require('cost/costController');
    var costDirective = require('cost/costDirective');

    var deploymentController = require('deployment/deploymentController');
    var deploymentService = require('deployment/deploymentService');
    var deploymentDirective = require('deployment/deploymentDirective');

    var generalController = require('general/generalController');
    var generalService = require('general/generalService');
    var generalDirective = require('general/generalDirective');

    var healthController = require('health/healthController');
    var healthService = require('health/healthService');
    var healthDirective = require('health/healthDirective');

    var securityController = require('security/securityController');
    var securityService = require('security/securityService');
    var securityDirective = require('security/securityDirective');

    var usageController = require('usage/usageController');
    var usageService = require('usage/usageService');
    var usageDirective = require('usage/usageDirective');

    var applicationModule = angular.module('my.applicationModule',
    [
        'application.template',
        'businessValue.template',
        'contact.template',
        'cost.template',
        'deployment.template',
        'general.template',
        'health.template',
        'security.template',
        'usage.template'
    ]);

    applicationModule
        .controller('applicationController', applicationController)
        .service('applicationService', applicationService)
        .directive('applicationDirective', applicationDirective)
        .controller('businessValueController',businessValueController)
        .service('businessValueService',businessValueService)
        .directive('businessValueDirective',businessValueDirective)
        .controller('contactController', contactController)
        .service('contactService', contactService)
        .directive('contactDirective', contactDirective)
        .controller('costController',costController)
        .service('costService',costService)
        .directive('costDirective',costDirective)
        .controller('deploymentController',deploymentController)
        .service('deploymentService',deploymentService)
        .directive('deploymentDirective',deploymentDirective)
        .controller('generalController',generalController)
        .service('generalService',generalService)
        .directive('generalDirective',generalDirective)
        .controller('healthController', healthController)
        .service('healthService',healthService)
        .directive('healthDirective',healthDirective)
        .controller('securityController',securityController)
        .service('securityService',securityService)
        .directive('securityDirective',securityDirective)
        .controller('usageController',usageController)
        .service('usageService',usageService)
        .directive('usageDirective',usageDirective);

    return applicationModule;

});

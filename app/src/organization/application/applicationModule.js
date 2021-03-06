﻿define(function(require) {
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
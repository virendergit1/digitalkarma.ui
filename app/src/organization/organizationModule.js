define(function(require) {
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
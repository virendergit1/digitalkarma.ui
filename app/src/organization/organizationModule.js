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

    var capabilitiesBoxDirective = require('components/capabilitiesBoxDirective');

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
        .directive('capabilitiesBoxDirective', capabilitiesBoxDirective);

    //Directive for adding buttons on click that show an alert on click
    organizationModule.directive("addbuttons", function($compile) {
        return function(scope, element, attrs) {
            element.bind("click", function() {
                scope.count++;
                angular.element(document.getElementById('space-for-buttons')).append($compile(
                    '<div class="col-lg-3 col-md-6">' +
                    '<div class="panel panel-green">' +
                    '<div class="panel-heading">' +
                    '<div class="row">' +
                    '<div class="col-xs-3">' +
                    '</div>' +
                    '<div class="col-xs-9 text-right">' +
                    '<div>New Tasks!</div>' +
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
                    '</div>'
                )
                (scope));
            });
        };
    });

    return organizationModule;
});
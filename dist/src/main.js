/**
 * digitalkarma - 2016/05/20 02:12:32 UTC
*/

require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        angularAnimate: '../bower_components/angular-animate/angular-animate.min',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
        ngResource: '../bower_components/angular-resource/angular-resource',
        angularScenario: '../bower_components/angular-scenario/angular-scenario',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        jquery: '../bower_components/jquery/dist/jquery.min',
        d3: '../bower_components/d3/d3',
        c3: '../bower_components/c3/c3',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap.min',
        angularBootstrap: '../bower_components/angular-bootstrap/ui-bootstrap',
        angularBootstrapTpl: '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        text: '../bower_components/requirejs-text/text',
        morris: '../bower_components/morris.js/morris',
        raphael: '../bower_components/raphael/raphael',
        metisMenu: '../bower_components/metisMenu/dist/metisMenu.min',
        lodash: '../bower_components/lodash/dist/lodash.min',
        ngIdle: '../bower_components/ng-idle/angular-idle.min',
        cgBusy: '../src/libs/angular-busy',
        angularTranslate: '../bower_components/angular-translate/angular-translate.min',
        angularTranslateLoaderStaticFiles: '../bower_components/angular-translate-loader-partial/angular-translate-loader-partial.min',
        topNav: '../src/topNav/topNavModule',
        angularBreadcrumbs: '../bower_components/angular-utils-ui-breadcrumbs/uiBreadcrumbs',
        organization: '../src/organization/organizationModule',
        application: '../src/organization/application/applicationModule',
        angularTreeControl: '../bower_components/angular-tree-control/angular-tree-control',
        angularInform: '../bower_components/angular-inform/dist/angular-inform.min'
    },
    shim: {
        'jquery': {
            'exports': 'jquery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angularBootstrap': {
            deps: ['angular', 'jquery', 'bootstrap'],
            'exports': 'angularBootstrap'
        },
        'angularBootstrapTpl': {
            deps: ['angularBootstrap']
        },
        'd3': {
            'exports': 'd3'
        },
        'c3': {
            'exports': 'c3'
        },
        'angular': {
            'exports': 'angular'
        },
        'angularAnimate': {
            deps: ['angular'],
            'angularAnimate': 'ngAnimate'
        },
        'ngResource': {
            deps: ['angular']
        },
        'uiRouter': {
            deps: ['angular']
        },
        'angularMocks': {
            deps: ['angular'],
            'exports': 'angular.mock'
        },
        'morris': {
            deps: ['raphael'],
            exports: 'Morris'
        },
        'app': {
            deps: [
                'jquery',
                'angular',
                'angularAnimate',
                'bootstrap',
                'c3',
                'd3',
                'uiRouter',
                'ngIdle',
                'angularBootstrapTpl',
                'cgBusy',
                'angularTranslate',
                'angularTranslateLoaderStaticFiles',
                'topNav',
                'angularBreadcrumbs',
                'metisMenu',
                'organization',
                'angularTreeControl',
                'angularInform'
            ]
        },
        'metisMenu': {
            deps: ['jquery'],
            'metisMenu': { exports: 'metisMenu' }
        },
        'lodash': {
            'lodash': 'lodash'
        },
        'ngIdle': {
            deps: ['angular'],
            'ngIdle': { exports: "ngIdle" }
        },
        'cgBusy': {
            deps: ['angular'],
            'cgBusy': { exports: "cgBusy" }
        },
        'angularTranslate': {
            deps: ['angular'],
            'angularTranslate': { exports: 'angularTranslate' }
        },
        'angularTranslateLoaderStaticFiles': {
            deps: [
                'angular',
                'angularTranslate'
            ],
            'angularTranslateLoaderStaticFiles': { exports: 'angularTranslateLoaderStaticFiles' }
        },
        'topNav': {
            deps: ['angular'],
            'topNav': { exports: 'topNav' }
        },
        'angularBreadcrumbs': {
            deps: ['angular'],
            'angularBreadcrumbs': { exports: 'angularBreadcrumbs' }
        },
        'application': {
            deps: ['angular'],
            'application': { exports: 'application' }
        },
        'organization': {
            deps: ['angular', 'application'],
            'organization': { exports: 'organization' }
        },
        'angularTreeControl': {
            deps: ['angular'],
            'angularTreeControl': { exports: 'angularTreeControl' }
        },
        'angularInform': {
            deps: ['angular'],
            'angularInform': { exports: 'angularInform' }
        }
    },
    priority: [
        "jquery",
        "angular"
    ]
});
require(
    [
        'jquery',
        'app',
        'c3',
        'lodash'
    ],
    function(jQuery, app, c3, lodash) {
        app.init();
        window.c3 = c3;
        window._ = lodash;
        window.$ = window.jQuery = $;

        $(document).ready(function() {
            $("body").tooltip({ selector: '[data-toggle=tooltip]' });

            $('body').popover({
                selector: '[data-toggle="popover"]',
                trigger: 'hover',
                placement: 'right'
            });
        });
    }
);



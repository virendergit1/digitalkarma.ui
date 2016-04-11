/**
 * digitalkarma - 2016/04/11 03:08:58 UTC
*/

require.config({
    paths: {
        angular: '../bower_components/angular/angular',
        uiRouter: '../bower_components/angular-ui-router/release/angular-ui-router',
        ngResource: '../bower_components/angular-resource/angular-resource',
        angularScenario: '../bower_components/angular-scenario/angular-scenario',
        angularMocks: '../bower_components/angular-mocks/angular-mocks',
        jquery: '../bower_components/jquery/dist/jquery.min',
        d3: '../bower_components/d3/d3',
        c3: '../bower_components/c3/c3',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
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
        angularTreeControl: '../bower_components/angular-tree-control/angular-tree-control'
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
                'angularTreeControl'
            ]
        },
        'metisMenu': {
            deps: ['jquery'],
            'metisMenu': { exports:'metisMenu' }
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
        'organization': {
            deps: ['angular'],
            'organization': { exports: 'organization' }
        },
        'angularTreeControl': {
            deps: ['angular'],
            'angularTreeControl': { exports: 'angularTreeControl' }
        }
    },
    priority: [
        "jquery",
        "angular"
    ]
});
require(
    [
        'app',
        'c3',
        'lodash'
    ],
    function(app, c3, lodash) {
        app.init();
        window.c3 = c3;
        window._ = lodash;
    }
);



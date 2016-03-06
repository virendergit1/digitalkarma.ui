/**
 * digitalkarma - 2016/03/06 15:41:16 UTC
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
        spin: '../bower_components/spin.js/spin.min'
    },
    shim: {
        'jquery': {
            'exports': 'jquery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angularBootstrap': {
            deps: ['jquery', 'bootstrap']
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
                'angular',
                'c3',
                'd3',
                'uiRouter',
                'spin'
            ]
        },
        'metisMenu': {
            'metisMenu': 'metisMenu'
        },
        'lodash': {
            'lodash': 'lodash'
        },
        'spin': {
            "spin": { exports: "Spinner" }
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
        'lodash',
        'jquery',
        'bootstrap',
        'metisMenu',
        'theme'
    ],
    function (app, c3, lodash) {
        app.init();
        window.c3 = c3;
        window._ = lodash;
    }
);



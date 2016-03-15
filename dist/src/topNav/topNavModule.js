angular.module('topNav.template', ['/app/src/topNav/topNavTemplate.html']);

angular.module("/app/src/topNav/topNavTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/topNav/topNavTemplate.html",
    "<div><nav class=\"navbar navbar-default navbar-static-top\" role=navigation style=margin-bottom:0><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=index.html>IT Portfolio Management</a></div><ul class=\"nav navbar-top-links navbar-right\"><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown href=#><i class=\"fa fa-user fa-fw\"></i><i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-user\"><li><a href=# ng-click=logout()><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li></ul></li></ul></nav><ui-breadcrumbs displayname-property=data.displayName abstract-proxy-property=data.proxy template-url=uiBreadcrumbs.tpl.html></ui-breadcrumbs></div>");
}]);

define("topNav/topNavTemplate", function(){});

define('topNav/topNavController',[],function () {
    'use strict';

    var topNavController = function ($scope) {
        
    };

    topNavController.$inject = ['$scope'];

    return topNavController;
});
define('topNav/topNavService',[],function () {
    'user strict';
    var topNavService = function ($q) {
        var self = this;

        self.getMessage = function () {
            return 'hello from service';
        };
    };

    topNavService.$inject = ['$q'];
    return topNavService;
});
define('topNav/topNavDirective',[],function () {
    'use strict';
    var topNavDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/topNav/topNavTemplate.html',
            controller: 'dk.topNavController',
            link: function (scope, element, attrs) {
            }
        };
    };
    return topNavDirective;
});
define('topNav/topNavModule',['require','topNav/topNavTemplate','angular','topNav/topNavController','topNav/topNavService','topNav/topNavDirective'],function (require) {
    'use strict';

    require('topNav/topNavTemplate');

    var angular = require('angular');
    var topNavController = require('topNav/topNavController');
    var topNavService = require('topNav/topNavService');
    var topNavDirective = require('topNav/topNavDirective');

    var topNavModule = angular.module('dk.topNav', []);

    topNavModule
        .controller('dk.topNavController', topNavController)
        .service('dk.topNavService', topNavService)
        .directive('topNavDirective', topNavDirective);

    return topNavModule;
});

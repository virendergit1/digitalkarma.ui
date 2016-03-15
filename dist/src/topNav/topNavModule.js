angular.module('topNav.template', ['/app/src/topNav/topNavTemplate.html']);

angular.module("/app/src/topNav/topNavTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/topNav/topNavTemplate.html",
    "<div><nav class=\"navbar navbar-default navbar-static-top\" role=navigation style=margin-bottom:0><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=.navbar-collapse><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button> <a class=navbar-brand href=index.html>IT Portfolio Management</a></div><ul class=\"nav navbar-top-links navbar-right\"><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown href=#><i class=\"fa fa-envelope fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-messages\"><li><a href=#><div><strong>John Smith</strong> <span class=\"pull-right text-muted\"><em>Yesterday</em></span></div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div></a></li><li class=divider></li><li><a href=#><div><strong>John Smith</strong> <span class=\"pull-right text-muted\"><em>Yesterday</em></span></div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div></a></li><li class=divider></li><li><a href=#><div><strong>John Smith</strong> <span class=\"pull-right text-muted\"><em>Yesterday</em></span></div><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div></a></li><li class=divider></li><li><a class=text-center href=#><strong>Read All Messages</strong> <i class=\"fa fa-angle-right\"></i></a></li></ul></li><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown href=#><i class=\"fa fa-tasks fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-tasks\"><li><a href=#><div><p><strong>Task 1</strong> <span class=\"pull-right text-muted\">40% Complete</span></p><div class=\"progress progress-striped active\"><div class=\"progress-bar progress-bar-success\" role=progressbar aria-valuenow=40 aria-valuemin=0 aria-valuemax=100 style=width:40%><span class=sr-only>40% Complete (success)</span></div></div></div></a></li><li class=divider></li><li><a href=#><div><p><strong>Task 2</strong> <span class=\"pull-right text-muted\">20% Complete</span></p><div class=\"progress progress-striped active\"><div class=\"progress-bar progress-bar-info\" role=progressbar aria-valuenow=20 aria-valuemin=0 aria-valuemax=100 style=width:20%><span class=sr-only>20% Complete</span></div></div></div></a></li><li class=divider></li><li><a href=#><div><p><strong>Task 3</strong> <span class=\"pull-right text-muted\">60% Complete</span></p><div class=\"progress progress-striped active\"><div class=\"progress-bar progress-bar-warning\" role=progressbar aria-valuenow=60 aria-valuemin=0 aria-valuemax=100 style=width:60%><span class=sr-only>60% Complete (warning)</span></div></div></div></a></li><li class=divider></li><li><a href=#><div><p><strong>Task 4</strong> <span class=\"pull-right text-muted\">80% Complete</span></p><div class=\"progress progress-striped active\"><div class=\"progress-bar progress-bar-danger\" role=progressbar aria-valuenow=80 aria-valuemin=0 aria-valuemax=100 style=width:80%><span class=sr-only>80% Complete (danger)</span></div></div></div></a></li><li class=divider></li><li><a class=text-center href=#><strong>See All Tasks</strong> <i class=\"fa fa-angle-right\"></i></a></li></ul></li><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown href=#><i class=\"fa fa-bell fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-alerts\"><li><a href=#><div><i class=\"fa fa-comment fa-fw\"></i> New Comment <span class=\"pull-right text-muted small\">4 minutes ago</span></div></a></li><li class=divider></li><li><a href=#><div><i class=\"fa fa-twitter fa-fw\"></i> 3 New Followers <span class=\"pull-right text-muted small\">12 minutes ago</span></div></a></li><li class=divider></li><li><a href=#><div><i class=\"fa fa-envelope fa-fw\"></i> Message Sent <span class=\"pull-right text-muted small\">4 minutes ago</span></div></a></li><li class=divider></li><li><a href=#><div><i class=\"fa fa-tasks fa-fw\"></i> New Task <span class=\"pull-right text-muted small\">4 minutes ago</span></div></a></li><li class=divider></li><li><a href=#><div><i class=\"fa fa-upload fa-fw\"></i> Server Rebooted <span class=\"pull-right text-muted small\">4 minutes ago</span></div></a></li><li class=divider></li><li><a class=text-center href=#><strong>See All Alerts</strong> <i class=\"fa fa-angle-right\"></i></a></li></ul></li><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown href=#><i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i></a><ul class=\"dropdown-menu dropdown-user\"><li><a href=#><i class=\"fa fa-user fa-fw\"></i> User Profile</a></li><li><a href=#><i class=\"fa fa-gear fa-fw\"></i> Settings</a></li><li class=divider></li><li><a href=# ng-click=logout()><i class=\"fa fa-sign-out fa-fw\"></i> Logout</a></li></ul></li></ul></nav></div>");
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

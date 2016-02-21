angular.module('chartTester.template', ['/app/src/chartTester/templates/chartTesterTemplate.html']);

angular.module("/app/src/chartTester/templates/chartTesterTemplate.html", []).run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("/app/src/chartTester/templates/chartTesterTemplate.html",
    "<div id=chart>Flow Chart</div>");
}]);

define("chartTester/chartTesterTemplate", function(){});

define('chartTester/chartTesterController',[],function() {
    'use strict';

    var chartTesterController = function ($scope, $window) {
        $scope.var1 = "hello from directive";
        var chart = $window.c3.generate({
            data: {
                rows: [
                    ['data4', 'data2', 'data3'],
                    [90, 120, 300],
                    [40, 160, 240],
                    [50, 200, 290],
                    [120, 160, 230],
                    [80, 130, 300],
                    [90, 220, 320]
                ],
                type: 'bar'
            }
        });

        chart.flow({
            columns: [
                ['data4', 500],
                ['data2', 100],
                ['data3', 200]
            ],
            length: 0
        });

    };

    chartTesterController.$inject = ['$scope', '$window'];

    return chartTesterController;
});
define('chartTester/chartTesterService',[],function() {
    'user strict';
    var chartTesterService = function ($q) {
        var self = this;

        self.getMessage = function() {
            return 'hello from service';
        };
    };

    chartTesterService.$inject = ['$q'];
    return chartTesterService;
});
define('chartTester/chartTesterDirective',[],function() {
    'use strict';
    var chartTesterDirective = function() {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '/app/src/chartTester/templates/chartTesterTemplate.html',
            controller: 'chartTesterController',
            link: function(scope, element, attrs) {
            }
        };
    };
    return chartTesterDirective;
});
define('chartTester/chartTesterModule',['require','chartTester/chartTesterTemplate','angular','chartTester/chartTesterController','chartTester/chartTesterService','chartTester/chartTesterDirective'],function(require) {
    'use strict';

    require('chartTester/chartTesterTemplate');

    var angular = require('angular');
    var chartTesterController = require('chartTester/chartTesterController');
    var chartTesterService = require('chartTester/chartTesterService');
    var chartTesterDirective = require('chartTester/chartTesterDirective');

    var chartTesterModule = angular.module('my.chartTester', ['chartTester.template']);

    chartTesterModule
        .controller('chartTesterController', chartTesterController)
        .service('chartTesterService', chartTesterService)
        .directive('chartTesterDirective', chartTesterDirective);

    return chartTesterModule;
});



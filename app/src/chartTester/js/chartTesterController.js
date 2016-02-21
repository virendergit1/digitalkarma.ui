define(function() {
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
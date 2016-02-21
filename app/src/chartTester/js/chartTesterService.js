define(function() {
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
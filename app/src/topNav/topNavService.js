define(function () {
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
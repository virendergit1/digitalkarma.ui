define(function () {
    'user strict';
    var loginService = function ($q) {
        var self = this;

        self.validateUser = function (userId, password) {
            return 'user validated';
        };
    };

    loginService.$inject = ['$q'];
    return loginService;
});
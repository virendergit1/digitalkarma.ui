define(function () {
    'use strict';

    var topNavController = function ($scope, session) {
        $scope.userName = $scope.userName = session.user.userInfo.firstName + " " + session.user.userInfo.lastName;
    };

    topNavController.$inject = ['$scope', 'Session'];

    return topNavController;
});
define(function () {
    'use strict';

    var loginController = function ($scope, $state, authenticationService) {
        var self = this;

        $scope.submitted = false;
        
        $scope.validateUser = function (email, password) {
            $scope.submitted = true;

            if ($scope.login.email.$valid && $scope.login.password.$valid) {
                //--+--validate user here--
                console.log(authenticationService.validateUser());
                $state.transitionTo('home');
            } 
        };
    };

    loginController.$inject = ['$scope', '$state', 'dk.authenticationService'];

    return loginController;
});
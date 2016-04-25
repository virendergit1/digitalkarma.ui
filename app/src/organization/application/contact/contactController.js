define(function() {
    'use strict';

    var contactController = function ($scope, contactService) {

        $scope.promise = null;

        $scope.getBusinessOwner = function(val) {
            $scope.promise = contactService.getBusinessOwners(val);

            return $scope.promise.then(function(data) {
                return _.filter(data, function (filter) {
                    return filter.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }, function(error) {
                //--+--reject error
            });
        };

        $scope.getITOwner = function (val) {
            $scope.promise = contactService.getBusinessOwners(val);

            return $scope.promise.then(function (data) {
                return _.filter(data, function (filter) {
                    return filter.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }, function (error) {
                //--+--reject error
            });
        };

        $scope.getITSupportContact = function (val) {
            $scope.promise = contactService.getBusinessOwners(val);

            return $scope.promise.then(function (data) {
                return _.filter(data, function (filter) {
                    return filter.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
            }, function (error) {
                //--+--reject error
            });
        };

       
        var init = function () {
            
        };

        init();
    };

    contactController.$inject = ['$scope', 'contactService'];

    return contactController;
});
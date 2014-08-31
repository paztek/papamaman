'use strict';

describe('Controller: LoginCtrl', function() {

    // Load the controller's module
    beforeEach(module('papamaman'));

    var LoginCtrl, $scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope) {
        $scope = $rootScope.$new();
        LoginCtrl = $controller('LoginCtrl', {
            $scope: $scope
        });
    }));
});
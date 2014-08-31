'use strict';

describe('Controller: SignupCtrl', function() {

    // Mock modules required by the app


    // Load the controller's module
    beforeEach(module('papamaman'));

    var SignupCtrl, $scope, AuthServiceMock;

    // Mock the AuthService
    beforeEach(inject(function($q) {
    }));

    // Initialize the controller, a mock scope and the mock AuthService
    beforeEach(inject(function($controller, $rootScope, $location, $q, AuthService) {
        $scope = $rootScope.$new();
        AuthServiceMock = AuthService;
        AuthServiceMock.signup = $q.defer();
        SignupCtrl = $controller('SignupCtrl', {
            $scope: $scope,
            $location: $location,
            AuthService: AuthService
        });
    }));

    it('should try to signup using the AuthService', function() {
        var credentials = { email: 'john.doe@example.org', password: 'p4ssw0rd' };
        angular.extend($scope, credentials);
        spyOn(AuthServiceMock, 'signup');
        expect(AuthServiceMock.signup).toHaveBeenCalledWith(credentials);
        $scope.signup();
    });
});
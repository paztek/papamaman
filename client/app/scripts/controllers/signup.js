'use strict';

app.controller('SignupCtrl', ['$scope', '$location', 'AuthService', 'FlashService', function($scope, $location, AuthService, FlashService) {
    $scope.signup = function() {

        var infos = { email: $scope.email, password: $scope.password };

        AuthService.signup(infos)
            .then(function() {
                FlashService.setMessage('success', 'Account successfully created. Please confirm your email by clicking on the link we just sent you.');
                $location.path('/login');
            }, function(response) {
                if (response.data.email) {
                    $scope.signupForm.email.$error.server = response.data.email[0];
                }
                if (response.data.password) {
                    $scope.signupForm.password.$error.server = response.data.password[0];
                }
            });
    };
}]);
'use strict';

app.controller('LoginCtrl', ['$scope', '$location', 'AuthService', 'FlashService', function($scope, $location, AuthService, FlashService) {
    $scope.login = function() {

        var credentials = { email: $scope.email, password: $scope.password };

        AuthService.login(credentials)
            .then(function(response) {
                // Upon success, set a flash message and redirect to the homepage
                FlashService.setMessage('success', 'You successfully logged in!');
                $location.path('/');
                return response;
            }, function(response) {
                // Display errors on the email and password fields of the form
                $scope.loginForm.password.$invalid = true;
                $scope.loginForm.email.$invalid = true;
                $scope.loginForm.password.$error.server = response.data.message;
            });
    };
}]);
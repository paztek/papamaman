'use strict';

app.controller('LoginCtrl', ['$scope', '$location', 'AuthService', 'FlashService', function($scope, $location, AuthService, FlashService) {
    $scope.login = function() {

        var credentials = { email: $scope.email, password: $scope.password };

        AuthService.login(credentials)
            .then(function(response) {
                FlashService.setMessage('success', 'You successfully logged in!');
                $location.path('/');
                return response;
            }, function(response) {
                $scope.loginForm.password.$invalid = true;
                $scope.loginForm.email.$invalid = true;
                $scope.loginForm.password.$error.server = response.data.message;
            });
    };
}]);
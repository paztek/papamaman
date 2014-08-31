'use strict';

app.controller('LoginCtrl', ['$scope', '$location', 'AuthService', 'flash', function($scope, $location, AuthService, flash) {
    $scope.login = function() {

        var credentials = { email: $scope.email, password: $scope.password };

        AuthService.login(credentials)
            .then(function(response) {
                $location.path('/');
                return response;
            });
    };
}]);
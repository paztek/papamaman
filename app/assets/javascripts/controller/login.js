app.controller('LoginCtrl', function($scope, $location, AuthService) {
    $scope.login = function() {

        var credentials = { email: $scope.email, password: $scope.password };

        AuthService.login(credentials)
            .then(function(response) {
                $location.path('/');
                return response;
            });
    };
});
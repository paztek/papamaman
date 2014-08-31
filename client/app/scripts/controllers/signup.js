'use strict';

app.controller('SignupCtrl', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {
    $scope.signup = function() {

        var infos = { email: $scope.email, password: $scope.password };

        AuthService.signup(infos)
            .success(function(data, status, headers, config) {
                $location.path('/login');
            })
            .error(function(data, status, headers, config) {
                console.log('error');
                console.log(data);
            });
    };
}]);
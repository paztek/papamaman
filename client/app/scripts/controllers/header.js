'use strict';

app.controller('HeaderCtrl', ['$scope', '$location', 'AuthService', 'UserService', function($scope, $location, AuthService, UserService) {
    $scope.logout = function() {
        AuthService.logout();
        $location.path('/');
    };

    $scope.user = UserService.user;
}]);
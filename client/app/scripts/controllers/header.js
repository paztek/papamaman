'use strict';

app.controller('HeaderCtrl', ['$scope', '$location', 'UserService', function($scope, $location, UserService) {
    $scope.logout = function() {
        UserService.remove();
        $location.path('/');
    };

    $scope.user = UserService.user;
}]);
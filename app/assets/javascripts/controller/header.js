app.controller('HeaderCtrl', function($scope, $location, UserService) {
    $scope.logout = function() {
        UserService.remove();
        $location.path('/');
    };

    $scope.user = UserService.user;
});
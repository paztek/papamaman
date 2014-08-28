app.controller('HeaderCtrl', function($rootScope, $scope) {
    $scope.logout = function() {
        $scope.isLoggedIn = false;
        $scope.email = 'john.doe@example.org';

        $rootScope.$emit('auth:logout');
    };

    $scope.isLoggedIn = false;
    $scope.email = 'john.doe@example.org';

    $rootScope.$on('auth:login', function(user) {
        $scope.isLoggedIn = true;
        $scope.email = user.email;
    });
});
app.controller('SignupCtrl', function($scope, $http, $location) {
    $scope.signup = function() {

        var data = { email: $scope.email, password: $scope.password };
        $http.post('/signup', data)
            .success(function(data, status, headers, config) {
                $location.path('/login');
            })
            .error(function(data, status, headers, config) {
                console.log('error');
                console.log(data);
            });
    };
});
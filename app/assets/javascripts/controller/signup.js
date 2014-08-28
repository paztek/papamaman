app.controller('SignupCtrl', function($scope, $http) {
    $scope.signup = function() {

        var data = { email: $scope.email, password: $scope.password };
        $http.post('/signup', data)
            .success(function(data, status, headers, config) {
                console.log('success');
                console.log(data);
            })
            .error(function(data, status, headers, config) {
                console.log('error');
                console.log(data);
            });
    };
});
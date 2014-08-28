app.controller('LoginCtrl', function($scope, $http, $location) {
    $scope.login = function() {

        var data = { email: $scope.email, password: $scope.password };
        $http.post('/login', data)
            .success(function(data, status, headers, config) {
                console.log('success');
                console.log(data);
                // TODO Store Authentication token
                $location.path('/');
            })
            .error(function(data, status, headers, config) {
                console.log('error');
                console.log(data.message);
            });
    };
});
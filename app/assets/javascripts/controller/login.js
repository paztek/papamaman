app.controller('LoginCtrl', function($rootScope, $scope, $http, $location) {
    $scope.login = function() {

        var data = { email: $scope.email, password: $scope.password };

        $http.post('/login', data)
            .success(function(data, status, headers, config) {
                console.log('success');
                console.log(data);

                $rootScope.$emit('auth:login', data);
                $location.path('/');
            })
            .error(function(data, status, headers, config) {
                console.log('error');
                console.log(data.message);
            });
    };
});
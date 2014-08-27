app.controller('LoginCtrl', function($scope, $auth) {
    $scope.login = function() {
        $auth.login({ email: $scope.email, password: $scope.password })
            .then(function() {

            })
            .catch(function(response) {

            });
    };
    $scope.authenticate = function(provider) {
        $auth.authenticate(provider)
            .then(function() {

            })
            .catch(function(response) {

            });
    };
});
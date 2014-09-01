'use strict';

app.controller('ResetPasswordCtrl', ['$scope', '$location', 'AuthService', 'FlashService', function($scope, $location, AuthService, FlashService) {
    var token = $location.search().token;

    $scope.resetPassword = function() {
        var password = $scope.password;
        AuthService.resetPassword(token, password)
            .then(function(response) {
                // Upon success, set a flash message and redirect to the login page
                var message = response.data.message;
                FlashService.setMessage('info', message);
                $location.search('token', null);
                $location.path('/login');
            }, function(response) {
                if (response.data.reset_password_token) {
                    // Display an error on the password field of the form
                    $scope.resetPasswordForm.password.$invalid = true;
                    $scope.resetPasswordForm.password.$error.server = response.data.reset_password_token[0];
                }
            });
    };
}]);
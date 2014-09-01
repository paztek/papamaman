'use strict';

app.controller('ForgotPasswordCtrl', ['$scope', '$location', 'AuthService', 'FlashService', function($scope, $location, AuthService, FlashService) {
    $scope.askResetPasswordInstructions = function() {
        var email = $scope.email;

        AuthService.askResetPasswordInstructions(email)
            .then(function(response) {
                // Upon success, set a flash message and redirect to the login page
                var message = response.data.message;
                FlashService.setMessage('info', message);
                $location.path('/login');
            }, function(response) {
                // Display an error on the email field of the form
                var message = response.data.message;
                $scope.forgotPasswordForm.email.$invalid = true;
                $scope.forgotPasswordForm.email.$error.server = message;
            });
    };
}]);
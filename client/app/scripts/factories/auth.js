'use strict';

app.factory('AuthService', ['$http', 'UserService', function($http, UserService) {
    var auth = {};

    auth.signup = function(infos) {
        // Register the user with the provided infos
        return $http.post('/api/auth/signup', infos);
    };

    auth.login = function(credentials) {
        // Authenticate the user with the provided credentials
        return $http.post('/api/auth/login', credentials)
            .then(function(response) {
                var user = response.data;
                user.isLoggedIn = true;

                // Store the logged in user
                UserService.set(user);
                return response;
            });
    };

    auth.logout = function() {
        // Remove the logged in user from the user store
        UserService.remove();
    };

    auth.askResetPasswordInstructions = function(email) {
        // Ask the server to send an email with instructions to reset the password
        var infos = { email: email };
        return $http.post('/api/auth/send-reset-password-instructions', infos);
    };

    auth.resetPassword = function(token, password) {
        // Send the new password to the server along with the reset password token
        var infos = { token: token, password: password };
        return $http.post('/api/auth/reset-password', infos);
    };

    return auth;
}]);
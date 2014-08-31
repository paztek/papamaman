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

    return auth;
}]);
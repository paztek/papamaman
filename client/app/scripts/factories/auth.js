'use strict';

app.factory('AuthService', ['$http', 'UserService', function($http, UserService) {
    var auth = {};

    auth.signup = function(infos) {
        return $http.post('/api/auth/signup', infos);
    };

    auth.login = function(credentials) {
        return $http.post('/api/auth/login', credentials)
            .then(function(response) {
                var user = response.data;
                user.isLoggedIn = true;
                UserService.set(user);
                return response;
            });
    };

    auth.logout = function() {
        UserService.remove();
    };

    return auth;
}]);
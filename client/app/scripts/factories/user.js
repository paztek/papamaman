'use strict';

app.factory('UserService', ['$cookieStore', function($cookieStore) {

    var defaultUser = { isLoggedIn: false };

    var _user = $cookieStore.get('current_user') || angular.copy(defaultUser);

    return {
        user: _user,
        set: function(currentUser) {
            // Copy all the properties of the user
            angular.extend(_user, currentUser);
            $cookieStore.put('current_user', currentUser);
        },
        remove: function() {
            $cookieStore.remove('current_user');
            // Remove all the properties of the user except the one present in defaultUser
            for (var k in _user) {
                if (!defaultUser.hasOwnProperty(k)) {
                    delete _user[k];
                } else {
                    _user[k] = defaultUser[k];
                }
            }
        }
    }
}]);
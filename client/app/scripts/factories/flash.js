'use strict';

app.factory('FlashService', ['$rootScope', function($rootScope) {
    var messages = [];

    var currentMessages = [];

    $rootScope.$on('$routeChangeSuccess', function() {
        currentMessages = messages;
        messages = [];
    });

    return {
        setMessage: function(type, text) {
            messages.push({ type: type, text: text });
        },
        getCurrentMessages: function() {
            return currentMessages;
        }
    };

}]);
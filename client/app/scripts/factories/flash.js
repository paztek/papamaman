'use strict';

app.factory('FlashService', ['$rootScope', function($rootScope) {
    var messages = [];

    var currentMessages = [];

    // Everytime the route changes, previously current messages are discarded and queued messages become the current ones
    $rootScope.$on('$routeChangeSuccess', function() {
        currentMessages = messages;
        messages = [];
    });

    return {
        setMessage: function(type, text) {
            // To integrate nicely with Bootstrap, type must be one of { 'danger', 'warning', 'info', 'success' }
            messages.push({ type: type, text: text });
        },
        getCurrentMessages: function() {
            return currentMessages;
        }
    };

}]);
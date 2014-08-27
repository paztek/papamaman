app.controller('HomeCtrl', function($scope, settings) {
    // Yahoooooo, accessing configuration values provided by Rails!
    console.log('Facebook App ID : ' + settings['FACEBOOK_APP_ID']);
});
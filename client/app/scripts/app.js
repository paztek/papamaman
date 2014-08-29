window.app = angular.module('papamaman', ['ngRoute', 'ngCookies', 'ngMessages']);

// Configuration
app.config(['$routeProvider', function($routeProvider) {

    // Routing
    $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'views/home/index.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                templateUrl: 'views/authentication/login.html'
            })
            .when('/signup', {
                controller: 'SignupCtrl',
                templateUrl: 'views/authentication/signup.html'
            })
            .when('/profile', {
                templateUrl: 'views/users/profile.html',
                controller: 'ProfileCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    ;
}]);


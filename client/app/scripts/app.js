'use strict';

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
        .when('/forgot-password', {
            templateUrl: 'views/authentication/forgot-password.html',
            controller: 'ForgotPasswordCtrl'
        })
        .when('/reset-password', {
            templateUrl: 'views/authentication/reset-password.html',
            controller: 'ResetPasswordCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


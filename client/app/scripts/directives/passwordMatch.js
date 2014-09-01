'use strict';

app.directive('passwordMatch', ['$parse', function($parse) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            if (!ngModel || !attrs.passwordMatch)  {
                return;
            }

            var firstPassword = $parse(attrs.passwordMatch);

            var validator = function (value) {
                var temp = firstPassword(scope);
                var v = value === temp;
                ngModel.$setValidity('match', v);
                return value;
            };

            ngModel.$parsers.unshift(validator);
            ngModel.$formatters.push(validator);
            attrs.$observe('passwordMatch', function () {
                validator(ngModel.$viewValue);
            });
        }
    };
}]);
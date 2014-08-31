'use strict';

app.controller('FlashCtrl', ['$scope', 'FlashService', function($scope, FlashService) {
    $scope.messages = FlashService.getCurrentMessages();
}]);
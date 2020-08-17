(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController($scope,$filter, $injector){
    $scope.sayMessage = function(){
        var words = $scope.items.split(',');
        if(words.length < 4) $scope.message =  "Enjoy!";
        else $scope.message = "Too much!";
    }
}


})();
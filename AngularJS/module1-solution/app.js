(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController($scope,$filter, $injector){
	$scope.items = "";
    $scope.sayMessage = function(){
        var words = $scope.items.split(',');
        if($scope.items == 0) $scope.message =  "Enter data!";
        else if(words.length < 4) $scope.message =  "Enjoy!";
        else $scope.message = "Too much!";
    }
}


})();
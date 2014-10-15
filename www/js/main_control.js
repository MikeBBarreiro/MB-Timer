(function(){
  'use strict';

  angular.module('mb-timer')
  .controller('MainCtrl', ['$scope', '$interval', function($scope, $interval){
    $scope.clock = 120;
    var timer;

    $scope.start = function(){
      timer = $interval(reduceTime, 1000);
    };

    function reduceTime(){
      $scope.clock -= 1;

      if($scope.clock <= 0){
        navigator.vibrate(3000);
        $interval.cancel(timer);
      }
    }

  }]);

})();

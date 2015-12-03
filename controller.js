angular
  .module('myApp')
  .controller('myController', myController);

function myController($scope, myFactory) {
  $scope.name = "Bryan";
  $scope.movie = "";
  console.log(myFactory.getMovie());
  $scope.getMovie = function() {
    $scope.name = $scope.movie;
    $scope.movie = "";
  };
}

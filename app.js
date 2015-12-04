angular
  .module('myApp', ['ui.router'])
  .config(configFunction);

function configFunction($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('test', {
      url: "/test",
      templateUrl: "./partial.html",
      controller: "myController"
  });

}

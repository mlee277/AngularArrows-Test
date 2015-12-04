angular
  .module('myApp')
  .factory('myFactory', myFactory);

myFactory.$inject = ['$http'];

function myFactory($http) {
  return {
    getMovieInfo: getMovieInfo
  };
  function getMovieInfo() {

    return $http.get('http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json')
          .then(getMovieComplete)
          .catch(getMovieFailed);
    function getMovieComplete(response) {
      return response.data;
    }
    function getMovieFailed(error) {
      console.log(error);
      // logger.error('ERROR:' + error);
    }
  }
}

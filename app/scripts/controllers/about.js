'use strict';

/**
 * @ngdoc function
 * @name dvdRentalFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dvdRentalFrontendApp
 */
angular.module('dvdRentalFrontendApp')
  .controller('AboutCtrl', function (lubTmdbApi,$location) {
    var vm = this
    vm.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    vm.tvShows = [];
    vm.loadMovieView = loadMovieView;
    vm.exec = exec;

 function exec (type, method, queryBy,query) {
     var queries = {};
     queries[queryBy] = query;
     lubTmdbApi[type][method](queries).then(suc, err);
 }

function  suc (result){
  for(var i=0; i<=result.data.results.length;i++){
      vm.tvShows.push(result.data.results[i]);
  }
};

function err (results) {
}

    function activate(){
            exec('tv', 'popular','');
    }
    activate();

    function loadMovieView(id){
      $location.path('/movieView/'+id+'/');
    }
  });

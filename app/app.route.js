(function(){
  'use strict';
  angular.module('dvdRentalFrontendApp')
         .config(function($stateProvider, $urlRouterProvider) {
           //
          // For any unmatched url, redirect to /state1
          $urlRouterProvider.otherwise("/movies");
          //
          // Now set up the states
          $stateProvider
              .state('app', {
                  abstract: true,
                  templateUrl: 'views/home.html',
                  resolve: {
                  auth: function($auth) {  
                      $auth.validateUser().then(function(resp){
                          return resp;
                      }).catch(function(resp){
                        return false;
                      });
                  }
              }
          })
          .state('signIn', {
           url : '/signin',
          templateUrl: 'views/signin.html',
           controller: 'SigninController',
          controllerAs: 'signinCtrl',
          data : {
            showSideNav : false
           }
          })
          .state('signOut', {
            url : '/signout',
            controller: 'SignoutController',
            controllerAs: 'signoutCtrl',
            data : {
                showSideNav : false
            }
          })
          .state('discover', {
            url : '/discover',
            templateUrl: 'views/discover.html',
            controller: 'DiscoverCtrl',
            controllerAs: 'discoverCtrl',
            data : {
                showSideNav : false
            }
          })
          .state('app.movies', {
            url : '/movies',
            templateUrl: 'views/movies.html',
            controller: 'MoviesCtrl',
            params: {moviesToShow : null},
            controllerAs: 'movies',
            data : {
                showSideNav : true
            }
          })
          .state('app.shows', {
            url : '/shows',
            templateUrl: 'views/shows.html',
            params: {showsToShow : null},
            controller: 'ShowsCtrl',
            controllerAs: 'shows',
            data : {
                showSideNav : true
            }
          })
          .state('app.people', {
            url : '/people',
            templateUrl: 'views/people.html',
            params: {peopleToShow : null},
            controller: 'PeopleCtrl',
            controllerAs: 'people',
            data : {
                showSideNav : true
            }
          })
          .state('app.movieView', {
            url : '/movieView/:id/',
            templateUrl: 'views/movieview.html',
            controller: 'MovieviewCtrl',
            controllerAs: 'movieView',
            params: {moviesToShow : null},
            data : {
                showHeaderSlideshow : true,
                showSideNav : false
            }
          })
          .state('app.showView', {
            url : '/showView/:id/',
            templateUrl: 'views/showview.html',
            params: {showsToShow : null},
            controller: 'ShowviewCtrl',
            controllerAs: 'showView',
            data : {
                showHeaderSlideshow : true,
                showSideNav : false
            }
          })
          .state('app.personView', {
            url : '/personView/:id/',
            templateUrl: '/views/personview.html',
            params: {peopleToShow : null},
            controller: 'PersonviewCtrl',
            controllerAs: 'personView',
            data : {
                showHeaderSlideshow : true,
                showSideNav : false
            }
          })
      });
})()

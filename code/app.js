var app = angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('list', {
                url: '/',
                templateUrl: './views/list/list-tpl.html',
                controller: 'listCtrl'
            })
            .state('movie', {
                url: '/movie/:imdbId',
                templateUrl: './views/movie/movie-tpl.html',
                controller: 'movieCtrl'
            });
        $urlRouterProvider.otherwise('/');
    });

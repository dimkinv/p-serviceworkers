app.controller('listCtrl', function mainCtrl($scope, proxyService) {
    var model = {
        movies: null
    };

    proxyService.getMovies().then(function(movies){
       model.movies = movies;
    });

    var events = {
        remove: function (movie) {
            proxyService.removeMovie(movie.imdbId).then(function () {
                var index = model.movies.indexOf(movie);
                model.movies.splice(index, 1);
            });
        },

        save: function(movie){
          proxyService.updateMovie(movie);
        }
    };

    $scope.model = model;
    $scope.events = events;
});

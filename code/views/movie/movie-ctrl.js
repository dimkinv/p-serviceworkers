angular.module('app').controller('movieCtrl', function ($scope, $stateParams, $state, proxyService) {
    var model = {
        currentMovie: {}
    };

    var events = {
        save: function () {
            var action = model.imdbId === 'new' ? 'addMovie' : 'updateMovie';
            proxyService[action](model.currentMovie).then(function () {
                $state.go('list');
            });
        }
    };

    $scope.model = model;
    $scope.events = events;

    model.imdbId = $stateParams.imdbId;
    if (model.imdbId === 'new') {
        return;
    }

    proxyService.getMovieById(model.imdbId).then(
        function (movie) {
            movie.releaseDate = (movie.releaseDate && movie.releaseDate.indexOf('T') !== -1) ? movie.releaseDate.split('T')[0] : movie.releaseDate;
            model.currentMovie = movie;
        },
        function (err) {
            console.log(err)
        }
    )

});

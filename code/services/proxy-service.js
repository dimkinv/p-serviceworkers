app.service('proxyService', function proxyService($http, $q){
    this.addMovie = function(newMovie){
        var defer = $q.defer();

        $http.post('https://movies-db.herokuapp.com/api/movies', newMovie)
            .success(function(data){
                defer.resolve(data);
            })
            .error(function(err, status){
                console.log(err, status);
            });

        return defer.promise;
    };

    this.updateMovie = function(movie){
        var defer = $q.defer();

        $http.put('https://movies-db.herokuapp.com/api/movies/' + movie.imdbId, movie)
            .success(function(data){
                defer.resolve(data);
            })
            .error(function(err, status){
                console.log(err, status);
            });

        return defer.promise;
    };

    this.removeMovie = function(movieId){
        var defer = $q.defer();

        $http.delete('https://movies-db.herokuapp.com/api/movies/' + movieId)
            .success(function(data){
                defer.resolve(data);
            })
            .error(function(err, status){
                console.log(err, status);
            });

        return defer.promise;
    };

    this.getMovies = function(){
        var defer = $q.defer();

        $http.get('https://movies-db.herokuapp.com/api/movies')
            .success(function(data){
               defer.resolve(data);
            });

        return defer.promise;
    };

    this.getMovieById = function(imdbId){
        var defered = $q.defer();
        $http.get('https://movies-db.herokuapp.com/api/movies/' + imdbId)
            .success(function(movie){
                defered.resolve(movie);
            })
            .error(function(data, status){
                if(status === 404){
                    defered.reject('movie not found');
                }
            });

        return defered.promise;
    }
});

var app = angular.module('myApp', []);

app.controller('myFactoryCtrl', function($scope, myFactory) {
    $scope.data = {};

    $scope.updateMovie = function() {
        myFactory.setMovie($scope.data.movie);
    };

    $scope.submitMovie = function() {
        myFactory.callIomdb()
            .then(function(data) {
                $scope.data.movieData = data;
            }, function(data) {
                alert(data);
            })
    };
});

app.factory('myFactory', function($http, $q) {
    var service = {};
    var baseUrl = 'http://www.omdbapi.com/?t=';
    var _movie = '';
    var _finalUrl = '';

    var makeUrl = function() {
        _movie = _movie.split(' ').join('+');
        _finalUrl = baseUrl + _movie + '&plot=short&r=json'
        return _finalUrl;
    }

    service.setMovie = function(movie) {
        _movie = movie;
    }

    service.getMovie = function() {
        return _movie;
    }

    service.callIomdb = function() {
        makeUrl();
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: _finalUrl
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function() {
            deferred.reject('There was an error')
        })
        return deferred.promise;
    }

    return service;
});
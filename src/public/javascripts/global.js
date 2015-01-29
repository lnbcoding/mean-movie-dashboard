$(document).ready(function() {
    $(".popular-movies-home").hide();

    $(".popular-movies-link a").click(function(event) {
        event.preventDefault();
        $.ajax({
            url: '/movies/popular',
            type: 'GET'
        }).done(function() {
            $(".popular-movies-home").show();
            $(".popular-movies-link").hide();
        });
    });

    $(".hide-movie-info").click(function(event) {
        event.preventDefault();
        $.ajax({
            url: '/',
            type: 'GET'
        }).done(function() {
            $(".popular-movies-home").hide();
        });
    });
});

(function() {
    // var movieTitle = "my test.asp?name=ståle&car=saab";
    // var movieTitle = encodeURI(movieTitle);

    var app = angular.module('movieDB', []);

    app.controller('SearchController', function() {
        this.info = searchResult;
    });
})();

/*
var array = ['foo', 'bar', 'yay'];
$.each(array, function(index, element){
    if (element === 'foo') {
        return true; // continue
    }
    console.log(this);
    if (element === 'bar') {
        return false; // break
    }
}); */

// var searchTitle = document.getElementById('titleSearch').value
// alert(searchTitle);

/****************************************/

/*
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

  movie_title = params[:title].force_encoding('ASCII-8BIT')
  movie_year = params[:year]

  movie_title = URI::encode(movie_title)

  movie_string = HTTParty.get("http://www.omdbapi.com/?t=#{movie_title}+&y=#{movie_year}+&plot=short&r=json")

  if movie_string
    @movie = JSON.parse(movie_string)
    erb :movie
  else
    redirect '/'
  end
*/


/*******************Displaying the JSON response ********************/
// for (var prop in test) {
//   if( test.hasOwnProperty( prop ) ) {
//     if (prop === "Poster") break;
//     console.log(prop + ": " + test[prop]);
//   }
// }

/*******************Testing JSON response ********************/

// var testInfo = {
//     Title: "Frozen",
//     Year: "2013",
//     Rated: "PG",
//     Released: "27 Nov 2013",
//     Runtime: "102 min",
//     Genre: "Animation, Adventure, Comedy",
//     Director: "Chris Buck, Jennifer Lee",
//     Writer: "Jennifer Lee (screenplay), Hans Christian Andersen (inspired by the story \"The Snow Queen\" by), Chris Buck (story), Jennifer Lee (story), Shane Morris (story), Dean Wellins (additional story)",
//     Actors: "Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad",
//     Plot: "When a princess with the power to turn things into ice curses her home in infinite winter, her sister, Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
//     Language: "English, Icelandic",
//     Country: "USA",
//     Awards: "Won 2 Oscars. Another 68 wins & 53 nominations.",
//     Poster: "http://ia.media-imdb.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg",
//     Metascore: "74",
//     imdbRating: "7.7",
//     imdbVotes: "300,466",
//     imdbID: "tt2294629",
//     Type: "movie",
//     Response: "True",
//     isThere: true
// };
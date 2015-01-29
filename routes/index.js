var express = require('express');
var router = express.Router();
var request = require("request");

/********** Start of Routes used in Simple Movie Search ***********************/
router.get('/', function(req, res) {
    res.redirect('/movies');
});

router.get('/movies', function(req, res) {
    res.render('simpler_search.html', {
        title: "Da Mean Movie Dashboard"
    });
});

/********** End of Routes used in Simple Movie Search ***********************/

router.get('/movies/popular', function(req, res) {
    res.render('movies.html', {
        title: "Da Mean Movie Dashboard"
    });
});

router.get('/movie/search', function(req, res) {
    var movieTitle = req.params('title');
    var movieYear = req.params('year');
    var searchURL = "http://www.omdbapi.com/?t="+movieTitle+"&y="+movieYear+"&plot=short&r=json"

    request('http://www.google.com', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
        }
    })

    var options = {
        host: 'www.google.com',
        port: 80,
        // path: '/upload',
        method: 'GET'
    };

    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function(chunk) {
            console.log('BODY: ' + chunk);
        });
    });

    res.render('movie.html', {
        title: "Da Mean Movie Dashboard",
        // searchResult: JSON.parse(xhr.response),
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
    res.redirect('/movies');
});

router.get('/movies', function(req, res) {
    res.render('search', {
        title: "Da Mean Movie Dashboard"
    });
});

router.get('/movies/popular', function(req, res) {
    res.render('movies', {
        title: "Da Mean Movie Dashboard"
    });
});

router.get('/movie/search', function(req, res) {
    res.render('movie', {
        title: "Da Mean Movie Dashboard"
    });
});

module.exports = router;

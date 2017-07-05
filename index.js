var express = require('express');
var app = express();
var mongoose = require('mongoose');
var router = express.Router();
var morgan = require('morgan');
var bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api',router);

mongoose.connect('mongodb://localhost/moviesData');
var MoviesSimilarModel = require('./models/movies-similar');

router.use(function(req,res,next) {
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","*");
    console.log('An api request is made');
    next();
});

router.route('/moviessimilar')
    .get(function(req,res) {
        MoviesSimilarModel.find(function(err,similarObjects) {
            if(err) {
                res.send(err)
            }
            res.json(similarObjects);
        });
    });

router.route('/moviessimilar/books')
    .post(function(req,res) {
        MoviesSimilarModel.findOne({movie_id: req.body.movie_id},function(err,moviessimilar) {
            if(err) {
                console.log(err);
            } else if(moviessimilar === null){
                console.log('New movie');
                var movieObj = new MoviesSimilarModel();

                movieObj.movie_id = req.body.movie_id;
                movieObj.movie_name = req.body.movie_name;
                movieObj.movie_wikipedia_description = req.body.movie_wikipedia_description;
                movieObj.movie_wikipedia_url = req.body.movie_wikipedia_url;
                movieObj.movie_youtube_url = req.body.movie_youtube_url;
                movieObj.movie_youtube_id = req.body.movie_youtube_id;

                movieObj.books = req.body.books;

                movieObj.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            } else {
                console.log('Update');
                moviessimilar.books = req.body.books;
                moviessimilar.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            }
        });
    });

router.route('/moviessimilar/shows')
    .post(function(req,res) {
        MoviesSimilarModel.findOne({movie_id: req.body.movie_id},function(err,moviessimilar) {
            if(err) {
                console.log(err);
            } else if(moviessimilar === null){
                console.log('New movie');
                var movieObj = new MoviesSimilarModel();

                movieObj.movie_id = req.body.movie_id;
                movieObj.movie_name = req.body.movie_name;
                movieObj.movie_wikipedia_description = req.body.movie_wikipedia_description;
                movieObj.movie_wikipedia_url = req.body.movie_wikipedia_url;
                movieObj.movie_youtube_url = req.body.movie_youtube_url;
                movieObj.movie_youtube_id = req.body.movie_youtube_id;

                movieObj.shows = req.body.shows;

                movieObj.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            } else {
                console.log('Update');
                moviessimilar.shows = req.body.shows;
                moviessimilar.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            }
        });
    });  

router.route('/moviessimilar/music')
    .post(function(req,res) {
        MoviesSimilarModel.findOne({movie_id: req.body.movie_id},function(err,moviessimilar) {
            if(err) {
                console.log(err);
            } else if(moviessimilar === null){
                console.log('New movie');
                var movieObj = new MoviesSimilarModel();

                movieObj.movie_id = req.body.movie_id;
                movieObj.movie_name = req.body.movie_name;
                movieObj.movie_wikipedia_description = req.body.movie_wikipedia_description;
                movieObj.movie_wikipedia_url = req.body.movie_wikipedia_url;
                movieObj.movie_youtube_url = req.body.movie_youtube_url;
                movieObj.movie_youtube_id = req.body.movie_youtube_id;

                movieObj.music = req.body.music;

                movieObj.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            } else {
                console.log('Update');
                moviessimilar.music = req.body.music;
                moviessimilar.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            }
        });
    });

router.route('/moviessimilar/authors')
    .post(function(req,res) {
        MoviesSimilarModel.findOne({movie_id: req.body.movie_id},function(err,moviessimilar) {
            if(err) {
                console.log(err);
            } else if(moviessimilar === null){
                console.log('New movie');
                var movieObj = new MoviesSimilarModel();

                movieObj.movie_id = req.body.movie_id;
                movieObj.movie_name = req.body.movie_name;
                movieObj.movie_wikipedia_description = req.body.movie_wikipedia_description;
                movieObj.movie_wikipedia_url = req.body.movie_wikipedia_url;
                movieObj.movie_youtube_url = req.body.movie_youtube_url;
                movieObj.movie_youtube_id = req.body.movie_youtube_id;

                movieObj.authors = req.body.authors;

                movieObj.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            } else {
                console.log('Update');
                moviessimilar.authors = req.body.authors;
                moviessimilar.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            }
        });
    });

router.route('/moviessimilar/games')
    .post(function(req,res) {
        MoviesSimilarModel.findOne({movie_id: req.body.movie_id},function(err,moviessimilar) {
            if(err) {
                console.log(err);
            } else if(moviessimilar === null){
                console.log('New movie');
                var movieObj = new MoviesSimilarModel();

                movieObj.movie_id = req.body.movie_id;
                movieObj.movie_name = req.body.movie_name;
                movieObj.movie_wikipedia_description = req.body.movie_wikipedia_description;
                movieObj.movie_wikipedia_url = req.body.movie_wikipedia_url;
                movieObj.movie_youtube_url = req.body.movie_youtube_url;
                movieObj.movie_youtube_id = req.body.movie_youtube_id;

                movieObj.games = req.body.games;

                movieObj.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            } else {
                console.log('Update');
                moviessimilar.games = req.body.games;
                moviessimilar.save(function(err,movie) {
                    if(err) {
                        res.send(err);
                    }
                    res.json(movie);
                });
            }
        });
    });

router.route('/moviessimilar/delete')
    .post(function(req,res) {
        MoviesSimilarModel.remove({movie_id: req.body.movie_id},function(err,movie) {
            if(err) {
                res.send(err);
            }
            res.json({message: 'Successfully deleted'});
        });
    });

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error: '));
db.once('open',function() {
    console.log('Connected to database !');
});

router.get('/',function(req,res) {
    res.json({message: 'Welcome to the api'});
});

app.listen(3003);
console.log('Server running on port 3003');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MoviesSimilarSchema = new Schema({
    movie_id: Number,
    movie_name: String,
    movie_wikipedia_description: String,
    movie_wikipedia_url: String,
    movie_youtube_url: String,
    movie_youtube_id: String,
    books: [
        
    ],
    shows: [
        
    ],
    music: [
        
    ],
    authors: [
        
    ],
    games: [
        
    ]
});

module.exports = mongoose.model('MoviesSimilarModel',MoviesSimilarSchema);
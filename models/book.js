var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    create_date:{
        type:Date,
        default :Date.now
    },
    genre:{
        type:String
    },
    description:{
        type:String
    },
    author:{
        type:String
    }
});
var Book = module.exports = mongoose.model('Book',bookSchema);

module.exports.getBook = function(callback,limit){
    Book.find(callback).limit(limit);
}
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
 Genre = require('./models/genre');
 Book = require('./models/book');
 const port = process.env.PORT||3000;
mongoose.connect('mongodb://localhost/book',{ useNewUrlParser: true });
var db= mongoose.connection;
app.get('/',function(req,res){
    res.send('hello world');
});
app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err,genres){
    if(err){
        console.log(err)
    }else{
        res.json(genres)
    }
    })

})   
app.get('/api/books',function(req,res){
    Book.getBook(function(err,book){
    if(err){
        console.log(err)
    }else{
        res.json(book)
    }
    })

})   
app.listen(port);
console.log("running on "+port);
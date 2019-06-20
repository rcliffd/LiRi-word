var axios = require('axios');

var fs = require("fs");


var game = function() {

 var divider = "\n------------------------------------------------------------\n\n";

 this.poke = function(word) {
   // The following URL can be used to search the Pokemon for a given charater
   var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

   axios.get(URL)
   .then(function(response){


     var results =  [
       "word: " + response.data.word,
      
     ].join('\n\n')

     console.log(response.data.word);
   
     fs.appendFile("log.txt",results + divider, function(err) {

       // If an error was experienced we will log it.
       if (err) {
         console.log(err);
       }

       // If no error is experienced, we'll log the phrase "Content Added" to our node console.
       else {
         console.log("Charater");
       }

     });


   })



 };
};



module.exports = TV;
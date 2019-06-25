var axios = require("axios");

var Movies = function() {
  this.findMovie = function(term) {
    movieURL =
      "http://www.omdbapi.com/?t=" + term + "&y=&plot=short&apikey=trilogy";

    axios.get(movieURL).then(function(response) {
      var title = response.data.Title;
      var year = response.data.Year;
      var rating = response.data.imdbRating;
      var tomato = response.data.Ratings[1].Value;
      var country = response.data.Country;
      var plot = response.data.Plot;
      var language = response.data.Language;
      var actors = response.data.Actors;

      console.log("Title::" + title);
      console.log("Year:" + year);
      console.log("IMBD Rating:" + rating);
      console.log("Rotten Tomatoes Rating:" + tomato);
      console.log("Country:" + country);
      console.log("Plot:" + plot);
      console.log("Language:" + language);
      console.log("Actors:" + actors);
    });
  };
};

module.exports = Movies;
//Funtion for Movie Info: OMDB
function showMovieInfo(inputParameter) {
  if (inputParameter === undefined) {
    inputParameter = "Mr. Nobody";
    console.log("-----------------------");
    fs.appendFileSync("log.txt", "-----------------------\n");
    console.log(
      "If you have never experieced Akira please....,' check out:https://www.imdb.com/title/tt0094625/?ref_=nv_sr_1?ref_=nv_sr_1"
    );
    fs.appendFileSync(
      "log.txt",
      "If you haven't seen Akira,' please watch the trailer: https://www.imdb.com/title/tt0094625/videoplayer/vi1854122009?ref_=tt_ov_vi" +
        "\n"
    );
    console.log("check it out on Netflix");
    fs.appendFileSync("log.txt", "It's on Netflix!\n");
  }
  var queryUrl =
    "http://www.omdbapi.com/?t=" +
    inputParameter +
    "&y=&plot=short&apikey=b3c0b435";
  request(queryUrl, function(error, response, body) {
    // If the request is successful
    if (!error && response.statusCode === 200) {
      var movies = JSON.parse(body);
      console.log("**********MOVIE INFO*********");
      fs.appendFileSync("log.txt", "**********MOVIE INFO*********\n");
      console.log("Title: " + movies.Title);
      fs.appendFileSync("log.txt", "Title: " + movies.Title + "\n");
      console.log("Release Year: " + movies.Year);
      fs.appendFileSync("log.txt", "Release Year: " + movies.Year + "\n");
      console.log("IMDB Rating: " + movies.imdbRating);
      fs.appendFileSync("log.txt", "IMDB Rating: " + movies.imdbRating + "\n");
      console.log(
        "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies)
      );
      fs.appendFileSync(
        "log.txt",
        "Rotten Tomatoes Rating: " + getRottenTomatoesRatingValue(movies) + "\n"
      );
      console.log("Country of Production: " + movies.Country);
      fs.appendFileSync(
        "log.txt",
        "Country of Production: " + movies.Country + "\n"
      );
      console.log("Language: " + movies.Language);
      fs.appendFileSync("log.txt", "Language: " + movies.Language + "\n");
      console.log("Plot: " + movies.Plot);
      fs.appendFileSync("log.txt", "Plot: " + movies.Plot + "\n");
      console.log("Actors: " + movies.Actors);
      fs.appendFileSync("log.txt", "Actors: " + movies.Actors + "\n");
      console.log("*****************************");
      fs.appendFileSync("log.txt", "*****************************\n");
    } else {
      console.log("Error occurred.");
    }
  });
}

//Rotten Tomatoes Rating
function getRottenTomatoesRatingObject(data) {
  return data.Ratings.find(function(item) {
    return item.Source === "Rotten Tomatoes";
  });
}

function getRottenTomatoesRatingValue(data) {
  return getRottenTomatoesRatingObject(data).Value;
}

// random.txt file
function showSomeInfo() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var dataArr = data.split(",");
    UserInputs(dataArr[0], dataArr[1]);
  });
}

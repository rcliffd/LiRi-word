function showMovieInfo(inputParameter) {
  if (inputParameter === undefined) {
    inputParameter = "Akira";
    console.log("-----------------------");
    fs.appendFileSync("log.txt", "-----------------------\n");
    console.log(
      "I highly suggest the movie Akira,' check it out here: https://www.imdb.com/title/tt0094625/?ref_=nv_sr_1?ref_=nv_sr_1"
    );
    fs.appendFileSync(
      "log.txt",
      "I highly suggest the movie Akira,' check it out here: https://www.imdb.com/title/tt0094625/?ref_=nv_sr_1?ref_=nv_sr_1"
    );
    console.log("It was created by Disney!");
    fs.appendFileSync("log.txt", "It was created by Disney!\n");
  }
  var queryUrl =
    "http://www.omdbapi.com/?t=" +
    inputParameter +
    "&y=&plot=short&apikey=b3c0b435";
  request(queryUrl, function(error, response, body) {
    // if correct
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

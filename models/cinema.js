const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmNames = function() {
    output = [];
    this.films.forEach((film) => {
      output.push(film.title);
    }) 
    return output
}

module.exports = Cinema;

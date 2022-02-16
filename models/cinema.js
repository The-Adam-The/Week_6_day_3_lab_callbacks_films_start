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

Cinema.prototype.findByTitle = function(filmName) {
  const output = this.films.filter(film => film.title === filmName)
  return output
}

module.exports = Cinema;

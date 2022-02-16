const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmNames = function() {
    const output = [];
    this.films.forEach((film) => {
      output.push(film.title);
    }) 
    return output;
}

Cinema.prototype.findByTitle = function(filmName) {
  const output = this.films.filter(film => film.title === filmName);
  return output;
}

Cinema.prototype.findByGenre = function(genre) {
  const output = this.films.filter(film => film.genre === genre);
  return output;
}

Cinema.prototype.areThereAnyFilmsFromParticularYear = function(year) {
  const output = this.films.some(film => film.year === year)
  return output
}


module.exports = Cinema;

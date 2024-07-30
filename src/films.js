// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(pelicula => pelicula.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let result = array.filter(pelicula => pelicula.director == director);
 console.log("EXERCICE 2 ->", result);
 return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let result = array.filter(pelicula => pelicula.director == director);
  let calculate = result.reduce((acumulator, pelicula) => acumulator + pelicula.score,0);
  result = parseFloat((calculate / result.length).toFixed(2)); 
   
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {

  let title = array.map(pelicula => pelicula.title);
  let sort = title.sort();
  let result = sort.slice(0, 20); 

  console.log("EXERCICE 4 ->", result);
  return result; 
  
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {

  let newArray = [...array];  // Copy of array for the test
  let result = newArray.sort((first,second) => first.year == second.year ? first.title.localeCompare(second.title) : first.year - second.year); // order alphabetic for year and if year same then title
  console.log("EXERCICE 5 ->", result);
  return result;

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies,genre) {
  // let newMovies = [...movies];
  let filterMovie = movies.filter(pelicula => pelicula.genre.includes(genre));// Filter movie for specific genre
  let total = filterMovie.reduce((accumulator, pelicula) => accumulator + pelicula.score, 0); // Calculate total score
  let average = parseFloat((total / filterMovie.length).toFixed(2)); // Calculate average score
    
  // Print result
  console.log("EXERCISE 6 ->", average);
  
  return average;

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}

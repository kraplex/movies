function search(value) {
  const searchRequest = value.toUpperCase();
  const moviesTitles = [];
  const movies = JSON.parse(localStorage.getItem("movies"));
  movies.forEach((item) => moviesTitles.push(item.movieTitleRus.toUpperCase()));
  const movieIndexToRender = moviesTitles.findIndex(
    (el) => el.indexOf(searchRequest) > -1
  );
   return movieIndexToRender;
}

export default search;
function search(value) {
  const searchRequest = value.toUpperCase();
  const moviesTitles = [];
  const result = [];
  const movies = JSON.parse(localStorage.getItem("movies"));
  movies.forEach((item) => moviesTitles.push(item.movieTitleRus.toUpperCase()));

  for (let item of moviesTitles) {
    if (item.indexOf(searchRequest) > -1) {
      result.push(moviesTitles.findIndex((elem) => elem === item));
    }
  }

  return result;
}

export default search;

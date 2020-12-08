import movieCardHtml from "./movieCard.html";
import { renderTemplate } from "../template-utils/template-utils";
import history from "../history/history";

class MovieCard {
  constructor(movie) {
    this.movieCard = renderTemplate(movieCardHtml, {
      movieTitleRus: movie.movieTitleRus,
      movieDescription: movie.movieDescription,
      movieRate: movie.movieRate,
      movieImageUrl: movie.movieImageUrl,
      movieId: movie.id,
    });

    this.movieCard.addEventListener("click", (event) => {
      event.preventDefault();

      const buttonsEditMovie = Array.from(
        document.querySelectorAll("#editMovie")
      );
      const buttonsDeleteMovie = Array.from(
        document.querySelectorAll("#deleteMovie")
      );

      if (event.target.href === `http://localhost:8080/list-${movie.id}`) {
        history.push(`/list-${movie.id}`);
      }

      if (
        buttonsEditMovie.some((item) => {
          return event.target === item;
        })
      ) {
        console.log("edit");
      }

      if (
        buttonsDeleteMovie.some((item) => {
          return event.target === item;
        })
      ) {
        let result = confirm(`Удалить "${movie.movieTitleRus}"?`);
        if (result) {
          const movies = JSON.parse(localStorage.getItem("movies"));
          const movieForDelete = movies.findIndex((item) => {
            return item.id === movie.id;
          });
          movies.splice(movieForDelete, 1);
          localStorage.clear();
          localStorage.setItem("movies", JSON.stringify(movies));
          history.push("/list");
        }
      }
    });
  }

  render() {
    return this.movieCard;
  }
}

export default MovieCard;

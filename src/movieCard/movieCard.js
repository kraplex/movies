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

      if (event.target.href === `http://localhost:8080/list-${movie.id}`) {
        history.push(`/list-${movie.id}`);
      }

      if (event.target === document.querySelector("#edit")) {
        console.log("edit");
      }

      if (event.target === document.querySelector("#delete")) {
        console.log("delete");
      }
    });
  }

  render() {
    return this.movieCard;
  }
}

export default MovieCard;

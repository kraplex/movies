import template from "lodash.template";
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
        console.log(event)
      });
  }

  render() {
    return this.movieCard;
  }

  click(event) {
    

   /*  switch (event.target.value) {
      case "Подробнее...":
        history.push("/111");
        break;
    } */
  }
}

export default MovieCard;
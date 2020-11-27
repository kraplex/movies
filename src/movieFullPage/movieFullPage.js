import template from "lodash.template";
import movieFullPageHtml from "./movieFullPage.html";
import { renderTemplate } from "../template-utils/template-utils";
import history from "../history/history";

class MovieFullPage {
  constructor(movie) {
    const movieFullPage = renderTemplate(movieFullPageHtml, {
      movieTitleRus: this.movieTitleRus,
      movieTitleOrig: this.movieTitleOrig,
      movieDescription: this.movieDescription,
      movieActors: this.movieActors,
      movieYear: this.movieInfo.year,
      movieCountry: this.movieInfo.country,
      movieTagline: this.movieInfo.tagline,
      movieDirector: this.movieInfo.director,
      movieScenario: this.movieInfo.scenario,
      movieProducer: this.movieInfo.producer,
      movieCamera: this.movieInfo.camera,
      movieComposer: this.movieInfo.composer,
      movieRate: this.movieRate,
      movieDescription: this.movieDescription,
      movieImageUrl: this.movieImageUrl,
      movieId: this.id,
    });

    this.MovieFullPage.addEventListener("click", (event) => {
      event.preventDefault();
      if (event.target.href === `http://localhost:8080/list-${movie.id}`) {
        history.push(`/list-${movie.id}`);
      }
    });
  }

  render() {
    return this.MovieFullPage;
  }
}

export default MovieFullPage;

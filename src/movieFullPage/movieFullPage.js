import template from "lodash.template";
import movieFullPageHtml from "./movieFullPage.html";
import { renderTemplate } from "../template-utils/template-utils";

class MovieFullPage {
  constructor(movie) {
    this.movieFullPage = renderTemplate(movieFullPageHtml, {
      movieTitleRus: movie.movieTitleRus,
      movieTitleOrig: movie.movieTitleOrig,
      movieDescription: movie.movieDescription,
      movieActors: movie.movieActors,
      movieYear: movie.movieInfo.year,
      movieCountry: movie.movieInfo.country,
      movieTagline: movie.movieInfo.tagline,
      movieDirector: movie.movieInfo.director,
      movieScenario: movie.movieInfo.scenario,
      movieProducer: movie.movieInfo.producer,
      movieCamera: movie.movieInfo.camera,
      movieComposer: movie.movieInfo.composer,
      movieRate: movie.movieRate,
      movieDescription: movie.movieDescription,
      movieImageUrl: movie.movieImageUrl,
      movieId: movie.id,
    });
  }

  render() {
    return this.movieFullPage;
  }
}

export default MovieFullPage;

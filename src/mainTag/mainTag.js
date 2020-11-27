import template from "lodash.template";
import mainHtml from "./mainTag.html";
import { renderTemplate } from "../template-utils/template-utils";
import MovieItem from "../movieItem/movieItem";
import movieCardHtml from "../movieItem/movieCard.html";
import movieFullPageHtml from "../movieItem/movieFullPage.html";

class MainTag {
  constructor() {
    this.mainTag = renderTemplate(mainHtml);
  }

  render() {
    return this.mainTag;
  }

  renderFullPage(movie) {
    const movieFullPage = renderTemplate(movieFullPageHtml, {
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

    return movieFullPage;
  }
}

export default MainTag;

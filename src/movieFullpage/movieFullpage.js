import template from "lodash.template";
import html from "./movieFullPage.html";

const templateRenderer = template(html);

class MovieFullPage {
  constructor(props) {
    (this.id = props.id || ""),     
    (this.movieTitleOrig = props.movieTitleOrig),
    (this.movieTitleRus = props.movieTitleRus),
    (this.movieInfo = props.movieInfo),
    (this.movieActors = props.movieActors),
    (this.movieDescription = props.movieDescription),
    (this.like = props.like);
    (this.movieRate = props.movieRate);
    (this.movieImageUrl = props.movieImageUrl)
  }
  render() {
    const t = templateRenderer({
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
      movieImageUrl: this.movieImageUrl
    });

    const movieFullPage = document.createElement("div");
    movieFullPage.className = "movie_full_page";
    movieFullPage.innerHTML = t;
    
    return movieFullPage;
  }
}

export default MovieFullPage;
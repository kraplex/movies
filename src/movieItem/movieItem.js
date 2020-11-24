import template from "lodash.template";
import movieFullPage from "./movieFullPage.html";
import movieCard from "./movieCard.html";
import { v4 as guid } from "uuid";


const templateMovieFullPage = template(movieFullPage);
const templateMovieCard = template(movieCard);

class MovieItem {
  constructor(props) {
    const movieId = guid();
    (this.id = movieId),
    (this.movieTitleOrig = props.movieTitleOrig),
    (this.movieTitleRus = props.movieTitleRus),
    (this.movieInfo = props.movieInfo),
    (this.movieActors = props.movieActors),
    (this.movieDescription = props.movieDescription),
    (this.like = props.like);
    (this.movieRate = props.movieRate);
    (this.movieImageUrl = props.movieImageUrl)
  }

  renderFullPage() {
    const movieFullPage = templateMovieFullPage({
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
      movieId: this.id
    });
    
    return movieFullPage;
  }

  renderCard() {
    const movieCard = templateMovieCard({
      movieTitleRus: this.movieTitleRus,
      movieDescription: this.movieDescription,
      movieRate: this.movieRate,
      movieImageUrl: this.movieImageUrl,
      movieId: this.id
    });

    return movieCard;
  }

  
}

export default MovieItem;
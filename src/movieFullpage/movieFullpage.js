import template from "lodash.template";
import html from "./movieFullpage.html";

const templateRenderer = template(html);

class MovieFullpage {
  constructor(props) {
    this.id = props.id,     
    (this.movieTitleOrig = props.movieTitleOrig),
    (this.movieTitleRus = props.movieTitleRus),
    (this.movieInfo = props.movieInfo),
    (this.movieActors = props.movieActors),
    (this.movieDescription = props.movieDescription),
    (this.like = props.like);
    (this.movieRate = props.movieRate);
  }
  render() {
    const movies = JSON.parse(localStorage.movies);


    const t = templateRenderer({
      movieTitleRus: movies[props.id].movieTitleRus,
      movieTitleOrig: this.movieTitleOrig,
      movieDescription: this.movieDescription,
      movieActors: this.movieActors,
      movieInfo: this.movieInfo,
      movieRate: this.movieRate,
    });

    const main = document.querySelector("main");
    const movieDetails = document.createElement("div");
    movieDetails.className = "movieDetails";
    movieDetails.innerHTML = t;
    main.appendChild(movieDetails);
  }
}

export default MovieFullpage;

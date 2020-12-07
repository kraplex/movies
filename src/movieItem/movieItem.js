import { v4 as guid } from "uuid";

class MovieItem {
  constructor(props) {
    const movieId = guid();

    this.id = movieId;
    this.movieTitleOrig = props.movieTitleOrig;
    this.movieTitleRus = props.movieTitleRus;
    this.movieInfo = props.movieInfo;
    this.movieTeam = props.movieTeam;
    this.movieActors = props.movieActors;
    this.movieDescription = props.movieDescription;
    this.like = props.like;
    this.movieRate = props.movieRate;
    this.movieImageUrl = props.movieImageUrl;
  }
}

export default MovieItem;

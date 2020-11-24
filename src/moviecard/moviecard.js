import template from "lodash.template";
import html from "./movieCard.html";

const templateRenderer = template(html);

class MovieCard {
  constructor(props) {
    (this.movieTitleRus = props.movieTitleRus),
      (this.movieDescription = props.movieDescription),
      (this.movieRate = props.movieRate);
    this.movieImageUrl = props.movieImageUrl;
  }

  render() {
    const t = templateRenderer({
      movieTitleRus: this.movieTitleRus,
      movieDescription: this.movieDescription,
      movieRate: this.movieRate,
      movieImageUrl: this.movieImageUrl,
    });

    return t;
  }
}
export default MovieCard;

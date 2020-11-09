import template from "lodash.template";
import html from "./moviecard.html";

const templateRenderer = template(html);

class MovieCard {
    constructor(props) {   
        
        (this.movieTitleRus = props.movieTitleRus),   
        (this.movieDescription = props.movieDescription),
        (this.movieRate = props.movieRate)
      }

    render() {
     

        const t = templateRenderer({
            movieTitleRus: this.movieTitleRus,
            movieDescription: this.movieDescription,
            movieRate: this.movieRate,
        });

        const main = document.querySelector("main");
        const movieDetails = document.createElement("div");
        movieDetails.className = "movieDetails";
        movieDetails.innerHTML = t;
        main.appendChild(movieDetails);
    }
}
export default MovieCard;
import template from "lodash.template";
import mainHtml from "./main.html";
import {renderTemplate} from "../template-utils/template-utils";
import MovieItem from "../movieItem/movieItem";
import movieCardhHtml from "../movieItem/movieCard.html"
class Main {
  constructor() {
      this.main = renderTemplate(mainHtml)
  }

  render(){
      return this.main;
  }

  renderCard(movie) {
    
    const movieCard = renderTemplate(movieCardhHtml, {
      movieTitleRus: movie.movieTitleRus,
      movieDescription: movie.movieDescription,
      movieRate: movie.movieRate,
      movieImageUrl: movie.movieImageUrl,
      movieId: movie.id,
    });

    return movieCard;
  }




}



  

export default Main;
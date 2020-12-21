import movieCardHtml from "./movieCard.html";
import { renderTemplate } from "../template-utils/template-utils";
import history from "../history/history";

class MovieCard {
  constructor(movie) {
    this.id = movie.id || "";
    this.movieTitleOrig = movie.movieTitleOrig;
    this.movieTitleRus = movie.movieTitleRus;
    this.movieInfo = movie.movieInfo;
    this.movieTeam = movie.movieTeam;
    this.movieActors = movie.movieActors;
    this.movieDescription = movie.movieDescription;
    this.like = movie.like;
    this.movieRate = movie.movieRate;
    this.movieImageUrl = movie.movieImageUrl;
    this.movieCard = renderTemplate(movieCardHtml, movie);

    this.movieCard.addEventListener("click", (event) => {
      event.preventDefault();

      const buttonEditMovie = [
        ...Array.from(document.querySelectorAll("#editMovie")),
        ...Array.from(document.querySelectorAll("#editMovie svg")),
      ];

      const buttonDeleteMovie = [
        ...Array.from(document.querySelectorAll("#deleteMovie")),
        ...Array.from(document.querySelectorAll("#deleteMovie svg")),
      ];

      if (event.target.href === `http://localhost:8080/list-${this.id}`) {
        history.push(`/list-${this.id}`);
      }

      if (
        buttonEditMovie.some((item) => {
          return event.target === item;
        })
      ) {
        $("#movieModal").modal();
        document.querySelector("#movieTitleRus").value = this.movieTitleRus;
        document.querySelector("#movieTitleOrig").value = this.movieTitleOrig;
        document.querySelector("#movieImageUrl").value = this.movieImageUrl;
        document.querySelector("#movieInfoYear").value = this.movieInfo.year;
        document.querySelector("#movieInfoCountry").value = this.movieInfo.country;
        document.querySelector("#movieInfoTagline").value = this.movieInfo.tagline;
        document.querySelector("#movieInfoDirector").value = this.movieInfo.director;
        document.querySelector("#movieActors").value = this.movieActors;
        document.querySelector("#movieRate").value = this.movieRate;
        document.querySelector("#movieDescription").value = this.movieDescription;
        document.querySelector("#modalTitle").innerText = "Редактировать";   
        document.querySelector("#movieId").value = this.id;   
       }

      if (
        buttonDeleteMovie.some((item) => {
          return event.target === item;
        })
      ) {
        let result = confirm(`Удалить "${movie.movieTitleRus}"?`);
        if (result) {
          const movies = JSON.parse(localStorage.getItem("movies"));
          const movieToDelete = movies.findIndex((item) => {
            return item.id === movie.id;
          });
          movies.splice(movieToDelete, 1);
          localStorage.clear();
          localStorage.setItem("movies", JSON.stringify(movies));
          history.push("/list");
        }
      }
    });
  }

  render() { 
    return this.movieCard;    
  }
}

export default MovieCard;

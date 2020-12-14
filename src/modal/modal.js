import modalHtml from "./modal.html";
import { renderTemplate } from "../template-utils/template-utils";
import MovieItem from "../movieItem/movieItem";
import history from "../history/history";

class Modal {
  constructor(movie) {
    if (movie === null || movie === undefined) {
      this.modal = renderTemplate(modalHtml);
    } else {
      this.modal = renderTemplate(modalHtml);
      this.id = movie.id;
      this.movieTitleOrig = movie.movieTitleOrig;
      this.movieTitleRus = movie.movieTitleRus;
      this.movieInfo = movie.movieInfo;
      this.movieTeam = movie.movieTeam;
      this.movieActors = movie.movieActors;
      this.movieDescription = movie.movieDescription;
      this.like = movie.like;
      this.movieRate = movie.movieRate;
      this.movieImageUrl = movie.movieImageUrl;
    }
    this.modal.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        (event.target === document.querySelector("#save")) &
        (document.querySelector("#movieID").value !== "")
      ) {
        this.editMovie(document.querySelector("#movieID").value);
      } else this.addMovie();
    });
  }

  renderInHtml() {
    return this.modal;
  }

  editMovie(id) {
    const editedMovie = new MovieItem({
      movieTitleOrig: document.querySelector("#movieTitleOrig").value,
      movieTitleRus: document.querySelector("#movieTitleRus").value,
      movieInfo: {
        year: document.querySelector("#movieInfoYear").value,
        country: document.querySelector("#movieInfoCountry").value,
        tagline: document.querySelector("#movieInfoTagline").value || "-",
        director: document.querySelector("#movieInfoDirector").value,
      },
      movieActors: document.querySelector("#movieActors").value.split(","),
      movieDescription: document.querySelector("#movieDescription").value,
      movieRate: document.querySelector("#movieRate").value,
      movieImageUrl: document.querySelector("#movieImageUrl").value,
    });

    const movies = JSON.parse(localStorage.getItem("movies"));
    const indexOfMovieToEdit = movies.findIndex((element) => {
      return element.id === id;
    });
    movies.splice(indexOfMovieToEdit);
    movies.push(editedMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
    history.push("/list");
  }

  addMovie() {
    const movie = new MovieItem({
      movieTitleOrig: document.querySelector("#movieTitleOrig").value,
      movieTitleRus: document.querySelector("#movieTitleRus").value,
      movieInfo: {
        year: document.querySelector("#movieInfoYear").value,
        country: document.querySelector("#movieInfoCountry").value,
        tagline: document.querySelector("#movieInfoTagline").value || "-",
        director: document.querySelector("#movieInfoDirector").value,
      },
      movieActors: document.querySelector("#movieActors").value.split(","),
      movieDescription: document.querySelector("#movieDescription").value,
      movieRate: document.querySelector("#movieRate").value,
      movieImageUrl: document.querySelector("#movieImageUrl").value,
    });
    const movies = JSON.parse(localStorage.getItem("movies"));
    movies.push(movie);
    localStorage.setItem("movies", JSON.stringify(movies));
    history.push("/list");
  }
}

export default Modal;

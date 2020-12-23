import modalHtml from "./modal.html";
import { renderTemplate } from "../template-utils/template-utils";
import MovieItem from "../movieItem/movieItem";
import history from "../history/history";

class Modal {
  constructor() {
    this.modal = renderTemplate(modalHtml);
    
    this.modal.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        document.querySelector("#modalTitle").innerText ===
          "Добавить новый фильм" &&
        event.target === document.querySelector("#save")
      ) {
        this.addMovie();
      }

      if (
        document.querySelector("#modalTitle").innerText === "Редактировать" &&
        event.target === document.querySelector("#save")
      ) {
        this.editMovie(document.querySelector("#movieId").value);
      }
    });
  }

  render() {
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
    movies.splice(indexOfMovieToEdit, 1);
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

import modalHtml from "./modal.html";
import { renderTemplate } from "../template-utils/template-utils";
import MovieItem from "../movieItem/movieItem";
import history from "../history/history";

class Modal {
  constructor() {
    this.modal = renderTemplate(modalHtml);
    this.modal.addEventListener("click", (event) => {
      this.saveNewMovie(event);
    });
  }

  render() {
    return this.modal;
  }

  saveNewMovie(event) {
    if (event.target === document.querySelector("#save")) {
      const movie = new MovieItem({
        movieTitleOrig: document.querySelector("#movieTitleOrig").value,
        movieTitleRus: document.querySelector("#movieTitleRus").value,
        movieInfo: {
          year: document.querySelector("#movieInfoYear").value,
          country: document.querySelector("#movieInfoCountry").value,
          tagline: document.querySelector("#movieInfoTagline").value,
          director: document.querySelector("#movieInfoDirector").value
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
}

export default Modal;

import modalHtml from "./modal.html";
import { renderTemplate } from "../template-utils/template-utils";
import MovieItem from "../movieItem/movieItem";

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
          year: document.querySelector("#movieinfo_year").value,
          country: document.querySelector("#movieinfo_country").value,
          tagline: document.querySelector("#movieinfo_tagline").value,
          director: document.querySelector("#movieinfo_director").value,
          scenario: "",
          producer: "",
          camera: "",
          composer: "",
        },
        movieActors: document.querySelector("#movieActors").value.split(","),
        movieDescription: document.querySelector("#movieDescription").value,
        like: "",
        movieRate: document.querySelector("#movieRate").value,
        movieImageUrl: "",
      });
      const movies = JSON.parse(localStorage.getItem("movies"));
      movies.push(movie);
      localStorage.setItem("movies", JSON.stringify(movies));
    }
  }
}

export default Modal;

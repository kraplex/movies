import modalHtml from "./modal.html";
import { renderTemplate } from "../template-utils/template-utils";
import MovieItem from "../movieItem/movieItem";

class Modal {
  constructor() {
    this.modal = renderTemplate(modalHtml);
    this.modal.addEventListener("click", (event) => {
      this.click(event);
    });
  }

  render() {
    return this.modal;
  }

  click(event) {
    if (event.target === document.querySelector("#save")) {
      const movieTitleRus = document.querySelector("#movieTitleRus").value;
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
        movieActors: [],
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

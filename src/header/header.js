import headerHtml from "./header.html";
import { renderTemplate } from "../template-utils/template-utils";
import history from "../history/history";

class Header {
  constructor() {
    this.header = renderTemplate(headerHtml);
    this.header.addEventListener("click", (event) => {
      event.preventDefault();
      this.click(event);
    });
  }

  render() {
    return this.header;
  }

  click(event) {
    const searchField = document.querySelector("#search input");
    if (event.target === document.querySelector("#showAllMovies")) {
      history.push("/list");
      searchField.value = "";
    }
    if (
      event.target === document.querySelector("#searchButton") ||
      event.target === document.querySelector("#searchButton svg")
    ) {
      history.push("/search");
    }
    if (event.target === document.querySelector("#addNewMovie")) {
      $("#movieModal").modal();
      document.querySelector("#movieTitleRus").value = "";
      document.querySelector("#movieTitleOrig").value = "";
      document.querySelector("#movieImageUrl").value = "";
      document.querySelector("#movieInfoYear").value = "";
      document.querySelector("#movieInfoCountry").value = "";
      document.querySelector("#movieInfoTagline").value = "";
      document.querySelector("#movieInfoDirector").value = "";
      document.querySelector("#movieActors").value = "";
      document.querySelector("#movieRate").value = "";
      document.querySelector("#movieDescription").value = "";
      document.querySelector("#modalTitle").innerText = "Добавить новый фильм";
    }
  }
}

export default Header;

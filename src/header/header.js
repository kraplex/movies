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

      $('#movieModal').modal();

    }
  }
}

export default Header;

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
    if (event.target.tagName === "A") {
      history.push("/list");
    }
    if (event.target === document.querySelector("form button")) {
      history.push("/search");
    }
  }
}

export default Header;

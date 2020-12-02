import template from "lodash.template";
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
    if (event.target === document.querySelector("li button")) {
      console.log("Add new");
    }
  }
}

export default Header;

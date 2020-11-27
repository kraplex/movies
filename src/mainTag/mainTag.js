import mainHtml from "./mainTag.html";
import { renderTemplate } from "../template-utils/template-utils";

class MainTag {
  constructor() {
    this.mainTag = renderTemplate(mainHtml);
  }

  render() {
    return this.mainTag;
  }

}

export default MainTag;

import template from "lodash.template";
import headerHtml from "./header.html";
import {renderTemplate} from "../template-utils/template-utils";
import history from "../history/history";

class Header {
    constructor() {
        this.header = renderTemplate(headerHtml);
        this.header.addEventListener("click", (event)=>{
            event.preventDefault();
            if(event.target.tagName !=="A") return;
            
            this.click(event);
           
        })
    }

    render() {
        return this.header
    }

    click(event){
         switch (event.target.tagName) {
             case "A":
                history.push("/list");
            break
         }
    }
 }

export default Header;

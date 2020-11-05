import template from "lodash.template";
import html from "./list.html";
import "./list.css"

const templateRenderer = template(html);

class List {
    constructor() {
        this.title = "List!"
        this.users = [
            "Ivanov",
            "Petrov",
            "Sidorov"
        ]
    }

    render() {

        const t = templateRenderer({
            title: this.title,
            users: this.users
        });

        const container = document.createElement("div");
        container.innerHTML = t;
        document.body.appendChild(container)

    }
}

export default List;
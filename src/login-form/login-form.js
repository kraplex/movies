import html from "./login-form.html";
import "./login-form.css"

class LoginForm {
    constructor(){

    }

    render() {
        const container = document.createElement("div");
        container.innerHTML = html;
        document.body.appendChild(container)
    }
}
export default LoginForm;
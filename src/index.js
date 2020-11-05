import './style.css';
import LoginForm from "./login-form/login-form";
import List from "./list/list";

const title = document.createElement('p');

title.innerText = "Привет мир!!!";

document.body.appendChild(title);

const form = new LoginForm();
form.render();

const list = new List();
list.render();
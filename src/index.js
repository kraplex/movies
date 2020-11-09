import './style.css';
import LoginForm from "./login-form/login-form";
import List from "./list/list";


window.addEventListener('popstate', function(e){
    console.log(e.state.path, e.state.note);
  })

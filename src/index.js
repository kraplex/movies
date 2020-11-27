import "./style.css";
import MovieItem from "./movieItem/movieItem";
import Header from "./header/header";
import history from "./history/history";
import MainTag from "./mainTag/mainTag";
import MovieCard from "./movieCard/movieCard"

const header = new Header();
const main = new MainTag();
document.querySelector(".container").appendChild(header.render());
document.querySelector(".container").appendChild(main.render());

const mainTag = document.querySelector("main");


history.listen((listen) => {
  switch (listen.location.pathname) {
    case "/list":
      mainTag.innerHTML = "";
      const movies = JSON.parse(localStorage.getItem("movies"));
      for (let key in movies) {
        const movie = new MovieCard(movies[key]);
        mainTag.appendChild(movie.render());
      }
      break;
  }
});

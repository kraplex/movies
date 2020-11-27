import "./style.css";
import MovieItem from "./movieItem/movieItem";
import Header from "./header/header";
import history from "./history/history";
import MainTag from "./mainTag/mainTag";
import MovieCard from "./movieCard/movieCard";
import MovieFullPage from "./movieFullPage/movieFullPage";

const header = new Header();
const main = new MainTag();
document.querySelector(".container").appendChild(header.render());
document.querySelector(".container").appendChild(main.render());

const mainTag = document.querySelector("main");
console.log(JSON.parse(localStorage.getItem("movies")));

history.listen((listen) => {
  const movies = JSON.parse(localStorage.getItem("movies"));
  switch (listen.location.pathname) {
    case "/list":
      mainTag.innerHTML = "";

      for (let key in movies) {
        const movieCard = new MovieCard(movies[key]);
        mainTag.appendChild(movieCard.render());
      }
      break;
    case `/list-${movieId}`:
      mainTag.innerHTML = "";
      for (let key in movies) {
        if (movies[key].id === movieId) {
          const movieFullPage = new MovieFullPage(movies[key]);
          mainTag.appendChild(movieFullPage.render());
        }
      }
  }
});

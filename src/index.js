import "./style.css";
import Header from "./header/header";
import history from "./history/history";
import MainTag from "./mainTag/mainTag";
import MovieCard from "./movieCard/movieCard";
import MovieFullPage from "./movieFullPage/movieFullPage";
import moviesJson from "./moviesStorage/moviesStorage";

const header = new Header();
const main = new MainTag();

document.querySelector(".container").appendChild(header.render());
const mainTag = document.querySelector(".container").appendChild(main.render());
const input = document.querySelector("input");
localStorage.setItem("movies", moviesJson);

history.listen((listen) => {
  const movies = JSON.parse(localStorage.getItem("movies"));
  if (listen.location.pathname === "/list") {
    mainTag.innerHTML = "";
    movies.forEach((movie) => {
      const movieCard = new MovieCard(movie);
      mainTag.appendChild(movieCard.render());
    });
  }

  if (listen.location.pathname.length === 42) {
    mainTag.innerHTML = "";
    const movieId = Array.from(listen.location.pathname).slice(6).join("");
    const movie = movies.find((movie) => movie.id === movieId);
    const cinema = new MovieFullPage(movie);
    mainTag.appendChild(cinema.render());
  }

  if (listen.location.pathname === "/search") {
    mainTag.innerHTML = "";
    const searchRequest = input.value;
    const movies = JSON.parse(localStorage.getItem("movies"));
    
    
  }
});

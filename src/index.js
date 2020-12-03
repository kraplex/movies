import "./style.css";
import Header from "./header/header";
import history from "./history/history";
import MainTag from "./mainTag/mainTag";
import MovieCard from "./movieCard/movieCard";
import MovieFullPage from "./movieFullPage/movieFullPage";
import moviesJson from "./moviesStorage/moviesStorage";
import search from "./searchFunction/searchFunction";
import Modal from "./modal/modal";

const header = new Header();
const main = new MainTag();

document.querySelector(".container").appendChild(header.render());
const mainTag = document.querySelector(".container").appendChild(main.render());
const inputSearch = document.querySelector("input");
localStorage.setItem("movies", moviesJson);


/////
const modal = new Modal();
mainTag.innerHTML = "";
mainTag.appendChild(modal.render());
/////


history.listen((listen) => {
  if (listen.location.pathname === "/list") {
    mainTag.innerHTML = "";
    const movies = JSON.parse(localStorage.getItem("movies"));
    movies.forEach((movie) => {
      const movieCard = new MovieCard(movie);
      mainTag.appendChild(movieCard.render());
    });
  }

  if (listen.location.pathname.length === 42) {
    mainTag.innerHTML = "";
    const movies = JSON.parse(localStorage.getItem("movies"));
    const movieId = Array.from(listen.location.pathname).slice(6).join("");
    const movie = movies.find((movie) => movie.id === movieId);
    const cinema = new MovieFullPage(movie);
    mainTag.appendChild(cinema.render());
  }

  if (listen.location.pathname === "/search") {
    if (inputSearch.value.length < 3) {
      alert("Пожалуйста, введите более 2 символов");
    } else {
      mainTag.innerHTML = "";
      const movies = JSON.parse(localStorage.getItem("movies"));
      const movieIndexToRender = search(inputSearch.value);
      if (movieIndexToRender === -1) {
        alert("Ничего не найдено. Уточните поисковый запрос");
      } else {
        const movieToRender = new MovieCard(movies[movieIndexToRender]);
        mainTag.appendChild(movieToRender.render());
      }
    }
  }
});

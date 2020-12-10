import "./style.css";
import Header from "./header/header";
import history from "./history/history";
import MainTag from "./mainTag/mainTag";
import MovieCard from "./movieCard/movieCard";
import MovieFullPage from "./movieFullPage/movieFullPage";
import search from "./searchFunction/searchFunction";
import Modal from "./modal/modal";


const header = new Header();
const main = new MainTag();
const modal = new Modal();

document.querySelector(".container").appendChild(header.render());
const mainTag = document.querySelector(".container").appendChild(main.render());
mainTag.appendChild(modal.render());
const inputSearch = document.querySelector("input");



if (!localStorage.getItem("movies")) {
  const movies = [];
  localStorage.setItem("movies", JSON.stringify(movies));
}

history.listen((listen) => {
  if (listen.location.pathname === "/list") {
    mainTag.innerHTML = "";

    const movies = JSON.parse(localStorage.getItem("movies"));

    if (movies.length === 0) {
      mainTag.innerHTML = `
        <h1 class="mt-5 text-center text-uppercase">
          Здесь пока ничего нет(
        </h1>`;
      mainTag.appendChild(modal.render());
    } else {
      movies.forEach((movie) => {
        const movieCard = new MovieCard(movie);
        mainTag.appendChild(movieCard.render());
      });
      mainTag.appendChild(modal.render());
    }
  }

  if (listen.location.pathname.length === 42) {
    mainTag.innerHTML = "";
    mainTag.appendChild(modal.render());
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
      mainTag.appendChild(modal.render());
      const movies = JSON.parse(localStorage.getItem("movies"));
      const moviesToRender = search(inputSearch.value);
      if (moviesToRender.length === 0) {
        alert("Ничего не найдено. Уточните поисковый запрос");
      } else {
        moviesToRender.forEach((item) => {
          let movieToRender = new MovieCard(movies[item]);
          mainTag.appendChild(movieToRender.render());
        });
      }
    }
  }
});

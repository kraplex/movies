import "./style.css";
import Header from "./header/header";
import history from "./history/history";
import MainTag from "./mainTag/mainTag";
import MovieCard from "./movieCard/movieCard";
import MovieFullPage from "./movieFullPage/movieFullPage";
import search from "./searchFunction/searchFunction";
import Modal from "./modal/modal";

if (!localStorage.getItem("movies")) {
  localStorage.setItem("movies", JSON.stringify([]));
}

const header = new Header();
const main = new MainTag();
const modal = new Modal();

document.querySelector(".container").appendChild(header.render());
const mainTag = document.querySelector(".container").appendChild(main.render());
mainTag.appendChild(modal.render());
const inputSearch = document.querySelector("input");

function routing(path) {
  if (path === "/") {
    document.querySelector(".container").appendChild(main.render());
  } else if (path === "/list") {
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
  } else if (path.length === 42) {
    mainTag.innerHTML = "";
    mainTag.appendChild(modal.render());
    const movies = JSON.parse(localStorage.getItem("movies"));
    console.log(movies)
    const movieId = Array.from(path).slice(6).join("");
    const movieTorender = movies.find((movie) => movie.id === movieId);
    const movieFullPage = new MovieFullPage(movieTorender);
    mainTag.appendChild(movieFullPage.render());
  } else if (path === "/search") {
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
  } else mainTag.innerHTML = "404 Страница не найдена";
}

history.listen((listen) => {
  routing(listen.location.pathname);
});

routing(history.location.pathname);

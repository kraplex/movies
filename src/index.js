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
mainTag.appendChild(modal.renderInHtml());

const inputSearch = document.querySelector("input");

if (!localStorage.getItem("movies")) {
  const movies = [
    {
      id: "56467620-4793-4e46-848b-74f8358eb3ca",
      movieActors: [
        "Джастин Ройланд",
        " Спенсер Грэммер",
        " Сара Чок",
        " Крис Парнелл",
        " Эрик Бауза",
        " Дэн Хэрмон",
      ],
      movieDescription:
        "Рик и Морти - американский, научно-фантастический комедийно-приключенческий мультсериал. В центре внимания - неунывающая парочка, состоящая из внука-школьника и дедушки-ученого. Вместе они совершат много увлекательных путешествий и докажут существование невероятных явлений.",
      movieImageUrl:
        "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82/rick-and-morty-watch-i50046.jpg",
      movieInfo: {
        year: "2013",
        country: "США",
        tagline: "-",
        director: "Джефф Майерс",
      },
      movieRate: "9,2",
      movieTitleOrig: "Rick and Morty",
      movieTitleRus: "Рик и Морти",
    },
  ];
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
      mainTag.appendChild(modal.renderInHtml());
    } else {
      movies.forEach((movie) => {
        const movieCard = new MovieCard(movie);
        mainTag.appendChild(movieCard.render());
      });
      mainTag.appendChild(modal.renderInHtml());
    }
  }

  if (listen.location.pathname.length === 42) {
    mainTag.innerHTML = "";
    mainTag.appendChild(modal.renderInHtml());
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
      mainTag.appendChild(modal.renderInHtml());
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

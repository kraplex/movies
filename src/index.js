import "./style.css";
import MovieItem from "./movieItem/movieItem";
import Header from "./header/header";
import history from "./history/history";
import Main from "./main/main";
import moviesTestObj from "./moviesStorage/moviesStorage";


const header = new Header();
const main = new Main();
document.querySelector(".container").appendChild(header.render());
document.querySelector(".container").appendChild(main.render());


const moviesJson = JSON.stringify(moviesTestObj);
localStorage.setItem("movies", moviesJson);

const movieB = new MovieItem({
  movieTitleOrig: "Rick and Morty",
  movieTitleRus: "Рик и Морти",
  movieInfo: {
    year: "2013-2019",
    country: "США",
    tagline: "-",
    director: "Джефф Майерс",
    scenario: "Ройланд Джастин, Хармон Дэн",
    producer: "Дж. Майкл Мендель",
    camera: "-",
    composer: "Райан Элдер",
  },
  movieActors: [
    "Джастин Ройланд",
    "Спенсер Грэммер",
    "Сара Чок",
    "Крис Парнелл",
    "Эрик Бауза",
    "Дэн Хэрмон",
    "Фил Хендри",
    "Брэндон Джонсон",
    "Райан Ридли",
    "Кари Уолгрен",
  ],
  movieDescription:
    "Рик и Морти - американский, научно-фантастический комедийно-приключенческий мультсериал. В центре внимания - неунывающая парочка, состоящая из внука-школьника и дедушки-ученого. Вместе они совершат много увлекательных путешествий и докажут существование невероятных явлений.",
  like: 0,
  movieRate: "IMDb: 9.2 (360778)",
  movieImageUrl:
    "http://www.komilfobook.ru/media/zoo/images/cover1_05ccd38953ec28234ead09c57784b878.jpg",
  });
const mainTag = document.querySelector("main");

history.listen((listen)=>{
  switch (listen.location.pathname) {
    case "/list":
      mainTag.innerHTML="";
      const movies = JSON.parse(localStorage.getItem("movies"));      
      for (let key in movies) {
       const movie = new MovieItem(movies[key]);
        mainTag.appendChild(main.renderCard(movie))
      }
      
      break;}
  }
  
);




function renderAllMovies() {
  const movies = JSON.parse(localStorage.getItem("movies"));
  for (let key in movies) {
    
    main.insertAdjacentHTML("beforeend", movie.renderCard());
  }
}

/* const test = document.querySelector(".more");

test.addEventListener("click", (event) => {
  renderFullPage(event.target.offsetParent.offsetParent.id);
});

function renderFullPage(id) {
  const movies = JSON.parse(localStorage.getItem("movies"));
  for (let key in movies) {
    const obj = movies[key];
    if (obj.id === id) {
      const movie = new MovieItem(movies[key]);
      main.insertAdjacentHTML("beforeend", movie.renderFullPage());
    }
  }
}  */

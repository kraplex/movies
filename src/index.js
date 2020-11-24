import "./style.css";
import MovieFullPage from "./movieFullPage/movieFullPage";
import MovieCard from "./movieCard/movieCard";

const movieAFull = new MovieFullPage({
  movieTitleOrig: "Brightburn",
  movieTitleRus: "Гори, гори ясно",
  movieInfo: {
    year: "2019",
    country: "США",
    tagline: "Imagine What He Could Become",
    director: "Дэвид Яровески",
    scenario: "Брайан Ганн, Марк Ганн",
    producer: "Джеймс Ганн, Брайан Ганн, Марк Ганн",
    camera: "Майкл Даллаторре",
    composer: "Тим Уильямс",
  },
  movieActors: [
    "Элизабет Бэнкс",
    "Дэвид Денман",
    "Джексон А. Данн",
    "Абрахам Клинкскейлз",
    "Кристиан Финлейсон",
    "Дженнифер Холлэнд",
    "Эмми Хантер",
    "Мэтт Джонс",
    "Мередит Хагнер",
    "Бекки Уолстром",
  ],
  movieDescription:
    "Что, если потерпевший крушение на Земле инопланетный ребенок со сверхспособностями вместо того, чтобы стать героем для человечества, окажется чем-то гораздо более зловещим?",
  like: 0,
  movieRate: "IMDb: 6.60 (6688)",
  movieImageUrl:
    "https://st.kp.yandex.net/images/film_iphone/iphone360_1199596.jpg",
});

const movieBFull = new MovieFullPage({
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
    "https://pyxis.nymag.com/v1/imgs/cd8/804/e0f612fa12d17e68e3d68ccf55f93cac4f-06-rick-morty.rhorizontal.w700.jpg",
});

const movieCFull = new MovieFullPage({
  movieTitleOrig: "August Rash",
  movieTitleRus: "Август Раш",
  movieInfo: {
    year: "2007",
    country: "США",
    tagline: "-",
    director: "Кёрстен Шеридан",
    scenario: "Ник Касл, Джеймс В. Харт",
    producer: "Ричард Бартон Льюис",
    camera: "Джон Мэтисон",
    composer: "Марк Манчина",
  },
  movieActors: [
    "Фредди Хаймор",
    "Кери Расселл",
    "Джонатан Рис-Майерс",
    "Робин Уильямс",
    "Терренс Ховард",
  ],
  movieDescription:
    "Молодой харизматичный ирландский гитарист и американская виолончелистка из престижной семьи полюбили друг друга. После волшебной встречи в Нью-Йорке, обстоятельства оказываются сильнее их и они вынуждены расстаться. Родившийся ребёнок, Август Раш, по столь же несчастливому стечению обстоятельств оказывается в одном из нью-Йоркских приютов. Двенадцать лет спустя Август Раш, необыкновенно талантливый для своего возраста музыкант, отчаянно стремится найти своих родителей. Единственной возможностью для этого он считает свою музыку — юный музыкант верит, что если он будет играть его родители смогут узнать и найти его по музыке. Теперь, опекаемый загадочным незнакомцем, он играет на улицах Нью-Йорка и пытается найти родителей, которых он никогда не видел, с помощью своего исключительного музыкального дара.",
  like: 0,
  movieRate: "IMDb: 7.5 (102875)",
  movieImageUrl:
    "https://static.hdrezka.ac/i/2014/4/8/s93c5f0aa9673po43p83d.jpg",
});

const movieACard = new MovieCard(movieAFull);
const movieBCard = new MovieCard(movieBFull);
const movieCCard = new MovieCard(movieCFull);

const main = document.querySelector("main");
const wrapper = main.appendChild(document.createElement("div"));

wrapper.appendChild(movieACard.render());
wrapper.appendChild(movieBCard.render());
wrapper.appendChild(movieCCard.render());

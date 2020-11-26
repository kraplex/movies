import MovieItem from "../movieItem/movieItem";
import { v4 as guid } from "uuid";



class MoviesStorage {
    constructor(movie) {
        const movieId = guid();
        
        this.movieId = movie;
       
    }

}




const movieA = new MovieItem({
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
  
  const movieC = new MovieItem({
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
    "Молодой харизматичный ирландский гитарист и американская виолончелистка из престижной семьи полюбили друг друга. После волшебной встречи в Нью-Йорке...",
  like: 0,
  movieRate: "IMDb: 7.5 (102875)",
  movieImageUrl:
    "https://static.hdrezka.ac/i/2014/4/8/s93c5f0aa9673po43p83d.jpg",
  });
  
  const movieD = new MovieItem({
  movieTitleOrig: "The Social Network",
  movieTitleRus: "Социальная сеть",
  movieInfo: {
    year: "2010",
    country: "США",
    tagline: "Нельзя завести 500 милионов друзей не нажив ни одного врага",
    director: "Дэвид Финчер",
    scenario: "Аарон Соркин",
    producer:
    "Кевин Спейси, Дана Брунетти, Шон Чаффин, Майкл Де Лука, Скотт Рудин",
    camera: "Джефф Кроненвет",
    composer: "	Трент Резнор, Аттикус Росс",
  },
  movieActors: [
    "Джесси Айзенберг",
    "Эндрю Гарфилд",
    "Джастин Тимберлейк",
    "Арми Хаммер",
    "Бренда Сонг",
    "Рашида Джонс",
    "Джозеф Маззелло",
    "Макс Мингелла",
    "Руни Мара",
    "Тревор Райт",
    "Дакота Джонсон",
    "Малис Джау",
  ],
  movieDescription:
    " В фильме рассказывается о создании одной из самых популярных в Интернете социальных сетей — Facebook. Оглушительный успех этой сети среди пользователей по всему миру навсегда изменил жизнь студентов-однокурсников гарвардского университета, которые основали её в 2004 году и за несколько лет стали самыми молодыми мультимиллионерами в США... Фильм - адаптация книги Бена Мезрича.",
  like: 0,
  movieRate: "IMDb: 7.7 (616692)",
  movieImageUrl:
    "https://images-na.ssl-images-amazon.com/images/I/518zV7F39qL._AC_.jpg",
  });
  
  const moviesTestObj = {
  id1: movieA,
  id2: movieB,
  id3: movieC,
  id4: movieD,
  };
  
  

  export default moviesTestObj
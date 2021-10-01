import { useState } from "react";
import "./styles.css";

const horrorList = [
  {
    name: "The Conjuring",
    desc:
      "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
    rating: "8/10"
  },
  {
    name: "The Unholy",
    desc:
      "A hearing-impaired girl is visited by the Virgin Mary and can suddenly hear, speak, and heal the sick. As people flock to witness her miracles, terrifying events unfold. Are they the work of the Virgin Mary or something much more sinister?",
    rating: "6/10"
  },
  {
    name: "Blood Red Sky",
    desc:
      "A woman with a mysterious illness is forced into action when a group of terrorists attempt to hijack a transatlantic overnight flight.",
    rating: "5/10"
  }
];

const comedyList = [
  {
    name: "Dhamaal",
    desc:
      "Four lazy slacker conmen buddies who are jobless, homeless and broke learn about the secret of a hidden treasure from a dying thief and later embark on a race against time to find the mobster's buried treasure and claim it while being pursued by a determined police inspector who is hellbent to get the treasure all by himself.",
    rating: "8.5/10"
  },
  {
    name: "The Boss Baby",
    desc:
      "A suit-wearing, briefcase-carrying baby pairs up with his 7-year old brother to stop the dastardly plot of the CEO of Puppy Co.",
    rating: "7/10"
  },
  {
    name: "Cruella",
    desc:
      "A live-action prequel feature film following a young Cruella de Vil.",
    rating: "6.5/10"
  }
];

const scifiList = [
  {
    name: "Tenet",
    desc:
      "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    rating: "9.5/10"
  },
  {
    name: "Lucy",
    desc:
      "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    rating: "8.5/10"
  },
  {
    name: "Ready Player One",
    desc:
      "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
    rating: "8/10"
  }
];

export default function App() {
  const [movieList, setMovieList] = useState([]);

  const clickHandler = (e) => {
    let selectedName = e.target.name;

    switch (selectedName) {
      case "horror":
        setMovieList(horrorList);
        break;
      case "comedy":
        setMovieList(comedyList);
        break;
      case "scifi":
        setMovieList(scifiList);
        break;
      default:
        setMovieList([]);
        break;
    }
  };
  return (
    <div className="App">
      <h2 id="app-header">
        <span role="img" aria-label="movie-emoji">
          🎥
        </span>
        movie recommender
      </h2>
      <p> Checkout my favourite movies. Select a genre to get started</p>
      <button className="genre-btn" name="horror" onClick={clickHandler}>
        horror
      </button>
      <button className="genre-btn" name="comedy" onClick={clickHandler}>
        comedy
      </button>
      <button className="genre-btn" name="scifi" onClick={clickHandler}>
        sci-fi
      </button>
      <div id="app-container">
        {movieList.map((movie) => (
          <div className="movie-container" key={movie.name}>
            <p className="movie-name">
              {movie.name}
              <small className="movie-rating"> ({movie.rating}) </small>
            </p>
            <p
              className="movie-description"
              style={{ fontSize: "0.8rem", padding: "0 0.8rem" }}
            >
              {movie.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

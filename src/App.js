import {useState} from 'react';
import "./styles.css";

const horrorList = [{name: 'The Conjuring', rating: '8/10'},
{name: 'The Unholy', rating: '6/10'}, {name: 'Blood Red Sky', rating: '5/10'}]

const comedyList = [{name: 'Dhamaal', rating: '8.5/10'},
{name: 'The Boss Baby', rating: '7/10'}, {name: 'Cruella', rating: '6.5/10'}]

const scifiList = [{name: 'Tenet', rating: '9.5/10'},
{name: 'Lucy', rating: '8.5/10'}, {name: 'Ready Player One', rating: '8/10'}]


export default function App() {
  const [movieList, setMovieList] = useState([]);

  const clickHandler = (e) => {
    let selectedName = e.target.name;

    switch(selectedName)
    {
      case 'horror': setMovieList(horrorList);
      break;
      case 'comedy': setMovieList(comedyList);
      break;
      case 'scifi': setMovieList(scifiList);
      break;
      default: setMovieList([]);
      break;
    }
    

  }
  return (
    <div className="App">
      <h2 id='app-header'>
        <span role="img" aria-label="movie-emoji">
          🎥
        </span>
       movie recommender
      </h2>
      <p> Checkout my favourite movies. Select a genre to get started</p>
      <button className="genre-btn" name='horror' onClick={clickHandler}>horror</button>
      <button className="genre-btn" name='comedy' onClick={clickHandler}>comedy</button>
      <button className="genre-btn" name='scifi' onClick={clickHandler}>sci-fi</button>
      <div id='app-container'>
      {movieList.map(movie => (
          <div className='movie-container' key={movie.name}>
          <p className='movie-name'> {movie.name} </p>
          <small className='movie-rating'> {movie.rating} </small>
          </div>
        ))}
        </div>
    </div>
  );
}

"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);
  const basket = useSelector((state) => state.basket);
  const likedMovies = useSelector((state) => state.likedMovies);

  function handleAddMovie() {
    if (movieTitle.trim()) {
      dispatch({ type: "ADD_MOVIE", payload: movieTitle });
      setMovieTitle("");
    }
  }

  function handleAddToBasket(movie) {
    dispatch({ type: "ADD_TO_BASKET", payload: movie });
  }

  function handleAddToLikeMovies(movie) {
    dispatch({ type: "ADD_TO_LIKED_MOVIES", payload: movie });
  }

  return (
    <>
      <div>
        <h1>My Movie List</h1>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter a movie title"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button
          onClick={() => handleAddMovie}
          className="border p-1 rounded text-white bg-blue-400"
        >
          Add Movie
        </button>

        <h2>My Movies</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              {movie}
              <button
                onClick={() => handleAddToBasket}
                className="border p-1 rounded text-white bg-blue-400"
              >
                Add To Basket
              </button>
              <button
                onClick={() => handleAddToLikeMovies}
                className="border p-1 rounded text-white bg-blue-400"
              ></button>
            </li>
          ))}
        </ul>
        <h2>My Basket{basket.length}</h2>
        <ul>
          {basket.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
        <h2>My Movies{likedMovies.lenght}</h2>
        <ul>
          {likedMovies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;

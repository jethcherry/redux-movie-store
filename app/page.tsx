"use client";
import { title } from "process";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: {
      movies: { title: string; liked: boolean; inBasket: boolean }[];
    }) => {
      state.movies;
    }
  );
  const basket = useSelector();
  const likedMovies = useSelector(
    (state: { likedMovies: string[] }) => state.likedMovies
  );

  function handleAddMovie() {
    const newMovie = {
      title: movieTitle,
      inBaset: false,
      liked: false,
    };

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
              {movie.title}
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
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
        <h2>My Movies{likedMovies.length}</h2>
        <ul>
          {likedMovies.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;

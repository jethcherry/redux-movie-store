"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(
    (state: {
      movies: { title: string; liked: boolean; inBasket: boolean }[];
    }) => state.movies
  );
  const basket = useSelector((state: { basket: string[] }) => state.basket);

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
      dispatch({ type: "ADD_MOVIE", payload: newMovies });
      setMovieTitle("");
    }
  }

  function handleAddToBasket(movie: string) {
    dispatch({ type: "ADD_TO_BASKET", payload: movie });
  }

  function handleAddToLikedMovies(movie: string) {
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
                onClick={() => handleAddToBasket(movie.title)}
                className="border p-1 rounded text-white bg-blue-400"
              >
                {!movie.inBasket ? "Add To Basket" : "Remove from basket"}
              </button>
              <button
                onClick={() => handleAddToLikedMovies(movie.title)}
                className="border p-1 rounded text-white bg-blue-400"
              >
                {movie.liked ? "like" : "disliked"}
              </button>
            </li>
          ))}
        </ul>
        <h2>My Basket{basket.length}</h2>
        <ul>
          {basket.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
        <h2>My Movies{likedMovies.length}</h2>
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

"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie);

  function handleAddMovie() {
    if (movieTitle.trim()) {
      dispatch({ type: "ADD_MOVIE", payload: movieTitle });
      setMovieTitle("");
    }
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
          onClick={handleAddMovie}
          className="border p-1 rounded text-white bg-blue-400"
        >
          Add Movie
        </button>

        <h2>My Movies</h2>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;

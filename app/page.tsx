"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [movieTitle, setMovieTitle] = useState("");
  const dispatch = useDispatch();

  function handleAddMovie() {
    dispatch({ type: "ADD_MOVIE", payload: movieTitle });
    setMovieTitle("");
  }

  return (
    <>
      <div>
        <h1>My Movie List</h1>
      </div>
      <input
        type="text"
        placeholder="Enter a movie title"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <button onClick={handleAddMovie} >Add Movie</button>
    </>
  );
}

export default Home;

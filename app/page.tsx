"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const [movieTitle, setMovieTitle] = useState("");

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
    </>
  );
}

export default Home;

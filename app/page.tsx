"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  AddShoppingCart,
  RemoveShoppingCart,
} from "@mui/icons-material";
import "../app/pages/home.css";

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
    if (movieTitle.trim()) {
      const newMovie = { title: movieTitle, inBasket: false, liked: false };
      dispatch({ type: "ADD_MOVIE", payload: newMovie });
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
    <div className="container">
      <div>
        <h1>My Movie List</h1>
      </div>

      <div className="add-movie">
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

        <h2>My Movies ({movies.length})</h2>
        <ul className="movie-list">
          {movies.map((movie, index) => (
            <Card key={index}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {movie.title}{" "}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  startIcon={
                    movie.inBasket ? (
                      <RemoveShoppingCart />
                    ) : (
                      <AddShoppingCart />
                    )
                  }
                  onClick={() => handleAddToBasket(movie.title)}
                  className="border p-1 rounded text-white bg-blue-400"
                >
                  {movie.inBasket ? "Remove from Basket" : "Add to Basket"}
                </Button>{" "}
                <Button
                  startIcon={movie.liked ? <Favorite /> : <FavoriteBorder />}
                  onClick={() => handleAddToLikedMovies(movie.title)}
                  className="border p-1 rounded text-white bg-blue-400"
                >
                  {movie.liked ? "Dislike" : "Like"}
                </Button>
              </CardActions>
            </Card>
          ))}
        </ul>

        <h2>My Basket ({basket.length})</h2>
        <ul>
          {basket.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>

        <h2>Liked Movies ({likedMovies.length})</h2>
        <ul>
          {likedMovies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;

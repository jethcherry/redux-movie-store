import { createStore } from "redux";

const initialState = {
  movies: [
    {
      title: "The GodFather",
      inBasket: false,
      liked: false,
    },
    {
      title: "The Terminater",
      inBasket: false,
      liked: false,
    },
    {
      title: "The Professional",
      inBasket: false,
      liked: false,
    },
  ],
  basket: [],
  likedMovies: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        basket: state.likedMovies.includes(action.payload)
          ? state.basket.filter((movie) => movie !== action.payload)
          : [...state.basket, action.payload],
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.title === action.payload
            ? { ...movie, inBasket: !movie.inBasket }
            : movie
        ),
        basket: [...state.basket, action.payload],
      };

    case "ADD_TO_LIKED_MOVIES":
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.title === action.payload
            ? { ...movie, liked: !movie.liked }
            : movie
        ),
        likedMovies: state.likedMovies.includes(action.payload)
          ? state.likedMovies.filter((movie) => movie !== action.payload)
          : [...state.likedMovies, action.payload],
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

import { configureStore, } from "@reduxjs/toolkit";
import { songReducer, addsong, removeSong } from "./slices/songSlice";
import { movieReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./actions";


const store = configureStore({
  reducer: {
    songs: songReducer,
    movies: movieReducer,
  },
});

export {store,addMovie, removeMovie, addsong, removeSong, reset}

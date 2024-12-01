import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const moviesSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
      addMovie(state, action) {
        state.push(action.payload);
        console.log(action)
      },
     
      removeMovie(state, action) {
        const index = state.indexOf(action.payload);
        state.splice(index, 1);
      },
      reset(state, action){
        return []
      }
    },
    extraReducers(builder){
      builder.addCase(reset, (state, action) => {
        return [];
      })
     }
  });
  
  export const {addMovie, removeMovie} = moviesSlice.actions
  export const movieReducer = moviesSlice.reducer;
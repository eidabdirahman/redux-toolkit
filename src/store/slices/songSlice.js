import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";


const songsSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
      addsong(state, action) {
        state.push(action.payload);
      },
     
      removeSong(state, action) {
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
  
  export const {addsong, removeSong} = songsSlice.actions
  export  const songReducer = songsSlice.reducer;
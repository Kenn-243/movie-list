import { combineReducers } from "@reduxjs/toolkit";
import collectionSlice from "./collection/collectionSlicer";
import movieSlice from "./movie/movieSlicer";
import userSlice from "./user/userSlicer";

export const rootReducer = combineReducers({
  collection: collectionSlice,
  movie: movieSlice,
  user: userSlice,
});

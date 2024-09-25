import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { CollectionModel } from "../../models/CollectionModel";

export const addFavorite = createAsyncThunk(
  "collection/addFavorite",
  async ({ accountId, movieId }: { accountId: number; movieId: number }) => {
    try {
      const result = await axios.post(
        `https://api.themoviedb.org/3/account/${accountId}/favorite`,
        {
          media_type: "movie",
          media_id: movieId,
          favorite: true,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );

      return result.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const addWatchlist = createAsyncThunk(
  "collection/addWatchlist",
  async ({ accountId, movieId }: { accountId: number; movieId: number }) => {
    try {
      const result = await axios.post(
        `https://api.themoviedb.org/3/account/${accountId}/watchlist`,
        {
          media_type: "movie",
          media_id: movieId,
          watchlist: true,
        },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );

      return result.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const fetchFavorite = createAsyncThunk(
  "collection/fetchFavorite",
  async (accountId: number) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=en-US&page=1&sort_by=created_at.asc`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );

      const favoriteDataResult: CollectionModel[] = [];
      result.data.results.map((x: any) => {
        favoriteDataResult.push({
          id: x.id,
          title: x.title,
          poster_path: x.poster_path,
          release_date: x.release_date,
          original_language: x.original_language,
          vote_average: x.vote_average,
        });
      });

      return favoriteDataResult;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const fetchWatchlist = createAsyncThunk(
  "collection/fetchWatchlist",
  async (accountId: number) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );

      const watchlistDataResult: CollectionModel[] = [];
      result.data.results.map((x: any) => {
        watchlistDataResult.push({
          id: x.id,
          title: x.title,
          poster_path: x.poster_path,
          release_date: x.release_date,
          original_language: x.original_language,
          vote_average: x.vote_average,
        });
      });

      return watchlistDataResult;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    isSuccessful: false as boolean,
    isError: false as boolean,
    isLoading: false as boolean,
    favorites: [] as CollectionModel[],
    watchlists: [] as CollectionModel[],
  },
  reducers: {
    falsifyCollectionSuccess: (state) => {
      state.isSuccessful = false;
    },

    falsifyCollectionError: (state) => {
      state.isError = false;
    },
  },
  extraReducers(builder) {
    builder.addCase(addFavorite.pending, (state) => {
      state.isSuccessful = false;
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(addFavorite.rejected, (state) => {
      state.isSuccessful = false;
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(addFavorite.fulfilled, (state) => {
      state.isSuccessful = true;
      state.isError = false;
      state.isLoading = false;
    });

    builder.addCase(addWatchlist.pending, (state) => {
      state.isSuccessful = false;
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(addWatchlist.rejected, (state) => {
      state.isSuccessful = false;
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(addWatchlist.fulfilled, (state) => {
      state.isSuccessful = true;
      state.isError = false;
      state.isLoading = false;
    });

    builder.addCase(fetchFavorite.pending, (state) => {
      state.isSuccessful = false;
      state.isError = false;
      state.isLoading = true;
      state.favorites = [];
    });
    builder.addCase(fetchFavorite.rejected, (state) => {
      state.isSuccessful = false;
      state.isError = true;
      state.isLoading = false;
      state.favorites = [];
    });
    builder.addCase(fetchFavorite.fulfilled, (state, action) => {
      state.isSuccessful = true;
      state.isError = false;
      state.isLoading = false;
      state.favorites = action.payload;
    });

    builder.addCase(fetchWatchlist.pending, (state) => {
      state.isSuccessful = false;
      state.isError = false;
      state.isLoading = true;
      state.watchlists = [];
    });
    builder.addCase(fetchWatchlist.rejected, (state) => {
      state.isSuccessful = false;
      state.isError = true;
      state.isLoading = false;
      state.watchlists = [];
    });
    builder.addCase(fetchWatchlist.fulfilled, (state, action) => {
      state.isSuccessful = true;
      state.isError = false;
      state.isLoading = false;
      state.watchlists = action.payload;
    });
  },
});

export const { falsifyCollectionSuccess, falsifyCollectionError } =
  collectionSlice.actions;
export default collectionSlice.reducer;

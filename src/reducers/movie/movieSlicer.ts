import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieModel } from "../../models/MovieModel";
import axios from "axios";
import { MovieDetailsModel } from "../../models/MovieDetailModel";
import { ReviewModel } from "../../models/ReviewModel";

export const fetchNowPlaying = createAsyncThunk(
  "movie/fetchNowPlaying",
  async (page: number) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );
      const movieDataResult: MovieModel[] = [];
      result.data.results.map((x: any) => {
        movieDataResult.push({
          movieId: x.id,
          title: x.title,
          poster_path: x.poster_path,
        });
      });

      return movieDataResult.slice(0, 10);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const fetchPopular = createAsyncThunk(
  "movie/fetchPopular",
  async (page: number) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );
      const movieDataResult: MovieModel[] = [];
      result.data.results.map((x: any) => {
        movieDataResult.push({
          movieId: x.id,
          title: x.title,
          poster_path: x.poster_path,
        });
      });

      return movieDataResult.slice(0, 10);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const fetchTopRated = createAsyncThunk(
  "movie/fetchTopRated",
  async (page: number) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );
      const movieDataResult: MovieModel[] = [];
      result.data.results.map((x: any) => {
        movieDataResult.push({
          movieId: x.id,
          title: x.title,
          poster_path: x.poster_path,
        });
      });

      return movieDataResult.slice(0, 10);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const fetchMovieDetails = createAsyncThunk(
  "movie/fetchMovieDetails",
  async (movieId: number) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );
      let movieDetailsResult: MovieDetailsModel | null = null;
      movieDetailsResult = {
        id: result.data.id,
        title: result.data.title,
        genres: result.data.genres,
        original_language: result.data.original_language,
        overview: result.data.overview,
        popularity: result.data.popularity,
        poster_path: result.data.poster_path,
        release_date: result.data.release_date,
        vote_average: result.data.vote_average,
        vote_count: result.data.vote_count,
      };

      return movieDetailsResult;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

export const fetchReviews = createAsyncThunk(
  "movie/fetchReview",
  async ({ movieId, page }: { movieId: number; page: number }) => {
    try {
      const result = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=${page}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );
      const reviewResult: ReviewModel[] = [];
      result.data.results.map((x: any) => {
        reviewResult.push({
          id: x.id,
          author: x.author_details,
          content: x.content,
          created_at: x.created_at,
        });
      });

      return reviewResult;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    isError: false as boolean,
    isLoading: false as boolean,
    errorMessage: "" as string,
    movies: [] as MovieModel[],
    reviews: [] as ReviewModel[],
    movie: null as MovieDetailsModel | null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNowPlaying.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.errorMessage = "";
      state.movies = [];
    });
    builder.addCase(fetchNowPlaying.rejected, (state, action) => {
      state.isError = true;
      state.errorMessage = action.error.message;
      state.isLoading = false;
      state.movies = [];
    });
    builder.addCase(fetchNowPlaying.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.movies = action.payload;
    });

    builder.addCase(fetchPopular.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.errorMessage = "";
      state.movies = [];
    });
    builder.addCase(fetchPopular.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = action.error.message;
      state.movies = [];
    });
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.movies = action.payload;
    });

    builder.addCase(fetchTopRated.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.errorMessage = "";
      state.movies = [];
    });
    builder.addCase(fetchTopRated.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = action.error.message;
      state.movies = [];
    });
    builder.addCase(fetchTopRated.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.movies = action.payload;
    });

    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.errorMessage = "";
      state.movie = null;
    });
    builder.addCase(fetchMovieDetails.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.movie = null;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.movie = action.payload;
    });

    builder.addCase(fetchReviews.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.errorMessage = "";
      state.reviews = [];
    });
    builder.addCase(fetchReviews.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.reviews = [];
    });
    builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.reviews = action.payload;
    });
  },
});

export default movieSlice.reducer;

import { GenreModel } from "./GenreModel";

export interface MovieDetailsModel {
  id: number;
  title: string;
  genres: GenreModel[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
}

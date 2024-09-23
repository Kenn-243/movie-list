import { AuthorModel } from "./AuthorModel";

export interface ReviewModel {
  id: string;
  author: AuthorModel;
  content: string;
  created_at: string;
}

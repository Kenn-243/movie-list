import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserModel } from "../../models/UserModel";

export const createToken = createAsyncThunk("user/createToken", async () => {
  try {
    const result = await axios.get(
      "https://api.themoviedb.org/3/authentication/token/new",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzA4NTU0MS41NjAxNjIsInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQrJBoksvLnE3w-WB7T_r9fMUXL8XxMr46dtn5BrhOc",
          accept: "application/json",
        },
      }
    );

    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}) as any;

export const signIn = createAsyncThunk(
  "user/signIn",
  async (username, password) => {
    const result = await axios.post(
      "https://api.themoviedb.org/3/authentication/token/validate_with_login",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzA4NTU0MS41NjAxNjIsInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CQrJBoksvLnE3w-WB7T_r9fMUXL8XxMr46dtn5BrhOc",
          accept: "application/json",
          "content-type": "application/json",
        },
        data: {
          username: username,
          password: password,
          request_token: createToken,
        },
      }
    );
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null as UserModel | null,
    isError: false as boolean,
    isLoading: false as boolean,
    errorMessage: "" as string,
    token: "" as string,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(createToken.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
      state.errorMessage = "";
      state.token = "";
    });
    builder.addCase(createToken.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = action.error.message;
      state.token = "";
    });
    builder.addCase(createToken.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.token = action.payload;
    });
  },
});

export default userSlice.reducer;

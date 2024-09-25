import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { UserModel } from "../../models/UserModel";

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ username, password }: { username: string; password: string }) => {
    try {
      const requestToken = await axios.get(
        "https://api.themoviedb.org/3/authentication/token/new",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
          },
        }
      );
      const token = requestToken.data.request_token;
      const getUserToken = await axios.post(
        "https://api.themoviedb.org/3/authentication/token/validate_with_login",
        {
          username: username.toString(),
          password: password.toString(),
          request_token: token,
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

      const userToken = getUserToken.data.request_token;

      const getSessionId = await axios.post(
        "https://api.themoviedb.org/3/authentication/session/new",
        {
          request_token: userToken,
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

      const sessionId = getSessionId.data.session_id;

      const getAccountId = await axios.get(
        "https://api.themoviedb.org/3/account",
        {
          params: {
            api_key:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            session_id: sessionId,
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );

      const accountId = getAccountId.data.id;

      const getUser = await axios.get(
        `https://api.themoviedb.org/3/account/${accountId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjIxZDNkOTIyOTgxMmJjMzkxOGYxODcyYmI2NWJmMyIsIm5iZiI6MTcyNzE1OTM2OC4wNTU5MDksInN1YiI6IjY2ZWJjMzEwZTQzZjA3ZGU4MmViNzM0MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1rW0w7Pf0uZ3Tcirt6s7Rz8fVsA-Ox1xSUb2E3KM5MM",
            accept: "application/json",
            "content-type": "application/json",
          },
        }
      );

      return getUser.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
) as any;

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedUser: null as UserModel | null,
    isError: false as boolean,
    isLoading: false as boolean,
    errorMessage: "" as string,
    token: "" as string,
  },
  reducers: {
    logout: (state) => {
      state.loggedUser = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(signIn.pending, (state) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.loggedUser = null;
    });
    builder.addCase(signIn.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
      state.errorMessage = "";
      state.loggedUser = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.errorMessage = "";
      state.loggedUser = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

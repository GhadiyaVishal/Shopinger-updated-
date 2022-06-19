import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// export const userSignUp = createAsyncThunk(
//   "auth/register",
//   async ({ toast, navigate }, { rejectWithValue }) => {
//     try {
//       const res = await api.userSignUp(dataForm);
//       toast.success("Register Successful");
//       navigate("/");
//       return res.data;
//     } catch (error) {
//       toast.error("Please give all the values");
//       return rejectWithValue(error.res.data);
//     }
//   }
// );

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    // [userSignUp.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [userSignUp.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.email = action.payload.data.email;
    //   state.role = action.payload.data.role;
    //   state.authenticated = true;
    // },
    // [userSignUp.rejected]: (state, action) => {
    //   state.loading = true;
    //   state.error = action.payload.message;
    // },
    registerStart: (state, action) => {
      state.currentUser = action.payload;
      state.isFetching = true;
    },
    registerSuccess: state => {
      state.isFetching = true;
      toast.success("Register successfully");
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
      toast.error("Opps! not yet");
    },

    loginStart: state => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      toast.success("Login successfully");
    },
    loginFailure: state => {
      state.isFetching = false;
      state.error = true;
      toast.error("Opps! something wrong..");
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;
export default userSlice.reducer;

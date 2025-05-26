import { createSlice } from "@reduxjs/toolkit";
import {
  getOtherUsersThunk,
  getUserProfileThunk,
  loginUserThunk,
  logoutUserThunk,
  registerUserThunk,
} from "./user.thunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    buttonLoading: false,
    userProfile: null,
    screenLoading: false,
    otherUsers: null,
    selectedUser:JSON.parse(localStorage.getItem("selectedUser")) ,
  },
  reducers: {
    setSelectedUser: (state, action) => {
       localStorage.setItem("selectedUser",JSON.stringify(action.payload))
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUserThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(loginUserThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload?.responseData?.user;
      state.isAuthenticated = true;
       state.buttonLoading = false;
    });
    builder.addCase(loginUserThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });

    //register
    builder.addCase(registerUserThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(registerUserThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload?.responseData?.user;
      state.isAuthenticated = true;
       state.buttonLoading = false;
    });
    builder.addCase(registerUserThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });

    //logout
    builder.addCase(logoutUserThunk.pending, (state, action) => {
      state.buttonLoading = true;
    });
    builder.addCase(logoutUserThunk.fulfilled, (state, action) => {
      state.userProfile = null;
      state.isAuthenticated = false;
      state.buttonLoading = false;
      state.selectedUser = null;
      state.otherUsers = null;
      localStorage.clear()
    });
    builder.addCase(logoutUserThunk.rejected, (state, action) => {
      state.buttonLoading = false;
    });

    //getUser-profile
    builder.addCase(getUserProfileThunk.pending, (state, action) => {
      state.screenLoading = true;
    });
    builder.addCase(getUserProfileThunk.fulfilled, (state, action) => {
      state.userProfile = action.payload?.responseData;
      state.isAuthenticated = true;
      state.screenLoading = false;
    });
    builder.addCase(getUserProfileThunk.rejected, (state, action) => {
      state.screenLoading = false;
    });

    //getOtherUsers
    builder.addCase(getOtherUsersThunk.pending, (state, action) => {
      state.screenLoading = true;
    });
    builder.addCase(getOtherUsersThunk.fulfilled, (state, action) => {
      state.otherUsers = action.payload?.responseData;
      state.screenLoading = false;
    });
    builder.addCase(getOtherUsersThunk.rejected, (state, action) => {
      state.screenLoading = false;
    });
  },
});

export const { setSelectedUser } = userSlice.actions;
export default userSlice.reducer;

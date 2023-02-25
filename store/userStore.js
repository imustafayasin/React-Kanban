import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "User Store",
  initialState: {
    email: "",
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

export const { setUserEmail } = userStore.actions;
export default userStore.reducer;

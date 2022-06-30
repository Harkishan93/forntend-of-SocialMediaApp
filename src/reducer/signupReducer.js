import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const userSingup = createAsyncThunk(
  'users/singup',
  async (data) => {
    const result = await fetch("http://localhost:4444/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const resultfetch = result.status;
    return resultfetch
  }
)
let initialState = {
  data: {},
  loading: false,
  message: ""
};
const singupReducer = createSlice({
  name: "singup",
  initialState,
  reducers: {},
  extraReducers: {
    [userSingup.fulfilled]: (state, action) => {
      state.loading = false
      if (action.payload === 200) {
        state.message = "Singup Successfully"
      } else {
        state.message = "request invalid"
      }

    },
    [userSingup.pending]: (state, action) => {
      state.loading = true
    },
    [userSingup.rejected]: (state, action) => {
      state.message = "request rejected"
      state.loading = false
    }
  }
})
export { userSingup }
export default singupReducer.reducer;
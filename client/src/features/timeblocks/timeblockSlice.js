import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import timeblockService from "./timeblockService";

const initialState = {
  timeblocks: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new timeblock
export const createTimeblock = createAsyncThunk(
  "timeblocks/create",
  async (timeblockData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await timeblockService.createTimeblock(timeblockData)
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message); 
    }
  }
);

//get user timeblocks
export const getTimeblocks = createAsyncThunk(
  'timeblocks/dashbord',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await timeblockService.getTimeblocks(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const deleteTimeblock = createAsyncThunk(
  'timeblock/delete',
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await timeblockService.deleteTimeblock(id, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const timeblockSlice = createSlice({
  name: "timeblock",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
    .addCase(createTimeblock.pending, (state) => {
        state.isLoading = true
    })
    .addCase(createTimeblock.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.timeblocks.push(action.payload)
      })
      .addCase(createTimeblock.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(getTimeblocks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTimeblocks.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = action.payload
      })
      .addCase(getTimeblocks.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTimeblock.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTimeblock.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.goals = state.goals.filter(
          (goal) => goal._id !== action.payload.id
        )
      })
      .addCase(deleteTimeblock.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
});

export const { reset } = timeblockSlice.actions;
export default timeblockSlice.reducer;

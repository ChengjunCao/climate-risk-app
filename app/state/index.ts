"use client";

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../config";

const fetchData = createAsyncThunk("data/fetch", async () => {
  const response = await fetch(`${server}/api/sampleData`);
  const data = await response.json();
  return data;
});

const initialState = {
  isLoading: false,
  data: [],
  year: "2030",
  location: "",
  name: "",
  category: "",
};

export const appSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setAssetName: (state, action) => {
      state.name = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { setYear, setLocation, setAssetName, setCategory, setData } =
  appSlice.actions;

export default appSlice.reducer;

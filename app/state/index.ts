"use client";

import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setYear, setLocation, setAssetName, setCategory, setData } =
  appSlice.actions;

export default appSlice.reducer;

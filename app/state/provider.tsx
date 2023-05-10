"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./index";

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

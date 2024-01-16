// src/features/dataSlice.ts

import { dataType } from "@/App";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DataState {
  items: dataType[]; // Replace YourDataType with the actual type of your data
  loading: boolean;
}

const initialState: DataState = {
  items: [],
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
    },
    fetchDataSuccess(state, action: PayloadAction<dataType[]>) {
      state.loading = false;
      state.items = action.payload;
    },
    fetchDataFailure(state) {
      state.loading = false;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;
// Assuming RootState is your root state type

export default dataSlice.reducer; // this is reducer function export

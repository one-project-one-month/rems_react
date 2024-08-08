import { createSlice } from "@reduxjs/toolkit";

export interface TCurrentPage {
  currentPage: number;
}

const initialCurrentPage: TCurrentPage = {
  currentPage: 0,
};

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: initialCurrentPage,
  reducers: {
    next: (state) => {
      state.currentPage += 1;
    },
    prev: (state) => {
      state.currentPage -= 1;
    },
  },
});

export const { next, prev } = currentPageSlice.actions;

export default currentPageSlice.reducer;

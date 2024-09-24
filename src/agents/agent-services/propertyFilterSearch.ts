import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  cityFilter: string;
  bedRoomFilter: number;
  bathRoomFilter: number;
  homeType: string;
  minPrice: number | null;
  maxPrice: number | null;
}

const initialState: FilterState = {
  cityFilter: "string",
  bedRoomFilter: 0,
  bathRoomFilter: 0,
  homeType: "string",
  minPrice: 0,
  maxPrice: 0
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCityFilter: (state, action: PayloadAction<string> ) => {
      state.cityFilter = action.payload;
    },
    setBedRoomFilter: (state, action: PayloadAction<number>) => {
      state.bedRoomFilter = action.payload;
    },
    setBathRoomFilter: (state, action: PayloadAction<number>) => {
      state.bathRoomFilter = action.payload;
    },
    setHomeTypeFilter: (state, action: PayloadAction<string>) => {
      state.homeType = action.payload;
    },
    setMinPriceFilter: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPriceFilter: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    }, 
  }
})

export const {
  setCityFilter, 
  setBedRoomFilter, 
  setBathRoomFilter, 
  setHomeTypeFilter,
  setMinPriceFilter,
  setMaxPriceFilter
} = filtersSlice.actions;

export default filtersSlice.reducer;
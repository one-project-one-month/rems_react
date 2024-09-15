import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "http://65.18.112.78:44010/rems/api/v1/";

const baseUrl = fetchBaseQuery({
  baseUrl: url,
  

  // when backend added auth we set the bearer token in below
  // prepareHeaders: async (headers, { _ }) => {
  // 	const user = await getLocalStorage("user"); //get token from local storage or else
  // 	if (user) {
  // 		headers.set("Authorization", `Bearer ${user.token}`);
  // 		headers.set("Cache-Control", "no-cache");
  // 	}
  // 	return headers;
  // },

  prepareHeaders: async (headers) => {
    headers.set(
      "Authorization",
      `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkNDQ1YTk5Ni03NTE4LTQ3NWEtOGE5MS1jMTU0OWM2Mzg0NzIiLCJhdWQiOiJSRU1TIiwiaXNzIjoiUkVNUyIsInJvbGUiOiJBZ2VudCIsInVuaXF1ZV9uYW1lIjoiaGVpbmh0ZXQiLCJUb2tlbkV4cGlyZWQiOiIyMDI0LTA4LTExVDA5OjQ3OjI1LjU5NTQ3MzVaIiwibmJmIjoxNzIzMjgzMjQ1LCJleHAiOjE3MjMzNjk2NDUsImlhdCI6MTcyMzI4MzI0NX0.9-GtNe7qh7LfkqWAYMPmtCo2lq41ocqKWcc4YeF_nho`
    );
  },
});

// Hooks for global state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default baseUrl;

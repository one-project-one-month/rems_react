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
});

export default baseUrl;

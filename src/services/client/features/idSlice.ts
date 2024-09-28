import { createSlice } from "@reduxjs/toolkit";

interface Ids {
    clientId: number;
}

const initialState: Ids = {
    clientId: 0
};

export const idSlice = createSlice({
    name: "id",
    initialState,
    reducers: {
        updateClientId: (state, {payload}) => {
            console.log(payload);
            
            state.clientId = payload?.clientId;
        },
        clearId: (state) => {
            state.clientId = 0
        }
    }
})

export const { updateClientId, clearId } = idSlice.actions;
export const clientId = (state: any) => state.id?.clientId;

export default idSlice.reducer;
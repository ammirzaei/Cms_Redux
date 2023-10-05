import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/env";

export const getUsersFromServer = createAsyncThunk('users/getUsersFromServer', async ()=>{
    return fetch(baseUrl + "/users").then(res => res.json()).then(data => data);
});
export const deleteUserFromServer = createAsyncThunk('users/deleteUserFromServe', async (id)=>{
    return fetch(`${baseUrl}/users/${id}`, {method: 'delete'}).then(res => res.json()).then(data => data);
})

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {

    },
    extraReducers:(builder)=> {
        // [getUsersFromServer.fulfilled] : (state, action)=>{
        //     console.log(action);
        //     state.push(...action.payload);
        // }
        builder.addCase(getUsersFromServer.fulfilled, (state, action)=> action.payload),
        builder.addCase(deleteUserFromServer.fulfilled, (users, action)=> {
            const newUsers = users.filter((user => user._id !== action.payload.id));
            return newUsers;
        })
    }
});

export default slice.reducer;
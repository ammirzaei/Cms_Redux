import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/env";

export const getArticlesFromServer = createAsyncThunk("articles/getArticlesFromServer", async ()=>{
    return fetch(baseUrl + "/articles").then(res => res.json()).then(data => data);
});
export const deleteArticle = createAsyncThunk('courses/deleteArticle', async (id)=>{
    return fetch(`${baseUrl}/articles/${id}`, { method: 'delete' }).then(res => res.json()).then(data => data);
})

const slice = createSlice({
    name: 'articles',
    initialState: [],
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getArticlesFromServer.fulfilled, (state, action)=> action.payload),
        builder.addCase(deleteArticle.fulfilled, (state, action)=>{
            return state.filter(article => article._id !== action.payload.id);
        })
    }
});

export default slice.reducer;
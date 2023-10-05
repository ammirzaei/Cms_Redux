import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/env";

export const getCoursesFromServer = createAsyncThunk('courses/getCoursesFromServer', async ()=>{
    return fetch(baseUrl + "/courses").then(res => res.json()).then(data => data);
});
export const deleteCourse = createAsyncThunk('courses/deleteCourse', async (id)=>{
    return fetch(`${baseUrl}/courses/${id}`, { method: 'delete' }).then(res => res.json()).then(data => data);
});

const slice = createSlice({
    name: 'courses',
    initialState: [],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getCoursesFromServer.fulfilled, (state, action)=> action.payload),
        builder.addCase(deleteCourse.fulfilled, (state, action)=>{
            const newState = state.filter(course => course._id !== action.payload.id);
            return newState;
        });
    }
});

export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const notes = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: "1",
                title: "hello",
                content: "here is the content"
            },
        ],
    },
    reducers: {
        addNote: (state,action) => {
            state.items.push(action.payload);
        },
    },
})

export const {addNote} = notes.actions;
export default notes.reducer;
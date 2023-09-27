import { createSlice } from "@reduxjs/toolkit";

export const notes = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: "1",
                title: "card sample",
                content: "here is the content",
                color: "#E91E63",
            },
        ],
    },
    reducers: {
        addNote: (state,action) => {
            state.items.push(action.payload);
        },
        deleteNote: (state,action) => {
            const id = action.payload;
            const filtered = state.items.filter((item) => item.id !== id); // silinen item disindakileri gosteren filtre
            state.items = filtered;
        }
    },
})

export const { addNote, deleteNote } = notes.actions;
export default notes.reducer;
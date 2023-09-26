import { createSlice } from "@reduxjs/toolkit";

export const notes = createSlice({
    name: 'notes',
    initialState: {
        id: 1,
        header: '',
        description: '',
        color: '',
    },
    reducers: {
        addTodo: (state,action) => {
            state.items.push(action.payload)
        },
    },
})

export const {addTodo} = notes.actions;
export default notes.reducer;
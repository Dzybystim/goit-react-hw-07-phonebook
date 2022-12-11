import { createSlice } from "@reduxjs/toolkit";

const initialFilter = ""

const filtersSlice = createSlice({
    name: "filters",
    initialState: initialFilter,
    reducers: {
        setStatusFilter(state, action) {
            return  action.payload
        }
    }
})

export const {setStatusFilter} = filtersSlice.actions
export const filtersReducer = filtersSlice.reducer
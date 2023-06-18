import {createSlice} from "@reduxjs/toolkit"

const applicationSlice = createSlice({
    name: 'applicationSlice',
    initialState: {
        application: [],
        applicationHelp: [],
    },
    reducers: {
        setApplication: (state, action) => {
            state.application = action.payload
        },
        setApplicationHelp: (state, action) => {
            state.applicationHelp = action.payload
        }
    }
})

export const {
    setApplication,
    setApplicationHelp,
} = applicationSlice.actions

export default applicationSlice.reducer
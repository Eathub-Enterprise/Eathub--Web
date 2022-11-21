import { createSlice } from '@reduxjs/toolkit';

const vendorSlice = createSlice({
    name: 'vendor',
    initialState: [],
    reducers: {
        vendorInfo(state, action){
            state.push({
                info: action.payload
            })
        }
    },
})

export const { vendorInfo } = vendorSlice.actions;
export default vendorSlice.reducer;
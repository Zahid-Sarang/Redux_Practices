import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  color: "",
}

export const themSlice = createSlice({
  name: 'theme',
  initialState:initialStateValue,
  reducers: {
    chnageTextColor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { chnageTextColor } = themSlice.actions

export default themSlice.reducer
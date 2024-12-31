import { createSlice } from '@reduxjs/toolkit'

export const counterSlicenew = createSlice({
  name: 'counter',
  initialState: {
    number: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.number += 1
    },
    decrement: state => {
      state.number -= 1
    },
    incrementByAmount: (state, action) => {
      state.number += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlicenew.actions

export default counterSlicenew.reducer
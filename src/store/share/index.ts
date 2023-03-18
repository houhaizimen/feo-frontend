import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { shareType } from '@/store/state'

const initialState: shareType = {
  data: null
}

export const shareSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setShareMsg: (state, action: PayloadAction<unknown>) => {
      state.data = action.payload
    },
    clearShareMsg: (state) => {
      state.data = null
    }
  }
})

// reducer方法的每一个case都会生成一个Action
export const { setShareMsg, clearShareMsg } = shareSlice.actions

export default shareSlice.reducer

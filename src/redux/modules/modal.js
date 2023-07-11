import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modalCheacked : false,
}

const modalSlice = createSlice({
  name : "modal",
  initialState,
    reducers : {
      toggleModal : (state) => {
        state.modalCheacked = !state.modalCheacked
      }
    }
})

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
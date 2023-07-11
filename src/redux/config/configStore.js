import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modal"

const rootReducer = combineReducers({
  modal,
})

const store = configureStore({
  reducer : rootReducer,
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    notification: {
      shouldShowNotification: false,
      status: null,
      title: null,
      message: null,
    },
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification.status = action.payload.status;
      state.notification.title = action.payload.title;
      state.notification.message = action.payload.message;
      state.notification.shouldShowNotification =
        action.payload.shouldShowNotification;
    },
    hideNotification(state) {
      state.notification.shouldShowNotification = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;

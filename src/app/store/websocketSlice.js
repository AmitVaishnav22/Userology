import { createSlice } from "@reduxjs/toolkit";

const websocketSlice = createSlice({
  name: "websocket",
  initialState: { messages: [] },
  reducers: {
    addMessage: (state, action) => { state.messages.push(action.payload); },
  },
});

export const { addMessage } = websocketSlice.actions;
export default websocketSlice.reducer;

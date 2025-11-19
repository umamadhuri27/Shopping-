import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;   
      } else {
        state.push({ ...item, quantity: 1 }); 
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },

    incrementQty: (state, action) => {
      const id = action.payload;
      const item = state.find((i) => i.id === id);
      if (item) item.quantity += 1;
    },

    decrementQty: (state, action) => {
      const id = action.payload;
      const item = state.find((i) => i.id === id);

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter((i) => i.id !== id);
      }
    }
  }
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;

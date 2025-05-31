import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
    cartofItems: 0
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload; // destructure product details from action payload
        // check if item already exists in the cart
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem){
            // increment quantity if item exists
            existingItem.quantity++;
        } else {
            // if item doesn't exist in the cart, add new item to array via push
            state.items.push({name, image, cost, quantity: 1});
        }
        state.cartofItems += 1;
    },
    removeItem: (state, action) => {
        const {name, quantity} = action.payload;
        state.items = state.items.filter(item => item.name !== name);
        state.cartofItems -= quantity;
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload;

        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate){
            itemToUpdate.quantity = quantity;
        }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
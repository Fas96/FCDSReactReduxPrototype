import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.total += newItem.price;
            } else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    name: newItem.name,
                    total: newItem.price
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.itemList.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.itemList = state.itemList.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.total = existingItem.total - existingItem.price;
            }
        },
        setShowCart(state, action) {
            state.showCart = !state.showCart;
        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice
// import {createStore} from "redux";
//
// const reduceFn = (state={counter:10}, action) => {
//     //Synchronous Function
//     // we should not do any async operation here, we should not mutate the original state
//     switch (action.type) {
//         //+, -, *, /
//         case "ADD":
//             return {counter: state.counter + 1};
//         case "SUB":
//             return {counter: state.counter - 1};
//         case "MUL":
//             return {counter: state.counter * 2};
//         case "DIV":
//             return {counter: state.counter / action.payload};
//         case "RES":
//             return {counter: 0};
//         default:
//             return state;
//     }
//
// }
//
//
//
// export const store = createStore(reduceFn);

import {configureStore}   from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
//
// const counterSlice=createSlice({
//     name:"counter",
//     initialState:{counter:10},
//     reducers:{
//         add(state,action){
//             state.counter+=1;
//         },
//         sub(state,action){
//             state.counter-=1;
//         },
//         mul(state,action){
//             state.counter*=2;
//
//         },
//         div(state,action){
//             state.counter/=action.payload;
//         },
//         res(state,action){
//             state.counter=0;
//         }
//     }
// })
//
// export const actions=counterSlice.actions;
//
// export const store=configureStore({
//     reducer:counterSlice.reducer
// });

export  const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;
import {createSlice} from "@reduxjs/toolkit";
// 1. To have initial data.
// initially there are no items in the cart.
const initialState ={
     value: [],
     Favourite:[],
     totalQuantity:0,
     totalPrice:0
}
// 2. Create the reducer.
// use createSlice function.
const cartSlice = createSlice({
    
    name:"cartItems",
    initialState,
    reducers:{
        // define actions.
        addFav:(state,action)=>{
            state.Favourite.push(action.payload);

        },
        
        add: (state, action)=>{
            const itemIndex = state.value.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex >=0){
                state.value[itemIndex].quantity += 1;
                //console.log(state.value[itemIndex].quantity);
            }
            else{
                const tempProduct = {...action.payload, quantity: 1};
                //console.log(tempProduct);
                state.value.push(tempProduct); 
            }
                       
        },
        removeFromCart:(state,action)=>{
            const filteredCart = state.value.filter((item) => item.id !== action.payload);
                //console.log(filteredCart);
                //console.log(action.payload)
                state.value=filteredCart;
            
        },
        removeFromFavCart:(state,action)=>{
            const filteredCart = state.Favourite.filter((item) => item.id !== action.payload);
                //console.log(filteredCart);
                //console.log(action.payload)
                state.Favourite=filteredCart;
            
        },
        decreaseCart: (state,action)=>{
            //If item's quantity is >1, then decrement the quantity
            //If Item's quantity is =1, then remove that item from list.
            const itemIndex = state.value.findIndex((item)=>item.id === action.payload.id);
            if(state.value[itemIndex].quantity > 1){
                state.value[itemIndex].quantity -= 1;
            }else if(state.value[itemIndex].quantity === 1){
                state.value = state.value.filter((item)=>item.id !== action.payload.id);
            }
        },   
        getTotal: (state)=>{
            const {price, quantity} = state.value.reduce((cartTotal,currentItem)=>{
               const {price,quantity} = currentItem;
               const itemTotal = price * quantity;
               cartTotal.price += itemTotal;
               cartTotal.quantity += quantity;
               return cartTotal;
            },
            {
                price: 0,
                quantity: 0
            });
         
            state.totalPrice = parseFloat(price.toFixed(2));
            state.totalQuantity = quantity;
            //console.log(state.totalPrice);
            //console.log(state.totalQuantity);
        },
        clearCart(state) {
            state.value = [];
            
          }
        
        },    
});
// exporting actions for components to call.
export const { add, removeFromCart,decreaseCart,getTotal,clearCart,addFav,removeFromFavCart} = cartSlice.actions;
// selector to select cart data.
export const cartSelector = (state)=> state.cartItems;
export default cartSlice.reducer;


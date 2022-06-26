export const initialState = {
    cart: [],
}

// //Selector reduce kore sum ber kora
// export const getBasketTotal=(basket)=>{ // return na dile value undefine asbe
//     // basket  ? basket.reduce()
//     // return basket?.reduce((amount,item)=>item.price + amount,0);
//     return basket?.reduce((amount,item)=>{ //item means basket purota and tar modde basket.price=item.price
//         return amount+item.price  //ei kane amount holo 0. kono kicur sum ber korte reduce use kore
//     },0)
// }


const reducer = (state, action) => {
    console.log(action, "action");
    switch (action.type) {
        case "ADD_TO_CART":

            const item = action.payload[0] ? action.payload[0] : action.payload;
            // console.log(item, "item")
            // console.log(state.cart, "statecart")
            const isExistItem = state.cart?.find((i) => i.product_id === item.product_id);

            if (isExistItem) {
                return {
                    ...state,
                    cart: state.cart.map((i) => i.product_id === isExistItem.product_id ? item : i),
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, item],
                };
            }

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(item => item.product_id !== action.id)
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}

export default reducer;
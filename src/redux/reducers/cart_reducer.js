import cartTypes from "../types/cart";
import { addItemToCart, removeItemFromCart } from "../utils/cart.util";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    case cartTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

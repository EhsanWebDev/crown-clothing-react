import React from "react";
import "./cart-dropdown.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/utils/cart.selector";
import CartItem from "../cart-item/CartItem";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/actions/cart_actions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">No Items in your cart</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        {" "}
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

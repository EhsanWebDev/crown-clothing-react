import React from "react";
import "./collection-item.scss";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions/cart_actions";
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />
      <div className="collection-footer">
        <span className="name"> {name} </span>
        <span className="price">${price} </span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

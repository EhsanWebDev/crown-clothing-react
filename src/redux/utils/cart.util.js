export const addItemToCart = (cartItems, newItem) => {
  const existingItem = cartItems.find((item) => item.id === newItem.id);

  if (existingItem) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removeItem) => {
  const existingItem = cartItems.find((item) => item.id === removeItem.id);

  if (existingItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== removeItem.id);
  }
  return cartItems.map((item) =>
    item.id === removeItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

import React, { createContext, useState } from 'react';

// create context
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [IsOpen, setIsOpen] = useState(false);
  return <CartContext.Provider value={{ IsOpen, setIsOpen }}>
    {children}
  </CartContext.Provider>;
};

export default CartProvider;

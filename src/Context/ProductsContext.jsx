import { createContext, useState } from "react";

export const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addtoCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) => {
        return item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }

  function increaseQuantity(id) {
    setCart(
      cart.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item;
      })
    );
  }

  function decreaseQuantity(id) {
    setCart(
      cart.map((item) => {
        return item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      })
    );
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <ProductContext.Provider
      value={{
        cart,
        addtoCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;

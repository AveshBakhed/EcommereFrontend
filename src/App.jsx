import { useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { gettingData } from "./services/api";
import { ProductContext, CartContext } from "./context/contextData";
import { ToastContainer, toast } from "react-toastify";

export async function Loader() {
  const data = await gettingData();
  return data;
}

export default function App() {
  const productData = useLoaderData();

  const [cart, setCart] = useState(() => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  });
  useEffect(() => {
    return localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function getProductForCart(title) {
    const found = productData.find((item) => item.title === title);
    toast.success("Added to cart");
    if (found) {
      const existing = cart.some((item) => item.title === title);
      if (existing) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.title === title
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          )
        );
      } else {
        setCart((prevCart) => [...prevCart, { ...found, quantity: 1 }]);
      }
    }
  }

  function increaseQuantity(title) {
    setCart((prev) =>
      prev.map((item) => {
        return item.title === title
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item;
      })
    );
  }

  function decreaseQuantity(title) {
    setCart((prev) =>
      prev
        .map((item) => {
          return item.title === title
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item;
        })
        .filter((i) => i.quantity > 0)
    );
  }

  function removeItemCart(title) {
    setCart((prev) => prev.filter((item) => item.title !== title));
    toast.error("Removed from cart");
  }

  return (
    <>
      <ProductContext.Provider value={{ productData }}>
        <CartContext.Provider
          value={{
            cart,
            removeItemCart,
            getProductForCart,
            increaseQuantity,
            decreaseQuantity,
          }}
        >
          <Outlet />
          <ToastContainer
            position="top-center"
            autoClose={2000}
            newestOnTop
            theme="colored"
          />
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

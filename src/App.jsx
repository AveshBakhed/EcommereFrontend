import { useState, useEffect } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { gettingData } from "./services/api";
import { ProductContext, CartContext } from "./context/contextData";
import { ToastContainer } from "react-toastify";
import { showSuccessToast, showErrorToast } from "./utlis/toastUtlis";
import { ScrollRestoration } from "react-router-dom";

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
    showSuccessToast("Added to cart");
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
    showErrorToast("Removed from cart");
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
            autoClose={1500}
            newestOnTop
            theme="colored"
            limit={1}
          />
          <ScrollRestoration />
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

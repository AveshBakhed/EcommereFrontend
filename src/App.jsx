import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Route, Routes } from "react-router-dom";
import { gettingData } from "./services/api";
import Hero from "./componenets/Hero";
import CartPage from "./pages/cartPage";
import Checkout from "./pages/checkout";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/Productpage";
import ProtectedRoute from "./componenets/protectedRoutes";
import NotFound from "./pages/404page";
import { ProductContext, CartContext } from "./context/contextData";

export default function App() {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const data = await gettingData();
        setProductData(data);
      } catch (error) {
        setError(error);
      } finally {
        console.log("Success");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
          <Routes>
            <Route path="/" element={<HomePage error={error} />}>
              <Route index element={<Hero loading={loading} />} />
              <Route path="/:name" element={<Hero loading={loading} />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/Checkout" element={<Checkout />} />
              </Route>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CartContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

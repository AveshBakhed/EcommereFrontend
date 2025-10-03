import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Route, Routes } from "react-router-dom";
import { gettingData } from "./services/api";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";
import CartPage from "./pages/cartPage";
import Checkout from "./pages/checkout";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";

// const Hero = lazy(() => import("./componenets/Hero"));
// const CartPage = lazy(() => import("./pages/cartPage"));
// const Checkout = lazy(() => import("./pages/checkout"));
// const LoginPage = lazy(() => import("./pages/loginpage"));
// const SignupPage = lazy(() => import("./pages/signuppage"));

export default function App() {
  const [productData, setProductData] = useState([]);
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
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await gettingData();
        setProductData(data);
      } catch (error) {
        console.log("ERROR =", error);
      } finally {
        console.log("Success");
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />}>
          <Route
            index
            element={
              <Hero
                key={productData.id}
                productData={productData}
                getProductForCart={getProductForCart}
              />
            }
          />
          <Route
            path="/category/:name"
            element={
              <Hero
                productData={productData}
                getProductForCart={getProductForCart}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItemCart={removeItemCart}
              />
            }
          />
          <Route path="/Checkout" element={<Checkout cart={cart} />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </>
  );
}

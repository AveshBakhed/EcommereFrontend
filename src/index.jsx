import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { Loader as AppLoader } from "./App.jsx";
import Hero from "./componenets/Hero";
import CartPage from "./pages/cartPage";
import Checkout from "./pages/checkout";
import LoginPage from "./pages/loginpage";
import HomePage from "./pages/homepage";
import ProductPage from "./pages/Productpage";
import ProtectedRoute from "./componenets/protectedRoutes";
import NotFound from "./pages/404page";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route element={<App />} loader={AppLoader}>
      <Route path="/" element={<HomePage />}>
        <Route index element={<Hero />} />
        <Route path="/:name" element={<Hero />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/Checkout" element={<Checkout />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

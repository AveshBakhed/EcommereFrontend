import { Link, useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";

export default function Navbar({ cart }) {
  const [loggedIn, setLoggedIn] = useState(
    !!JSON.parse(localStorage.getItem("token"))
  );
  const navigate = useNavigate();

  // Check token on mount + listen for login/logout events
  useEffect(() => {
    const updateAuth = () => {
      const token = JSON.parse(localStorage.getItem("token"));
      setLoggedIn(!!token);
    };
    window.addEventListener("authChange", updateAuth);
    return () => window.removeEventListener("authChange", updateAuth);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange")); // 👈 notify logout too
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <header className="md:shadow-md sm:shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-semibold text-gray-800">
            Bakhed{" "}
            <span className="text-gray-400 font-semibold tracking-wide">
              Store
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/category/men"
              className="text-gray-600 hover:text-gray-700"
            >
              Men
            </Link>
            <Link
              to="/category/women"
              className="text-gray-600 hover:text-gray-700"
            >
              Women
            </Link>
            <Link
              to="/category/electronics"
              className="text-gray-600 hover:text-gray-700"
            >
              Electronics
            </Link>
            <Link
              to="/category/jewelery"
              className="text-gray-600 hover:text-gray-700"
            >
              Jewelery
            </Link>
          </nav>
          <div className="flex space-x-4">
            {loggedIn ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-lg bg-yellow-400 text-slate-900 font-medium hover:bg-yellow-300 transition"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-yellow-400 text-slate-900 font-medium hover:bg-yellow-300 transition"
              >
                Login
              </Link>
            )}

            <button className="relative px-4 py-2 font-medium">
              <Link to="/cart" className="text-xl">
                🛒
              </Link>
              <span className="absolute -top-1 right-1 bg-red-500 text-xs text-white px-1.5 py-0.5 rounded-full">
                {cart.length}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

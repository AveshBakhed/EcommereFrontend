import { Link } from "react-router-dom";

export default function Navbar({ cart }) {
  return (
    <header className=" md:shadow-md sm:shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-800 tracking-wide"
          >
            Bakhed{" "}
            <span className="text-2xl font-semibold text-gray-400 tracking-wide">
              Store
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/category/men"
              className="text-gray-600 hover:text-gray-700 transition"
            >
              Men
            </Link>
            <Link
              to="/category/women"
              className="text-gray-600 hover:text-gray-700 transition"
            >
              Women
            </Link>
            <Link
              to="/category/electronics"
              className="text-gray-600 hover:text-gray-700 transition"
            >
              Electronic
            </Link>
            <Link
              to="/category/jewelery"
              className="text-gray-600 hover:text-gray-700 transition"
            >
              Jewelery
            </Link>
          </nav>

          {/* Right Side Buttons */}
          <div className="flex space-x-4">
            <Link
              to="/Login"
              className="px-4 py-2  rounded-lg bg-yellow-400 text-slate-900 font-medium hover:bg-yellow-300 transition"
            >
              Login
            </Link>
            <button className="relative px-4 py-2  font-medium">
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

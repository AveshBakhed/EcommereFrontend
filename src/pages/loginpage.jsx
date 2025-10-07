import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

export default function LoginPage() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      email: data.email,
      password: data.password,
    };

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        toast.success("Login SucessFul!");
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        setTimeout(() => navigate("/Checkout"), 1000);

        window.dispatchEvent(new Event("authChange"));
      })
      .catch((err) => {
        toast.error("Invalid email or password");
        console.log("error ->", err);
      });
  }
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop
        theme="colored"
      />
      <div className="mx-5 w-full bg-white p-8 rounded-lg border border-gray-200 shadow-md sm:w-[500px]">
        {/* Go Back Button */}
        <Link to="/" className="text-sm text-gray-600 hover:text-gray-800 mb-6">
          ← Go Back
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-10">
          Login
        </h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-md font-medium text-gray-700">
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 mt-1 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          Don’t have an account?{" "}
          <Link className="text-blue-600 font-medium hover:underline cursor-pointer">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

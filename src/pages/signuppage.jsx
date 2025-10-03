import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
        {/* Go Back Button */}
        <Link
          to="/login"
          className="text-sm text-gray-600 hover:text-gray-800 mb-6"
        >
          ← Go Back
        </Link>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Sign Up
        </h1>

        {/* Signup Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Create Password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-gray-600 mt-6 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

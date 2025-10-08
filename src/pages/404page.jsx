import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-6xl font-bold text-gray-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-750 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
}

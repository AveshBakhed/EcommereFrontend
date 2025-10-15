import { Link } from "react-router-dom";
export default function ErrorElement({ error }) {
  const message =
    error?.message ||
    error?.statusText ||
    "Something went wrong while loading the page.";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-700 mb-2">Oops 😕</h1>
      <p className="text-gray-600 mb-4 font-mono">{message}</p>
      <p className="text-sm text-gray-400">
        Try refreshing or going back to the home page.
      </p>
      <Link to="/" className="text-gray-800 underline mt-20">
        ←HomePage
      </Link>
    </div>
  );
}

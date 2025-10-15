import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CartContext, ProductContext } from "../context/contextData";

export default function ProductPage() {
  const { productData } = useContext(ProductContext);
  const { getProductForCart } = useContext(CartContext);
  const params = useParams();
  const [product, setProduct] = useState(null);
  const location = useLocation();

  const backTo = location.state || "";

  useEffect(() => {
    if (productData.length > 0) {
      const prodData = productData.find(
        (item) => item.id === Number(params.id)
      );
      setProduct(prodData);
    }
  }, [params]);

  if (!product) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold">Loading...</p>
      </div>
    );
  }
  return (
    <main className="bg-white w-full  ">
      <div className="mx-auto max-w-5xl px-4 py-6 sm:mt-20">
        <div className="mb-5">
          <Link to={`/${backTo}`} className="text-2xl ">
            ←{" "}
          </Link>
        </div>
        {/* Core layout */}
        <section className="grid md:grid-cols-2 gap-6 ">
          {/* Left: Image */}
          <div className="rounded-md border border-gray-200 p-3">
            <div className="aspect-square w-full overflow-hidden rounded bg-gray-50">
              <img
                src={product.image}
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
                className="h-full w-full object-contain"
                loading="eager"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              {product.title}
            </h1>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <span className="capitalize">men&apos;s clothing</span>
              <span>•</span>
              <span>
                {" "}
                <span className="text-amber-500 font-semibold">★</span>{" "}
                {product.rating.rate.toFixed(2)}
              </span>
              <span className="text-gray-400">
                ({product.rating.count} reviews)
              </span>
            </div>

            <button
              onClick={() => {
                getProductForCart(product.title);
              }}
              className=" w-full outline-none mt-4 rounded-lg bg-black px-5 py-2 text-white font-medium hover:bg-gray-900 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-black/30"
            >
              Add to cart
            </button>

            <div className="mt-3 rounded-md border border-gray-200 bg-gray-50 p-3">
              <p className="text-xs text-gray-500">Price</p>
              <p className="text-2xl font-bold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-700">
              {product.description}
            </p>

            <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div className="rounded-md border border-gray-200 p-2">
                <dt className="text-xs text-gray-500">Ships</dt>
                <dd className="text-gray-800">2–5 business days</dd>
              </div>
              <div className="rounded-md border border-gray-200 p-2">
                <dt className="text-xs text-gray-500">Returns</dt>
                <dd className="text-gray-800">Free returns</dd>
              </div>
            </dl>

            <p className="mt-4 text-xs text-gray-500">
              Taxes included where applicable.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

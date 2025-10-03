import { useState } from "react";
import { Toaster } from "sonner";

export default function ProductCard({ product, getProductForCart }) {
  const [desc, setDesc] = useState(false);

  const descShort = product.description.slice(0, 90);

  return (
    <section>
      <div className="w-[320px]  mx-auto my-2 rounded-2xl border border-gray-200  shadow-md overflow-hidden">
        {/* Image */}
        <div className="bg-gray-50 flex justify-center">
          <img
            src={product.image}
            alt="Fjallraven Backpack"
            className="h-48 object-contain p-4"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-3">
          {/* Category & Price */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-700">
              {product.category}
            </span>
            <span className="text-lg font-semibold text-emerald-600">
              ${product.price}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-base font-semibold text-gray-700 line-clamp-2">
            {product.title}
          </h2>

          {/* Description */}
          <div>
            <p className="text-sm text-gray-600">
              {(desc ? product.description : descShort) + "...."}
            </p>
          </div>
          <span
            onClick={() => setDesc((prev) => !prev)}
            className="text-sm text-gray-800 cursor-pointer"
          >
            {desc ? "see less" : "see more"}
          </span>
          {/* Rating & Cart Button */}
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span className="text-amber-500 font-semibold">★</span>
              {product.rating.rate}
              <span className="text-gray-500 text-xs">
                ({product.rating.count} reviews)
              </span>
            </div>

            <button
              onClick={() => {
                getProductForCart(product.title);
              }}
              className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-300 text-gray-700 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white  active:bg-yellow-500 active:border-yellow-500 active:text-active  after:bg-yellow-500 ease-in-out duration-300 transition-all "
            >
              Add to cart
              <Toaster
                position="top-center"
                richColors
                duration={700}
                toastOptions={{
                  classNames: {
                    toast: "shadow-none bg-red-300 px-4 py-2",
                  },
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const descShort = product.description.slice(0, 90);

  return (
    <section>
      <Link to={`/product/${product.id}`}>
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
              <p className="text-sm text-gray-600">{descShort + "...."}</p>
            </div>
            <span className="text-sm text-gray-800 cursor-pointer">
              see more
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}

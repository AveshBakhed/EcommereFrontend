import { Link } from "react-router-dom";

export default function ProductCard({ product, param }) {
  return (
    <section>
      <Link to={`/product/${product.id}`} state={param}>
        <div className="mx-auto max-w-[300px]  my-2 rounded-2xl border border-gray-200  shadow-md overflow-hidden ">
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
            <h2 className="text-center font-semibold text-gray-700 line-clamp-2 ">
              {product.title}
            </h2>
          </div>
        </div>
      </Link>
    </section>
  );
}

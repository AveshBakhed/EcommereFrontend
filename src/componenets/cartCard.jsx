import { Toaster } from "sonner";

export default function CartCard({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItemCart,
}) {
  return (
    <div className="flex items-center justify-between p-4 border-t border-gray-300  bg-white">
      {/* Product Image */}
      <img
        decoding="async"
        loading="lazy"
        src={item.image}
        alt={item.title}
        className="w-16 h-16 object-contain rounded"
      />

      {/* Product Info */}
      <div className="flex-1 ml-7">
        <h2 className="text-medium font-semibold text-gray-800">
          {item.title}
        </h2>
        <p className="text-gray-600 text-sm ">${item.price}</p>
        {/* Quantity */}

        <div className="flex items-center gap-3 ">
          <span
            onClick={() => decreaseQuantity(item.title)}
            className="text-lg cursor-pointer"
          >
            -
          </span>
          <span className=" rounded text-sm text-gray-700 ">
            {item.quantity}
          </span>
          <span
            onClick={() => increaseQuantity(item.title)}
            className="text-lg cursor-pointer"
          >
            +
          </span>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItemCart(item.title)}
        className="ml-4 text-red-500 hover:text-red-700 text-sm"
      >
        Remove
        <Toaster
          position="bottom-center"
          richColors
          toastOptions={{
            classNames: {
              toast: "shadow-none border bg-white rounded-md px-4 py-2",
              title: "font-medium",
            },
          }}
        />
      </button>
    </div>
  );
}

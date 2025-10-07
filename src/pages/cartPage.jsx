import CartCard from "../componenets/cartCard";
import { Link } from "react-router-dom";
export default function CartPage({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItemCart,
}) {
  const cartElement = cart.map((item) => {
    return (
      <CartCard
        item={item}
        key={item.id}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItemCart={removeItemCart}
      />
    );
  });
  const total = cart.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );

  return (
    <section className="max-w-2xl mx-auto p-4 h-screen">
      {cart.length > 0 ? (
        <h1 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Cart (<span className="text-xl"> {`${cart.length} items`} </span>)
        </h1>
      ) : (
        <p className="text-xl font-medium mb-6 text-gray-500 text-center mt-30">
          No Items in the Cart
        </p>
      )}

      {cartElement}

      {cart.length > 0 ? (
        <div className="border-t pt-4 mt-6 flex justify-between items-center">
          <span className="text-lg font-semibold text-gray-800">
            Total: ${total.toFixed(2)}
          </span>
          <Link
            to="/Checkout"
            className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg font-semibold"
          >
            Proceed to Checkout
          </Link>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default function OrderSummary({ item }) {
  return (
    <li className="flex items-center gap-4">
      <div className="w-16 h-16 rounded-xl  overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt="Product image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{item.title}</p>
        <p className="text-xs text-gray-500">Black • Qty {item.quantity}</p>
      </div>
      <p className="text-sm font-semibold">${item.price * item.quantity}</p>
    </li>
  );
}

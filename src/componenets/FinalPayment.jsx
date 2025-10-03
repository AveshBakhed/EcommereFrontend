export default function FinalPayment({
  firstName,
  email,
  city,
  address,
  postalCode,
  phone,
  shipping,
  subTotal,
  taxRate,
  finalTotal,
  cart,
  handleFinalMsg,
}) {
  return (
    <>
      <div className="fixed h-screen w-screen inset-0 flex items-center justify-center bg-black/50 z-50">
        <div className="bg-white rounded-xl shadow-lg w-[360px] p-6 space-y-5 text-gray-800">
          {/* <!-- Heading --> */}
          <div className="w-full">
            <h2 className="text-xl font-semibold text-center">
              Payment Receipt
            </h2>
            <span
              onClick={handleFinalMsg}
              className="relative bottom-8 right-1 text-xl cursor-pointer"
            >
              ←
            </span>
          </div>

          {/* <!-- Customer Info --> */}
          <div className="space-y-1 text-sm">
            <p>
              <span className="font-medium">Name:</span> {firstName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {email}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {phone}
            </p>
            <p>
              <span className="font-medium">Address:</span> {address}
            </p>
            <p>
              <span className="font-medium">City:</span> {city}
            </p>
            <p>
              <span className="font-medium">Postal Code:</span> {postalCode}
            </p>
          </div>

          {/* <!-- Item List --> */}
          <div className="border-t pt-3">
            <h3 className="text-sm font-semibold mb-2">Items</h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              {cart.map((item) => {
                return (
                  <span>
                    {item.title} × {item.quantity} unit
                  </span>
                );
              })}
            </ul>
          </div>

          {/* <!-- Price Details --> */}
          <div className="border-t pt-3 space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%)</span>
              <span>${taxRate.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2 text-base">
              <span>Total</span>
              <span>${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* <!-- Payment Info --> */}
          <div className="bg-gray-50 p-3 rounded-lg text-sm text-left flex">
            <select className="w-full outline-0" name="option">
              <option disabled>Payment Method</option>
              <option value="">UPI</option>
              <option value="UPI">Credit Card</option>
              <option value="UPI">Debit Card</option>
              <option value="UPI">Bank Transfer</option>
            </select>
          </div>

          {/* <!-- Action Button --> */}
          <button className="w-full bg-gray-900 text-white py-2 rounded-lg font-medium hover:bg-gray-800">
            Confirm Payment
          </button>
          {/* <button className="w-full text-center">back </button> */}
        </div>
      </div>
    </>
  );
}

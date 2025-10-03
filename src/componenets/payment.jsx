export default function Payment() {
  return (
    <>
      {/* <!-- Payment --> */}
      <form className="bg-white rounded-2xl shadow-sm border p-6 space-y-6">
        <h2 className="text-lg font-semibold">Payment</h2>

        <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="pay"
              className="text-gray-900 focus:ring-gray-900/20"
            />
            <span className="text-sm font-medium">Card</span>
          </label>
          <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="pay"
              className="text-gray-900 focus:ring-gray-900/20"
            />
            <span className="text-sm font-medium">UPI</span>
          </label>
          <label className="flex items-center gap-3 p-3 border rounded-xl cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="pay"
              className="text-gray-900 focus:ring-gray-900/20"
            />
            <span className="text-sm font-medium">Cash on delivery</span>
          </label>
        </fieldset>

        {/* <!-- Card Details (static form, no logic) --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1" for="cardname">
              Name on card
            </label>
            <input
              id="cardname"
              type="text"
              placeholder="John Doe"
              className="w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900/20"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1" for="cardnum">
              Card number
            </label>
            <input
              id="cardnum"
              inputmode="numeric"
              placeholder="1234 5678 9012 3456"
              className="w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" for="exp">
              Expiry
            </label>
            <input
              id="exp"
              placeholder="MM/YY"
              className="w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900/20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" for="cvc">
              CVC
            </label>
            <input
              id="cvc"
              inputmode="numeric"
              placeholder="123"
              className="w-full rounded-xl border-gray-300 focus:border-gray-900 focus:ring-gray-900/20"
            />
          </div>
          <div className="md:col-span-2">
            <label className="inline-flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-gray-900 focus:ring-gray-900/20"
              />
              Billing address same as shipping
            </label>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a
            href="#"
            className="px-5 py-3 rounded-xl border text-gray-700 hover:bg-gray-50 text-center"
          >
            Back to cart
          </a>
          <button
            type="button"
            className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold w-full sm:w-auto"
          >
            Place order
          </button>
        </div>
        <p className="text-xs text-gray-500">
          By placing your order you agree to our Terms & Conditions and Privacy
          Policy.
        </p>
      </form>
    </>
  );
}

import OrderSummary from "../componenets/orderSummary";
import { useMemo, useState, useEffect, useContext } from "react"; // ← useMemo added
import FinalPayment from "../componenets/FinalPayment";
import { CartContext } from "../context/contextData";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [shipping, setShipping] = useState(19);

  // ❗ keep as strings (not numbers) to avoid losing leading zeros & for validation
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState(""); // ← string
  const [phone, setPhone] = useState(""); // ← string
  const [toggle, setToggle] = useState(false);

  const handleShipChange = (e) => setShipping(Number(e.target.value));
  const handleFinalMsg = () => setToggle((prev) => !prev);

  // Controlled handlers
  const funcEmail = (e) => setEmail(e.target.value);
  const funcFirstName = (e) => setFirstName(e.target.value);
  const funcAddress = (e) => setAddress(e.target.value);
  const funcCity = (e) => setCity(e.target.value);
  const funcPostalCode = (e) =>
    setPostalCode(e.target.value.replace(/\D/g, "")); // digits only
  const funcPhone = (e) => setPhone(e.target.value.replace(/[^\d+]/g, "")); // allow + and digits

  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  // 💡 totals memoized
  const subTotal = useMemo(
    () =>
      cart.reduce((acc, current) => acc + current.price * current.quantity, 0),
    [cart]
  );
  const taxRate = (subTotal + shipping) * 0.1;
  const finalTotal = subTotal + shipping + taxRate;

  // 🧪 simple validators
  const emailOk = useMemo(
    () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [email]
  );
  const postalOk = useMemo(
    () => /^\d{5,6}$/.test(postalCode.trim()),
    [postalCode]
  );
  const phoneOk = useMemo(() => /^\+?\d{7,15}$/.test(phone.trim()), [phone]);

  // ✅ all required fields present & valid
  const isFormValid = useMemo(() => {
    return (
      emailOk &&
      firstName.trim() !== "" &&
      address.trim() !== "" &&
      city.trim() !== "" &&
      postalOk &&
      phoneOk
    );
  }, [emailOk, firstName, address, city, postalOk, phoneOk]);

  // final gate: valid form + items in cart + valid shipping
  const canPay = isFormValid && cart.length > 0 && Number.isFinite(shipping);

  return (
    <>
      {/* Progress */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mb-3 md:mb-4 mb-5">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs grid place-content-center">
              1
            </span>
            Cart
          </li>
          <span className="text-gray-400">/</span>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs grid place-content-center">
              2
            </span>
            Information
          </li>
          <span className="text-gray-400">/</span>
          <li className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-gray-900 text-white text-xs grid place-content-center">
              3
            </span>
            Shipping
          </li>
        </ol>
      </div>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Forms */}
          <section className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <form className="bg-white rounded-2xl shadow-sm border border-gray-300 p-6 space-y-6">
              <h2 className="text-lg font-semibold">Contact information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 md:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    required
                    onChange={funcEmail}
                    value={email}
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="fname"
                    className="block text-sm font-medium mb-1"
                  >
                    First name
                  </label>
                  <input
                    onChange={funcFirstName}
                    value={firstName}
                    id="fname"
                    type="text"
                    placeholder="John"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lname"
                    className="block text-sm font-medium mb-1"
                  >
                    Last name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-gray-900 focus:ring-gray-900/20"
                    />
                    Email me news and offers
                  </label>
                </div>
              </div>
            </form>

            {/* Shipping Address */}
            <form className="bg-white rounded-2xl shadow-md border border-gray-300 p-6 space-y-6">
              <h2 className="text-lg font-semibold">Shipping address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium mb-1"
                  >
                    Country/Region
                  </label>
                  <select id="country" className="w-full rounded-xl outline-0">
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Japan</option>
                    <option>United Arab Emirates</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="address1"
                    className="block text-sm font-medium mb-1"
                  >
                    Address
                  </label>
                  <input
                    onChange={funcAddress}
                    value={address}
                    id="address1"
                    type="text"
                    placeholder="Street address"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="address2"
                    className="block text-sm font-medium mb-1 sr-only"
                  >
                    Apartment, suite, etc.
                  </label>
                  <input
                    id="address2"
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mb-1"
                  >
                    City
                  </label>
                  <input
                    onChange={funcCity}
                    value={city}
                    id="city"
                    type="text"
                    placeholder="Mumbai"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium mb-1"
                  >
                    State/Province
                  </label>
                  <input
                    id="state"
                    type="text"
                    placeholder="Maharashtra"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium mb-1"
                  >
                    Postal code
                  </label>
                  <input
                    onChange={funcPostalCode}
                    value={postalCode}
                    id="zip"
                    type="text"
                    inputMode="numeric"
                    placeholder="400102"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Phone
                  </label>
                  <input
                    onChange={funcPhone}
                    value={phone}
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="+91 98765 43210"
                    className="w-full rounded py-1 px-2 outline-1 outline-gray-200"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-gray-900 focus:ring-gray-900/20"
                    />
                    Save this address for next time
                  </label>
                </div>
              </div>
            </form>

            {/* Shipping Method */}
            <form className="bg-white rounded-2xl shadow-sm border p-6 space-y-4 border-gray-300">
              <h2 className="text-lg font-semibold">Shipping method</h2>
              <fieldset className="space-y-3">
                <label className="flex items-center justify-between p-4 border border-gray-300 rounded-xl hover:bg-gray-50 cursor-pointer">
                  <span className="flex items-center gap-3 ">
                    <input
                      onChange={handleShipChange}
                      defaultChecked
                      value={19}
                      type="radio"
                      name="ship"
                      className="mt-0.5 text-gray-900 focus:ring-gray-900/20"
                    />
                    <span className="text-sm">
                      <span className="font-medium">Standard</span>
                      <span className="block text-gray-500">
                        3–5 business days
                      </span>
                    </span>
                  </span>
                  <span className="text-sm font-semibold">$19</span>
                </label>

                <label className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 cursor-pointer border-gray-300">
                  <span className="flex items-center gap-3">
                    <input
                      onChange={handleShipChange}
                      value={59}
                      type="radio"
                      name="ship"
                      className="mt-0.5 text-gray-900 focus:ring-gray-900/20"
                    />
                    <span className="text-sm">
                      <span className="font-medium">Express</span>
                      <span className="block text-gray-500">
                        1–2 business days
                      </span>
                    </span>
                  </span>
                  <span className="text-sm font-semibold">$59</span>
                </label>

                <label className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50 cursor-pointer border-gray-300">
                  <span className="flex items-center gap-3">
                    <input
                      onChange={handleShipChange}
                      value={99}
                      type="radio"
                      name="ship"
                      className="mt-0.5 text-gray-900 focus:ring-gray-900/20"
                    />
                    <span className="text-sm">
                      <span className="font-medium">Next-day</span>
                      <span className="block text-gray-500">
                        Order before 4 PM
                      </span>
                    </span>
                  </span>
                  <span className="text-sm font-semibold">$99</span>
                </label>
              </fieldset>
            </form>
          </section>

          {/* Right: Order Summary */}
          <aside className="lg:col-span-1 space-y-6">
            <section className="bg-white rounded-2xl shadow-sm border p-6 border-gray-300">
              <h2 className="text-lg font-semibold mb-4">Order summary</h2>

              {/* Items */}
              <ul className="space-y-4">
                {cart.map((item) => (
                  <OrderSummary item={item} key={item.id} />
                ))}
              </ul>

              {/* Totals */}
              <dl className="mt-6 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium">${subTotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium">${shipping}</dd>
                </div>
                <div className="flex justify-between ">
                  <dt className="text-gray-600">Tax (10%)</dt>
                  <dd className="font-medium">${taxRate.toFixed(2)}</dd>
                </div>

                <div className="pt-2 border-t flex justify-between text-base items-center">
                  <dt className="font-semibold">Total</dt>

                  {/* 🔒 Pay disabled until form valid */}
                  <button
                    type="button"
                    onClick={() => canPay && handleFinalMsg()}
                    disabled={!canPay}
                    aria-disabled={!canPay}
                    className={`font-medium rounded-lg px-4 py-2 transition
                      ${
                        canPay
                          ? "bg-yellow-400 hover:bg-yellow-500 cursor-pointer"
                          : "bg-gray-300 cursor-not-allowed text-gray-600"
                      }`}
                    title={
                      !canPay
                        ? "Fill all required fields to continue"
                        : "Proceed to payment"
                    }
                  >
                    Pay ${finalTotal.toFixed(2)}
                  </button>
                </div>
              </dl>
            </section>

            {toggle ? (
              <FinalPayment
                email={email}
                firstName={firstName}
                city={city}
                postalCode={postalCode}
                address={address}
                shipping={shipping}
                phone={phone}
                subTotal={subTotal}
                taxRate={taxRate}
                finalTotal={finalTotal}
                cart={cart}
                handleFinalMsg={handleFinalMsg}
              />
            ) : null}

            {/* Trust / Security */}
            <section className="bg-white rounded-2xl shadow-sm border p-6 border-gray-300">
              <h3 className="text-sm font-semibold mb-3">Secure checkout</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  256-bit SSL encryption
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  PCI-DSS compliant processing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  30-day returns
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </main>
    </>
  );
}

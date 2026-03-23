import { useNavigate } from "react-router-dom"


const ShippingReturns = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-50">

    {/* HERO SECTION */} <section className="bg-white py-20"> <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"> <div> <h1 className="text-5xl font-bold mb-6"> Shipping, Delivery & Returns Policy </h1> <p className="text-lg text-gray-600 mb-6"> Deliver your products across India with reliable logistics and transparent return policies. </p> <div className="flex gap-4"> <input type="text" placeholder="Enter your mobile number" className="border p-3 rounded-lg w-64" /> <button onClick={() => navigate("/register")} className="bg-[#094b3d] text-white px-6 py-3 rounded-lg hover:bg-[#063c31]" > Start Selling </button> </div> </div> <div className="bg-[#094b3d]/10 p-10 rounded-3xl text-center"> <h2 className="text-3xl font-bold text-[#094b3d]"> Fast & Secure Shipping </h2> </div> </div> </section>
      
      {/* DELIVER ACROSS INDIA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Deliver Products Across India
            </h2>
            <p className="text-gray-600 text-lg">
              We ensure quick and hassle-free delivery across India.
              Our logistics partners handle pickup and doorstep delivery,
              so you can focus on growing your business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm grid grid-cols-3 text-center gap-6">
            <div>
              <p className="font-semibold">Cost Effective</p>
            </div>
            <div>
              <p className="font-semibold">Pan India Delivery</p>
            </div>
            <div>
              <p className="font-semibold">0% Commission</p>
            </div>
          </div>

        </div>
      </section>

      {/* HOW SHIPPING WORKS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            How to Ship Your Orders in 3 Simple Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">1. Accept Order</h3>
              <p className="text-gray-600">
                Log in to your seller dashboard and accept the order.
                Download and print the shipping label.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">2. Pack Product</h3>
              <p className="text-gray-600">
                Pack your product securely and attach the shipping label.
                Keep it ready for pickup.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-semibold text-lg mb-4">3. Handover</h3>
              <p className="text-gray-600">
                Our logistics partner will pick up the order and deliver
                it directly to the customer.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SHIPPING TIMELINE */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Shipping Timeline
          </h2>

          <p className="text-lg text-gray-600">
            Orders must be shipped within 2–3 days of receiving them.
            You can track shipment status and dispatch deadlines
            directly from your seller panel.
          </p>

        </div>
      </section>

      {/* RETURN POLICY */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Return Policy
            </h2>

            <ul className="space-y-4 text-gray-600">
              <li>• Customers can return products within 7 days of delivery.</li>
              <li>• Return shipping fees may apply depending on the product.</li>
              <li>• All returns can be tracked via your seller dashboard.</li>
              <li>• In some exceptional cases, return fees may be waived.</li>
            </ul>
          </div>

          <div className="bg-gray-100 p-10 rounded-3xl text-center">
            <p className="text-xl font-semibold text-[#094b3d]">
              Easy & Transparent Returns
            </p>
          </div>

        </div>
      </section>

      {/* CANCELLATION POLICY */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Cancellation Policy
            </h2>

            <p className="text-gray-600 text-lg">
              We do not charge any cancellation penalties. If delays occur due
              to unavoidable reasons, you can cancel without worrying about extra fees.
            </p>
          </div>

          <div className="bg-[#094b3d]/10 p-10 rounded-3xl text-center">
            <p className="text-xl font-semibold text-[#094b3d]">
              No Cancellation Penalty
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Start Selling at 0% Commission
          </h2>

          <button
            onClick={() => navigate("/register")}
            className="bg-[#094b3d] text-white px-8 py-4 rounded-lg hover:bg-[#063c31]"
          >
            Start Selling
          </button>
        </div>
      </section>

    </div>
  )
}

export default ShippingReturns

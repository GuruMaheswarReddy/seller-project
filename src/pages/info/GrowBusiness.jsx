import { useState } from "react"

const GrowBusiness = () => {
  const [active, setActive] = useState("advertise")

  const menuItems = [
    { id: "advertise", label: "Advertise Your Products" },
    { id: "recommendation", label: "Product Recommendation" },
    { id: "price", label: "Price Recommendation" },
    { id: "quality", label: "Quality Dashboard" },
    { id: "ndd", label: "Next Day Dispatch Program" }
  ]

  return (
    <div className="bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
          
          <div>
            <h1 className="text-4xl font-bold leading-tight">
              Grow Your Business with <span className="text-green-600">Arshith Supplier</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Sell your products online and reach thousands of customers 
              using our powerful supplier tools.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700">
                Start Selling
              </button>
              <button className="border border-green-600 text-green-600 px-6 py-3 rounded-xl">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="grow business"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

          {/* LEFT SIDEBAR */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow p-5 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl transition ${
                    active === item.id
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow p-8">

            {/* Advertise Section */}
            {active === "advertise" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Advertise Your Products
                </h2>
                <p className="text-gray-600 mb-6">
                  Promote your products by creating sponsored campaigns.
                  Reach the right customers and increase sales.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Feature title="Boost Visibility" />
                  <Feature title="Increase Sales" />
                  <Feature title="Track Performance" />
                  <Feature title="Control Budget" />
                </div>
              </>
            )}

            {/* Recommendation Section */}
            {active === "recommendation" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Product Recommendations
                </h2>

                <div className="space-y-4 text-gray-600">
                  <p>• Trending searches</p>
                  <p>• Top selling categories</p>
                  <p>• Suggested products based on demand</p>
                </div>

                <div className="mt-10 grid md:grid-cols-3 gap-6">
                  <Step number="1" text="Explore recommendations" />
                  <Step number="2" text="Accept & source products" />
                  <Step number="3" text="Upload & sell" />
                </div>
              </>
            )}

            {/* Price Section */}
            {active === "price" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Price Recommendation Tool
                </h2>
                <p className="text-gray-600">
                  Get smart pricing suggestions based on market data to stay
                  competitive and maximize profit.
                </p>
              </>
            )}

            {/* Quality Section */}
            {active === "quality" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Quality Dashboard
                </h2>
                <p className="text-gray-600">
                  Monitor customer feedback and reduce returns using quality insights.
                </p>
              </>
            )}

            {/* NDD Section */}
            {active === "ndd" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Next Day Dispatch Program
                </h2>

                <div className="space-y-4">
                  <Step number="1" text="Login to Supplier Panel" />
                  <Step number="2" text="Click on Support" />
                  <Step number="3" text="Select Orders & Delivery" />
                  <Step number="4" text="Choose NDD Option" />
                  <Step number="5" text="Raise Ticket" />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold">
          Sell Products Online at 0% Commission
        </h2>
        <p className="mt-4 text-gray-600">
          Join our platform and grow your business today.
        </p>

        <button className="mt-6 bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700">
          Start Selling
        </button>
      </section>
    </div>
  )
}

const Feature = ({ title }) => (
  <div className="border rounded-xl p-5 hover:shadow-md transition">
    <h4 className="font-semibold text-lg">{title}</h4>
    <p className="text-gray-500 mt-2 text-sm">
      Improve your business performance using this feature.
    </p>
  </div>
)

const Step = ({ number, text }) => (
  <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
    <div className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full font-bold">
      {number}
    </div>
    <p className="font-medium">{text}</p>
  </div>
)

export default GrowBusiness

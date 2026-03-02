import { useNavigate } from "react-router-dom"

const Pricing = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-gray-50">

      {/* HERO SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl font-bold mb-6">
              Pricing & Commission
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Arshith Fresh charges <span className="text-[#094b3d] font-semibold">0% Commission</span> across all categories.
              Keep 100% of your earnings on every sale.
            </p>

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="border p-3 rounded-lg w-64"
              />
              <button
                onClick={() => navigate("/register")}
                className="bg-[#094b3d] text-white px-6 py-3 rounded-lg hover:bg-[#063c31]"
              >
                Start Selling
              </button>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-7xl font-extrabold text-[#094b3d]">
              0%
            </h2>
            <p className="text-2xl font-semibold">Commission</p>
          </div>

        </div>
      </section>

      {/* BENEFITS CARDS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-4">
              No Registration Fee
            </h3>
            <p className="text-gray-600">
              Creating your seller account and listing products is completely free.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-4">
              No Collection Fee
            </h3>
            <p className="text-gray-600">
              Keep 100% of the sale price with no hidden charges.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
            <h3 className="text-xl font-semibold mb-4">
              No Penalty
            </h3>
            <p className="text-gray-600">
              Sell stress-free without worrying about cancellation penalties.
            </p>
          </div>

        </div>
      </section>

      {/* PAYMENT CYCLE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Payment Cycle
            </h2>
            <p className="text-gray-600 text-lg">
              Payments are securely deposited into your bank account within 7 days
              after order delivery. Track your payments easily from your seller dashboard.
            </p>
          </div>

          <div className="bg-gray-100 p-10 rounded-2xl text-center">
            <p className="text-2xl font-semibold text-[#094b3d]">
              7-Day Payment Cycle
            </p>
            <p className="mt-4 text-gray-600">
              Secured payment directly in your account.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Pricing

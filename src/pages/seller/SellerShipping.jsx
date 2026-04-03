import { useState } from "react"

const PRIMARY = "#094b3d"

const SellerShipping = () => {
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!phone) {
      alert("Please enter phone number")
      return
    }

    alert("Shipping setup saved!")
    console.log("Phone:", phone)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef5f3]">

      {/* Card */}
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Shipping Setup
        </h2>

        <p className="text-gray-500 mb-6">
          Enter your contact number to configure shipping.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Phone Input */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <span className="px-3 bg-gray-100 text-gray-600">+91</span>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 p-3 outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full p-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            Continue
          </button>

        </form>

        {/* Bottom Text */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          By continuing, you agree to terms & conditions.
        </p>

      </div>

    </div>
  )
}

export default SellerShipping

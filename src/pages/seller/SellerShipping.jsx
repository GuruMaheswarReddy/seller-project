import { useState } from "react"
import rocketImg from "../../assets/arshithrocketimage.png"

const PRIMARY = "#094b3d"

const SellerShipping = () => {
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!phone) {
      alert("Please enter phone number")
      return
    }

    // Redirect to Shiprocket
    window.open("https://app.shiprocket.in/newlogin", "_blank")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eef5f3] p-6">

      {/* Container */}
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden max-w-5xl w-full">

        {/* LEFT SIDE IMAGE */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#eef5f3] to-white flex items-center justify-center p-6">
          <img
            src={rocketImg}
            alt="Shipping Illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="md:w-1/2 p-8">

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Shipping Setup
          </h2>

          <p className="text-gray-500 mb-6">
            Enter your contact number to configure shipping.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Phone Input */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <span className="px-3 bg-gray-100 text-gray-600">+91</span>

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 p-3 outline-none text-black"
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

          <p className="text-xs text-gray-400 mt-4 text-center">
            By continuing, you agree to terms & conditions.
          </p>

        </div>
      </div>

    </div>
  )
}

export default SellerShipping

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext.jsx"

const PRIMARY = "#094b3d"

const Register = () => {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    role: "seller",
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const result = await register(form)
    setLoading(false)

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate("/login", { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f2ef] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold" style={{ color: PRIMARY }}>
            Create Your Account
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Join Arshith Supplier Panel
          </p>
        </div>

        {error && (
          <div className="mb-4 bg-red-100 text-red-600 text-sm px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Role */}
          <div>
            <label className="text-sm text-gray-600">Register As</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
            >
              <option value="seller">Seller</option>
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="Create password"
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
            />
          </div>

          {/* Address */}
          <div>
            <label className="text-sm text-gray-600">Address</label>
            <textarea
              name="address"
              rows={2}
              value={form.address}
              onChange={handleChange}
              placeholder="Business address"
              className="mt-1 w-full resize-none border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white py-2.5 rounded-lg font-medium transition"
            style={{ backgroundColor: PRIMARY }}
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-medium hover:underline"
            style={{ color: PRIMARY }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register

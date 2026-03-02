import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext.jsx"

const PRIMARY = "#094b3d"

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: "", password: "" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    const result = await login(form.email, form.password)
    setLoading(false)

    if (!result.success) {
      setError(result.message)
      return
    }

    const role = result.user.role
    if (role === "admin") navigate("/admin", { replace: true })
    else if (role === "seller") navigate("/seller", { replace: true })
    else navigate("/", { replace: true })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f2ef] px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold" style={{ color: PRIMARY }}>
            Arshith Supplier
          </h1>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Login to your supplier panel
        </h2>

        {error && (
          <div className="mb-4 bg-red-100 text-red-600 text-sm px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">
              Email or mobile number
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: PRIMARY }}
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:border-transparent"
                placeholder="Enter password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm"
                style={{ color: PRIMARY }}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="text-right mt-2">
              <button
                type="button"
                className="text-sm hover:underline"
                style={{ color: PRIMARY }}
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white py-2.5 rounded-lg font-medium transition disabled:opacity-60"
            style={{ backgroundColor: PRIMARY }}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-sm text-gray-500">New to Arshith?</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Register */}
        <button
          onClick={() => navigate("/register")}
          className="w-full border py-2.5 rounded-lg font-medium transition"
          style={{
            borderColor: PRIMARY,
            color: PRIMARY
          }}
        >
          Create your supplier account
        </button>

      </div>
    </div>
  )
}

export default Login

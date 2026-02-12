import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const Register = () => {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    role: 'seller',
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await register(form)
    setLoading(false)
    if (!result.success) {
      setError(result.message)
      return
    }
    navigate('/login', { replace: true })
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 rounded-3xl border border-yellow-500/20 bg-black/60 px-6 py-8 shadow-2xl shadow-black/70 backdrop-blur-2xl">
      <div>
        <h1 className="text-xl font-semibold text-white">Create your account</h1>
        <p className="mt-1 text-xs text-gray-400">
          Register as an admin or a seller. All data is stored locally in your
          browser for this mock SaaS environment.
        </p>
      </div>
      {error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-300">Role</label>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-2 text-sm text-gray-100 outline-none ring-yellow-500/40 focus:border-yellow-400 focus:ring-1"
          >
            <option value="admin">Admin</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-300">Name</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-2 text-sm text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-2 text-sm text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
            placeholder="you@company.com"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-2 text-sm text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
              placeholder="+1 555 000 0000"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-2 text-sm text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
              placeholder="••••••••"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-300">Address</label>
          <textarea
            name="address"
            rows={2}
            value={form.address}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-2 text-sm text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
            placeholder="Where is your operation based?"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-2 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-yellow-500/50 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Creating account…' : 'Register'}
        </button>
      </form>
    </div>
  )
}

export default Register



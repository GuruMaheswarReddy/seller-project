import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    const result = await login(form.email, form.password)
    setLoading(false)

    if (!result.success) {
      setError(result.message)
      return
    }

    const role = result.user.role
    if (role === 'admin') navigate('/admin', { replace: true })
    else if (role === 'seller') navigate('/seller', { replace: true })
    else navigate('/', { replace: true })
  }

  const quickFill = (type) => {
    if (type === 'admin') {
      setForm({ email: 'admin@blackcart.com', password: 'admin123' })
    } else {
      setForm({ email: 'seller@blackcart.com', password: 'seller123' })
    }
  }

  return (
    <div className="mx-auto flex max-w-md flex-col gap-6 rounded-3xl border border-yellow-500/20 bg-black/60 px-6 py-8 shadow-2xl shadow-black/70 backdrop-blur-2xl">
      <div>
        <h1 className="text-xl font-semibold text-white">Login to BlackCart</h1>
        <p className="mt-1 text-xs text-gray-400">
          Use the seeded admin or seller credentials, or log in with a newly
          registered account.
        </p>
      </div>
      {error && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-xs text-red-200">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-yellow-500/50 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Authenticating…' : 'Login'}
        </button>
      </form>

      <div className="space-y-2 rounded-2xl bg-zinc-950/70 px-3 py-3 text-[11px] text-gray-300">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400">
          Quick demo access
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => quickFill('admin')}
            className="rounded-full border border-yellow-500/30 bg-black/60 px-3 py-1 text-[11px] font-medium text-yellow-200 transition hover:border-yellow-400 hover:text-yellow-300"
          >
            Fill Admin credentials
          </button>
          <button
            type="button"
            onClick={() => quickFill('seller')}
            className="rounded-full border border-yellow-500/30 bg-black/60 px-3 py-1 text-[11px] font-medium text-yellow-200 transition hover:border-yellow-400 hover:text-yellow-300"
          >
            Fill Seller credentials
          </button>
        </div>
        <div className="mt-2 text-[10px] text-gray-500">
          Admin: <span className="text-yellow-200">admin@blackcart.com</span> /
          <span className="text-yellow-200"> admin123</span> &nbsp;|&nbsp; Seller:{' '}
          <span className="text-yellow-200">seller@blackcart.com</span> /
          <span className="text-yellow-200"> seller123</span>
        </div>
      </div>
    </div>
  )
}

export default Login



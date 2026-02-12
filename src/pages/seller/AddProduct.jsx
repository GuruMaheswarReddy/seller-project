import { useState } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import { useAppContext } from '../../context/AppContext.jsx'

const emptyForm = {
  name: '',
  price: '',
  description: '',
  imageUrl: '',
}

const AddProduct = () => {
  const { user } = useAuth()
  const { createProduct } = useAppContext()
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user) return
    const priceNumber = Number(form.price || 0)
    createProduct({
      name: form.name,
      price: priceNumber,
      description: form.description,
      imageUrl:
        form.imageUrl ||
        'https://images.pexels.com/photos/3730760/pexels-photo-3730760.jpeg?auto=compress&cs=tinysrgb&w=800',
      sellerId: user.id,
    })
    setForm(emptyForm)
    setMessage('Product created and added to your catalog.')
    setTimeout(() => setMessage(''), 2500)
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Add Product</h2>
        <p className="text-xs text-gray-400">
          Create a new product and associate it with your seller profile. Products
          are immediately available in the catalog and admin view.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-3 rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/70"
      >
        {message && (
          <div className="mb-1 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-[11px] text-emerald-200">
            {message}
          </div>
        )}
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-300">Product name</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
            placeholder="AI Commerce Suite"
          />
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Price (USD)</label>
            <input
              name="price"
              type="number"
              min="0"
              step="1"
              required
              value={form.price}
              onChange={handleChange}
              className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
              placeholder="199"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Image URL</label>
            <input
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
              placeholder="https://images…"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-300">Description</label>
          <textarea
            name="description"
            rows={3}
            value={form.description}
            onChange={handleChange}
            className="w-full resize-none rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
            placeholder="What does this product unlock for your merchants?"
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-yellow-500/40 transition hover:-translate-y-0.5"
        >
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct



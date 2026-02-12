import { useMemo, useState } from 'react'
import { useAppContext } from '../../context/AppContext.jsx'

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  address: '',
  password: '',
}

const ManageSellers = () => {
  const { users, createSeller, updateSeller, deleteSeller } = useAppContext()
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)

  const sellers = useMemo(
    () => users.filter((u) => u.role === 'seller'),
    [users],
  )

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      updateSeller(editingId, form)
    } else {
      createSeller(form)
    }
    setForm(emptyForm)
    setEditingId(null)
  }

  const startEdit = (seller) => {
    setEditingId(seller.id)
    setForm({
      name: seller.name || '',
      email: seller.email || '',
      phone: seller.phone || '',
      address: seller.address || '',
      password: seller.password || '',
    })
  }

  const handleDelete = (id) => {
    if (window.confirm('Delete this seller?')) {
      deleteSeller(id)
      if (editingId === id) {
        setEditingId(null)
        setForm(emptyForm)
      }
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Manage Sellers</h2>
        <p className="text-xs text-gray-400">
          Onboard, update and remove seller accounts in your tenant.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)]">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-3 rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/70"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">
              {editingId ? 'Update seller' : 'Create seller'}
            </h3>
            {editingId && (
              <button
                type="button"
                onClick={() => {
                  setEditingId(null)
                  setForm(emptyForm)
                }}
                className="text-[11px] text-gray-400 underline-offset-2 hover:text-yellow-300 hover:underline"
              >
                Cancel edit
              </button>
            )}
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-gray-300">Name</label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
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
              className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
            />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-medium text-gray-300">Phone</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
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
                className="w-full rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
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
              className="w-full resize-none rounded-xl border border-yellow-500/30 bg-black/60 px-3 py-1.5 text-xs text-gray-100 outline-none ring-yellow-500/40 placeholder:text-gray-500 focus:border-yellow-400 focus:ring-1"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 text-xs font-semibold text-black shadow-lg shadow-yellow-500/40 transition hover:-translate-y-0.5"
          >
            {editingId ? 'Update Seller' : 'Add Seller'}
          </button>
        </form>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-950/80 shadow-lg shadow-black/70">
          <div className="border-b border-yellow-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            Sellers
          </div>
          <div className="max-h-[380px] overflow-auto text-xs">
            <table className="min-w-full border-separate border-spacing-y-1 px-3">
              <thead className="sticky top-0 bg-zinc-950/95 text-[11px] uppercase tracking-wide text-gray-400">
                <tr>
                  <th className="px-2 py-2 text-left">Name</th>
                  <th className="px-2 py-2 text-left">Email</th>
                  <th className="px-2 py-2 text-left">Phone</th>
                  <th className="px-2 py-2 text-left">Address</th>
                  <th className="px-2 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sellers.map((seller) => (
                  <tr
                    key={seller.id}
                    className="rounded-xl bg-black/60 text-[11px] text-gray-200 shadow-sm shadow-black/70"
                  >
                    <td className="max-w-[120px] truncate px-2 py-2">
                      {seller.name}
                    </td>
                    <td className="max-w-[160px] truncate px-2 py-2">
                      {seller.email}
                    </td>
                    <td className="px-2 py-2">{seller.phone}</td>
                    <td className="max-w-[160px] truncate px-2 py-2">
                      {seller.address}
                    </td>
                    <td className="px-2 py-2 text-right">
                      <button
                        type="button"
                        onClick={() => startEdit(seller)}
                        className="mr-2 rounded-full border border-yellow-500/40 px-2 py-0.5 text-[10px] font-medium text-yellow-200 transition hover:border-yellow-400 hover:bg-yellow-500/10"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(seller.id)}
                        className="rounded-full border border-red-500/40 px-2 py-0.5 text-[10px] font-medium text-red-200 transition hover:border-red-400 hover:bg-red-500/10"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {sellers.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-2 py-4 text-center text-[11px] text-gray-500"
                    >
                      No sellers yet. Use the form on the left to add one.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageSellers



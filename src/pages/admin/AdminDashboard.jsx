import { useAppContext } from '../../context/AppContext.jsx'

const AdminDashboard = () => {
  const { users, products, orders } = useAppContext()

  const totalSellers = users.filter((u) => u.role === 'seller').length
  const totalAdmins = users.filter((u) => u.role === 'admin').length
  const totalRevenue = orders.reduce((sum, o) => sum + (o.price || 0), 0)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">Overview</h2>
        <p className="text-xs text-gray-400">
          Snapshot of your BlackCart tenant across sellers, orders and revenue.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Sellers
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">{totalSellers}</p>
          <p className="mt-1 text-[11px] text-gray-500">
            Active seller accounts in this tenant.
          </p>
        </div>
        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Admins
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">{totalAdmins}</p>
          <p className="mt-1 text-[11px] text-gray-500">
            Tenant level administrators with full access.
          </p>
        </div>
        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Products
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {products.length}
          </p>
          <p className="mt-1 text-[11px] text-gray-500">
            Total SKU&apos;s exposed to your storefronts.
          </p>
        </div>
        <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500 to-yellow-600 px-4 py-4 text-black shadow-xl shadow-yellow-500/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-black/80">
            Gross revenue (all time)
          </p>
          <p className="mt-2 text-2xl font-semibold">${totalRevenue.toFixed(0)}</p>
          <p className="mt-1 text-[11px] text-black/80">
            Combined order value across all sellers.
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/70 px-4 py-4 text-xs text-gray-300 shadow-lg shadow-black/70">
        <p className="font-semibold text-yellow-200">How to use this mock admin:</p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          <li>Use &quot;Manage Sellers&quot; to CRUD seller accounts.</li>
          <li>Use &quot;Orders&quot; to see orders created by sellers only.</li>
          <li>
            Use &quot;All Orders&quot; for a complete view of the order stream.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminDashboard



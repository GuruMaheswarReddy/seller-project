import { useAppContext } from '../../context/AppContext.jsx'

const AdminDashboard = () => {
  const { users, products, orders } = useAppContext()

  const sellers = users.filter((u) => u.role === 'seller')

  const totalSellers = sellers.length
  const totalAdmins = users.filter((u) => u.role === 'admin').length
  const totalRevenue = orders.reduce((sum, o) => sum + (o.price || 0), 0)

  return (
    <div className="space-y-6">

      {/* Overview */}
      <div>
        <h2 className="text-xl font-semibold text-white">Overview</h2>
        <p className="text-xs text-gray-400">
          Snapshot of your BlackCart tenant across sellers, orders and revenue.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">

        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Sellers
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {totalSellers}
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Admins
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {totalAdmins}
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Products
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {products.length}
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500 to-yellow-600 px-4 py-4 text-black shadow-xl shadow-yellow-500/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-black/80">
            Gross Revenue
          </p>
          <p className="mt-2 text-2xl font-semibold">
            ${totalRevenue.toFixed(0)}
          </p>
        </div>

      </div>

      {/* Registered Sellers Table */}
      <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 shadow-lg shadow-black/70">

        <div className="px-4 py-3 border-b border-yellow-500/20">
          <h3 className="text-sm font-semibold text-yellow-300">
            Registered Sellers
          </h3>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-xs text-gray-300">

            <thead className="bg-zinc-900 text-gray-400 uppercase">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-left">Phone</th>
                <th className="px-4 py-3 text-left">Created Date</th>
              </tr>
            </thead>

            <tbody>

              {sellers.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-4 py-6 text-center text-gray-500">
                    No sellers registered yet
                  </td>
                </tr>
              ) : (
                sellers.map((seller) => (
                  <tr
                    key={seller.id}
                    className="border-t border-yellow-500/10 hover:bg-zinc-900"
                  >
                    <td className="px-4 py-3 text-white font-medium">
                      {seller.name}
                    </td>

                    <td className="px-4 py-3">
                      {seller.email}
                    </td>

                    <td className="px-4 py-3">
                      {seller.phone}
                    </td>

                    <td className="px-4 py-3">
                      {seller.createdAt
                        ? new Date(seller.createdAt).toLocaleString()
                        : "-"}
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* Info Box */}
      <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/70 px-4 py-4 text-xs text-gray-300 shadow-lg shadow-black/70">
        <p className="font-semibold text-yellow-200">How to use this admin:</p>
        <ul className="mt-2 list-disc space-y-1 pl-4">
          <li>Register sellers from the Register page.</li>
          <li>New sellers will appear in this dashboard.</li>
          <li>Manage sellers and orders from the admin panel.</li>
        </ul>
      </div>

    </div>
  )
}

export default AdminDashboard

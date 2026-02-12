import { useAppContext } from '../../context/AppContext.jsx'
import { useMemo } from 'react'

const AdminOrders = () => {
  const { orders, users } = useAppContext()

  // Only orders created by sellers
  const sellerOrders = useMemo(
    () => orders.filter((o) => o.createdByRole === 'seller'),
    [orders],
  )

  const formatDate = (value) => {
    try {
      return new Date(value).toLocaleDateString(undefined, {
        month: 'short',
        day: 'numeric',
      })
    } catch {
      return value
    }
  }

  const rows = sellerOrders.map((order) => {
    const seller = users.find((u) => u.id === order.sellerId)
    return {
      ...order,
      sellerName: seller?.name ?? 'Unknown seller',
    }
  })

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Seller Orders</h2>
        <p className="text-xs text-gray-400">
          Orders created by sellers, filtered from the global order stream.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-950/80 shadow-lg shadow-black/70">
        <div className="border-b border-yellow-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
          Orders created by sellers
        </div>
        <div className="max-h-[420px] overflow-auto text-xs">
          <table className="min-w-full border-separate border-spacing-y-1 px-3">
            <thead className="sticky top-0 bg-zinc-950/95 text-[11px] uppercase tracking-wide text-gray-400">
              <tr>
                <th className="px-2 py-2 text-left">Order ID</th>
                <th className="px-2 py-2 text-left">Seller Name</th>
                <th className="px-2 py-2 text-left">Product</th>
                <th className="px-2 py-2 text-left">Price</th>
                <th className="px-2 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((order) => (
                <tr
                  key={order.id}
                  className="rounded-xl bg-black/60 text-[11px] text-gray-200 shadow-sm shadow-black/70"
                >
                  <td className="px-2 py-2 font-mono text-[10px] text-gray-400">
                    {order.id}
                  </td>
                  <td className="px-2 py-2">{order.sellerName}</td>
                  <td className="px-2 py-2">{order.productName}</td>
                  <td className="px-2 py-2 font-semibold text-yellow-300">
                    ${order.price}
                  </td>
                  <td className="px-2 py-2">{formatDate(order.createdAt)}</td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-2 py-4 text-center text-[11px] text-gray-500"
                  >
                    No seller orders yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminOrders



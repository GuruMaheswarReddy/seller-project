import { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import { useAppContext } from '../../context/AppContext.jsx'

const SellerOrders = () => {
  const { user } = useAuth()
  const { orders } = useAppContext()

  const myOrders = useMemo(
    () => orders.filter((o) => o.sellerId === user?.id),
    [orders, user],
  )

  const formatDate = (value) => {
    try {
      return new Date(value).toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch {
      return value
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Your Orders</h2>
        <p className="text-xs text-gray-400">
          Orders for products that are attributed to you as the seller.
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-950/80 shadow-lg shadow-black/70">
        <div className="border-b border-yellow-500/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
          Orders
        </div>
        <div className="max-h-[420px] overflow-auto text-xs">
          <table className="min-w-full border-separate border-spacing-y-1 px-3">
            <thead className="sticky top-0 bg-zinc-950/95 text-[11px] uppercase tracking-wide text-gray-400">
              <tr>
                <th className="px-2 py-2 text-left">Order ID</th>
                <th className="px-2 py-2 text-left">Product</th>
                <th className="px-2 py-2 text-left">Price</th>
                <th className="px-2 py-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order) => (
                <tr
                  key={order.id}
                  className="rounded-xl bg-black/60 text-[11px] text-gray-200 shadow-sm shadow-black/70"
                >
                  <td className="px-2 py-2 font-mono text-[10px] text-gray-400">
                    {order.id}
                  </td>
                  <td className="px-2 py-2">{order.productName}</td>
                  <td className="px-2 py-2 font-semibold text-yellow-300">
                    ${order.price}
                  </td>
                  <td className="px-2 py-2">{formatDate(order.createdAt)}</td>
                </tr>
              ))}
              {myOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-2 py-4 text-center text-[11px] text-gray-500"
                  >
                    No orders yet. Once customers start purchasing your products,
                    they will appear here.
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

export default SellerOrders



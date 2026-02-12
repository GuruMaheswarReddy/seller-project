import { useMemo } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import { useAppContext } from '../../context/AppContext.jsx'

const SellerDashboard = () => {
  const { user } = useAuth()
  const { products, orders } = useAppContext()

  const myProducts = useMemo(
    () => products.filter((p) => p.sellerId === user?.id),
    [products, user],
  )

  const myOrders = useMemo(
    () => orders.filter((o) => o.sellerId === user?.id),
    [orders, user],
  )

  const weeklyRevenue = useMemo(() => {
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
    return myOrders
      .filter((o) => new Date(o.createdAt).getTime() >= oneWeekAgo)
      .reduce((sum, o) => sum + (o.price || 0), 0)
  }, [myOrders])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Welcome back, {user?.name}
        </h2>
        <p className="text-xs text-gray-400">
          High-level view of your catalog performance and order flow.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Total Products
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {myProducts.length}
          </p>
          <p className="mt-1 text-[11px] text-gray-500">
            Items you are currently selling across storefronts.
          </p>
        </div>
        <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950/80 px-4 py-4 shadow-lg shadow-black/60">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
            Total Orders
          </p>
          <p className="mt-2 text-2xl font-semibold text-white">
            {myOrders.length}
          </p>
          <p className="mt-1 text-[11px] text-gray-500">
            Orders attributed to your products.
          </p>
        </div>
        <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-4 text-black shadow-xl shadow-yellow-500/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-black/80">
            Weekly Revenue
          </p>
          <p className="mt-2 text-2xl font-semibold">
            ${weeklyRevenue.toFixed(0)}
          </p>
          <p className="mt-1 text-[11px] text-black/80">
            Revenue from the last 7 days of orders.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard



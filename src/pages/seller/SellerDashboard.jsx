import { useMemo } from "react"
import { useAuth } from "../../context/AuthContext.jsx"
import { useAppContext } from "../../context/AppContext.jsx"

const PRIMARY = "#094b3d"

const SellerDashboard = () => {
  const { user } = useAuth()
  const { products, orders } = useAppContext()

  const myProducts = useMemo(
    () => products.filter((p) => p.sellerId === user?.id),
    [products, user]
  )

  const myOrders = useMemo(
    () => orders.filter((o) => o.sellerId === user?.id),
    [orders, user]
  )

  const weeklyRevenue = useMemo(() => {
    const oneWeekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
    return myOrders
      .filter((o) => new Date(o.createdAt).getTime() >= oneWeekAgo)
      .reduce((sum, o) => sum + (o.price || 0), 0)
  }, [myOrders])

  return (
    <div className="min-h-screen bg-[#eef5f3] p-8">

      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Welcome back, {user?.name}
        </h2>
        <p className="text-gray-500 mt-2">
          Monitor your store performance and manage operations easily.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid gap-8 md:grid-cols-3">

        {/* Products Card */}
        <div className="bg-white rounded-3xl shadow-md p-6 border-t-4"
             style={{ borderColor: PRIMARY }}>
          <p className="text-gray-500 text-sm">Total Products</p>
          <h3 className="mt-4 text-4xl font-bold text-gray-800">
            {myProducts.length}
          </h3>
          <p className="mt-3 text-xs text-gray-400">
            Active products listed in your catalog.
          </p>
        </div>

        {/* Orders Card */}
        <div className="bg-white rounded-3xl shadow-md p-6 border-t-4"
             style={{ borderColor: PRIMARY }}>
          <p className="text-gray-500 text-sm">Total Orders</p>
          <h3 className="mt-4 text-4xl font-bold text-gray-800">
            {myOrders.length}
          </h3>
          <p className="mt-3 text-xs text-gray-400">
            Orders received from customers.
          </p>
        </div>

        {/* Revenue Card */}
        <div
          className="rounded-3xl shadow-xl p-6 text-white"
          style={{ backgroundColor: PRIMARY }}
        >
          <p className="text-sm opacity-80">Weekly Revenue</p>
          <h3 className="mt-4 text-4xl font-bold">
            ₹{weeklyRevenue.toFixed(0)}
          </h3>
          <p className="mt-3 text-xs opacity-80">
            Earnings generated in the last 7 days.
          </p>
        </div>

      </div>

      {/* Extra Professional Section */}
      <div className="mt-12 bg-white rounded-3xl shadow-md p-8">
        <h4 className="text-xl font-semibold mb-6 text-gray-800">
          Seller Insights
        </h4>

        <div className="grid md:grid-cols-2 gap-6 text-gray-600">
          <div className="flex items-start gap-3">
            <div className="w-3 h-3 mt-2 rounded-full"
                 style={{ backgroundColor: PRIMARY }} />
            Maintain inventory to avoid stock issues.
          </div>

          <div className="flex items-start gap-3">
            <div className="w-3 h-3 mt-2 rounded-full"
                 style={{ backgroundColor: PRIMARY }} />
            Faster dispatch improves customer satisfaction.
          </div>

          <div className="flex items-start gap-3">
            <div className="w-3 h-3 mt-2 rounded-full"
                 style={{ backgroundColor: PRIMARY }} />
            Monitor quality to reduce return rate.
          </div>

          <div className="flex items-start gap-3">
            <div className="w-3 h-3 mt-2 rounded-full"
                 style={{ backgroundColor: PRIMARY }} />
            Track weekly revenue growth consistently.
          </div>
        </div>
      </div>

    </div>
  )
}

export default SellerDashboard

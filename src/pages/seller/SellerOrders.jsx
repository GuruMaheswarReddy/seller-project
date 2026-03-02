import { useMemo } from "react"
import { useAuth } from "../../context/AuthContext.jsx"
import { useAppContext } from "../../context/AppContext.jsx"

const PRIMARY = "#094b3d"

const SellerOrders = () => {
  const { user } = useAuth()
  const { orders } = useAppContext()

  const myOrders = useMemo(
    () => orders.filter((o) => o.sellerId === user?.id),
    [orders, user]
  )

  const formatDate = (value) => {
    try {
      return new Date(value).toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    } catch {
      return value
    }
  }

  return (
    <div className="min-h-screen bg-[#eef5f3] p-8">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Your Orders
        </h2>
        <p className="text-gray-500 mt-1 text-sm">
          Manage and track all customer orders here.
        </p>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-3xl shadow-md overflow-hidden">

        {/* Top Bar */}
        <div
          className="px-6 py-4 text-white font-semibold"
          style={{ backgroundColor: PRIMARY }}
        >
          Orders List
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">

            {/* Table Header */}
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs tracking-wide">
              <tr>
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Date</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-100">
              {myOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-mono text-xs text-gray-500">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {order.productName}
                  </td>
                  <td
                    className="px-6 py-4 font-semibold"
                    style={{ color: PRIMARY }}
                  >
                    ₹{order.price}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {formatDate(order.createdAt)}
                  </td>
                </tr>
              ))}

              {myOrders.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-gray-400"
                  >
                    No orders yet. Once customers purchase your products,
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

import { useAppContext } from "../../context/AppContext.jsx"
import { useMemo } from "react"

const PRIMARY = "#094b3d"

const AdminOrders = () => {
  const { orders, users } = useAppContext()

  // Only seller created orders
  const sellerOrders = useMemo(
    () => orders.filter((o) => o.createdByRole === "seller"),
    [orders]
  )

  const formatDate = (value) => {
    try {
      return new Date(value).toLocaleDateString("en-IN", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    } catch {
      return value
    }
  }

  // Format price as Indian Rupees
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount || 0)
  }

  const rows = sellerOrders.map((order) => {
    const seller = users.find((u) => u.id === order.sellerId)

    return {
      ...order,
      sellerName: seller?.name ?? "Unknown seller",
    }
  })

  return (
    <div className="p-6 space-y-6 bg-[#f4f7f6] min-h-screen">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Seller Orders
        </h2>
        <p className="text-sm text-gray-500">
          Orders created by sellers across the platform.
        </p>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold" style={{ color: PRIMARY }}>
            Seller Orders List
          </h3>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Seller Name</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Date</th>
              </tr>
            </thead>

            <tbody>

              {rows.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-400">
                    No seller orders yet
                  </td>
                </tr>
              ) : (
                rows.map((order) => (
                  <tr
                    key={order.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="px-6 py-3 font-mono text-gray-500">
                      {order.id}
                    </td>

                    <td className="px-6 py-3 font-medium text-gray-800">
                      {order.sellerName}
                    </td>

                    <td className="px-6 py-3 text-gray-600">
                      {order.productName}
                    </td>

                    <td
                      className="px-6 py-3 font-semibold"
                      style={{ color: PRIMARY }}
                    >
                      {formatCurrency(order.price)}
                    </td>

                    <td className="px-6 py-3 text-gray-500">
                      {formatDate(order.createdAt)}
                    </td>

                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  )
}

export default AdminOrders

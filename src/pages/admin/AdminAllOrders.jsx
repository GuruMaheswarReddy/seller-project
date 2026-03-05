import { useEffect, useState } from "react"

const PRIMARY = "#094b3d"

const AdminAllOrders = () => {

const [orders, setOrders] = useState([])
const [loading, setLoading] = useState(true)

const fetchOrders = () => {
fetch("https://seller.arshithfresh.com/api/orders")
.then((res) => res.json())
.then((data) => {
if (Array.isArray(data)) {
setOrders(data)
} else {
setOrders([])
}
})
.catch((err) => {
console.error("Failed to load orders", err)
})
.finally(() => {
setLoading(false)
})
}

useEffect(() => {

```
fetchOrders()

const interval = setInterval(() => {
  fetchOrders()
}, 5000)

return () => clearInterval(interval)
```

}, [])

const formatDate = (value) => {

```
if (!value) return "-"

try {
  return new Date(value).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
} catch {
  return value
}
```

}

return ( <div className="p-6 space-y-6 bg-[#eef5f3] min-h-screen">

```
  {/* Header */}
  <div>
    <h2 className="text-2xl font-bold text-gray-800">
      Shopify Orders
    </h2>

    <p className="text-sm text-gray-500">
      Orders received from Shopify store.
    </p>
  </div>

  {/* Table Card */}
  <div className="bg-white rounded-2xl shadow-md overflow-hidden">

    {/* Title */}
    <div
      className="px-6 py-4 border-b text-white font-semibold"
      style={{ backgroundColor: PRIMARY }}
    >
      Order List
    </div>

    <div className="overflow-x-auto">

      <table className="w-full text-sm">

        {/* Table Header */}
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="px-6 py-3 text-left">Order ID</th>
            <th className="px-6 py-3 text-left">Customer</th>
            <th className="px-6 py-3 text-left">Price</th>
            <th className="px-6 py-3 text-left">Address</th>
            <th className="px-6 py-3 text-left">City</th>
            <th className="px-6 py-3 text-left">Order Date</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>

          {loading ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-6 text-gray-400"
              >
                Loading orders...
              </td>
            </tr>
          ) : orders.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                className="text-center py-6 text-gray-400"
              >
                No orders received yet
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <tr
                key={order.orderId}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-3 text-gray-500">
                  #{String(order.orderId).slice(-6)}
                </td>

                <td className="px-6 py-3 font-medium text-gray-800">
                  {order.customerName}
                </td>

                <td className="px-6 py-3 font-semibold text-[#094b3d]">
                  ₹{order.price}
                </td>

                <td className="px-6 py-3 text-gray-600">
                  {order.address}
                </td>

                <td className="px-6 py-3 text-gray-600">
                  {order.city}
                </td>

                <td className="px-6 py-3 text-gray-600">
                  {formatDate(order.date)}
                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>

  </div>

</div>
```

)
}

export default AdminAllOrders

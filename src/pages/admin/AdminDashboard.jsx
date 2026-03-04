import { useAppContext } from "../../context/AppContext.jsx"

const PRIMARY = "#094b3d"

const AdminDashboard = () => {
  const { users, products, orders } = useAppContext()

  const sellers = users.filter((u) => u.role === "seller")

  const totalSellers = sellers.length
  const totalAdmins = users.filter((u) => u.role === "admin").length
  const totalProducts = products.length

  const totalRevenue = orders.reduce((sum, o) => sum + (o.price || 0), 0)

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount || 0)
  }

  return (
    <div className="p-6 space-y-8 bg-[#f4f7f6] min-h-screen">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          Overview of sellers, products and platform activity.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-4">

        <div
          className="bg-white rounded-2xl shadow-md p-5 border-l-4"
          style={{ borderColor: PRIMARY }}
        >
          <p className="text-sm text-gray-500">Total Sellers</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">
            {totalSellers}
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-md p-5 border-l-4"
          style={{ borderColor: PRIMARY }}
        >
          <p className="text-sm text-gray-500">Admins</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">
            {totalAdmins}
          </p>
        </div>

        <div
          className="bg-white rounded-2xl shadow-md p-5 border-l-4"
          style={{ borderColor: PRIMARY }}
        >
          <p className="text-sm text-gray-500">Products</p>
          <p className="text-3xl font-bold text-gray-800 mt-1">
            {totalProducts}
          </p>
        </div>

        <div
          className="rounded-2xl shadow-md p-5 text-white"
          style={{ backgroundColor: PRIMARY }}
        >
          <p className="text-sm opacity-80">Total Revenue</p>
          <p className="text-3xl font-bold mt-1">
            {formatCurrency(totalRevenue)}
          </p>
        </div>

      </div>

      {/* Sellers Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold text-gray-800">
            Registered Sellers
          </h3>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Created Date</th>
              </tr>
            </thead>

            <tbody>

              {sellers.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-400">
                    No sellers registered
                  </td>
                </tr>
              ) : (
                sellers.map((seller) => (
                  <tr
                    key={seller.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 font-medium text-gray-800">
                      {seller.name}
                    </td>

                    <td className="px-6 py-3 text-gray-600">
                      {seller.email}
                    </td>

                    <td className="px-6 py-3 text-gray-600">
                      {seller.phone}
                    </td>

                    <td className="px-6 py-3 text-gray-500">
                      {seller.createdAt
                        ? new Date(seller.createdAt).toLocaleDateString("en-IN")
                        : "-"}
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

export default AdminDashboard

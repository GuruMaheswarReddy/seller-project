import { useAppContext } from "../../context/AppContext.jsx"

const PRIMARY = "#094b3d"

const AdminProducts = () => {
  const { products, users } = useAppContext()

  const rows = products.map((product) => {
    const seller = users.find((u) => u.id === product.sellerId)

    return {
      ...product,
      sellerName: seller?.name ?? "Unknown seller",
    }
  })

  return (
    <div className="p-6 space-y-6 bg-[#f4f7f6] min-h-screen">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Seller Products
        </h2>
        <p className="text-sm text-gray-500">
          Products added by sellers.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="px-6 py-4 border-b">
          <h3 className="font-semibold text-gray-800">
            Product List
          </h3>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-6 py-3 text-left">Product ID</th>
                <th className="px-6 py-3 text-left">Seller</th>
                <th className="px-6 py-3 text-left">Product Name</th>
                <th className="px-6 py-3 text-left">Price</th>
              </tr>
            </thead>

            <tbody>

              {rows.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-400">
                    No products added yet
                  </td>
                </tr>
              ) : (
                rows.map((product) => (
                  <tr
                    key={product.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="px-6 py-3 text-gray-500">
                      {product.id}
                    </td>

                    <td className="px-6 py-3 font-medium text-gray-800">
                      {product.sellerName}
                    </td>

                    <td className="px-6 py-3 text-gray-600">
                      {product.name}
                    </td>

                    <td className="px-6 py-3 font-semibold text-[#094b3d]">
                      ₹{product.price}
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

export default AdminProducts

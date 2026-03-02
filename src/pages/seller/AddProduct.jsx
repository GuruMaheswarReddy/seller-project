import { useState } from "react"
import { useAuth } from "../../context/AuthContext.jsx"
import { useAppContext } from "../../context/AppContext.jsx"

const PRIMARY = "#094b3d"

const emptyForm = {
  name: "",
  price: "",
  description: "",
  imageUrl: "",
}

const AddProduct = () => {
  const { user } = useAuth()
  const { createProduct } = useAppContext()
  const [form, setForm] = useState(emptyForm)
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!user) return

    const priceNumber = Number(form.price || 0)

    createProduct({
      name: form.name,
      price: priceNumber,
      description: form.description,
      imageUrl:
        form.imageUrl ||
        "https://images.pexels.com/photos/3730760/pexels-photo-3730760.jpeg?auto=compress&cs=tinysrgb&w=800",
      sellerId: user.id,
    })

    setForm(emptyForm)
    setMessage("Product successfully added to your catalog.")
    setTimeout(() => setMessage(""), 2500)
  }

  return (
    <div className="min-h-screen bg-[#eef5f3] p-8">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Add New Product
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Create and publish a new product in your catalog.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-3xl shadow-md p-8 max-w-3xl">

        {message && (
          <div
            className="mb-6 px-4 py-3 rounded-xl text-sm text-white"
            style={{ backgroundColor: PRIMARY }}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Product Name
            </label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ focusRingColor: PRIMARY }}
              placeholder="Organic Mangoes"
            />
          </div>

          {/* Price + Image */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Price (₹)
              </label>
              <input
                name="price"
                type="number"
                min="0"
                required
                value={form.price}
                onChange={handleChange}
                className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:border-transparent"
                placeholder="199"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Image URL
              </label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:border-transparent"
                placeholder="https://image-link..."
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Description
            </label>
            <textarea
              name="description"
              rows={4}
              value={form.description}
              onChange={handleChange}
              className="mt-2 w-full resize-none border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:border-transparent"
              placeholder="Describe your product features and benefits..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white py-3 rounded-xl font-semibold transition hover:opacity-90"
            style={{ backgroundColor: PRIMARY }}
          >
            Add Product
          </button>

        </form>

      </div>

    </div>
  )
}

export default AddProduct

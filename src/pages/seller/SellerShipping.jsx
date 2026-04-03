import { useState } from "react"

const PRIMARY = "#094b3d"

const SellerShipping = () => {
  const [rules, setRules] = useState([])
  const [form, setForm] = useState({
    area: "",
    cost: "",
    days: "",
  })
  const [editIndex, setEditIndex] = useState(null)

  // Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Add or Update Rule
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editIndex !== null) {
      const updatedRules = [...rules]
      updatedRules[editIndex] = form
      setRules(updatedRules)
      setEditIndex(null)
    } else {
      setRules([...rules, form])
    }

    setForm({ area: "", cost: "", days: "" })
  }

  // Delete Rule
  const handleDelete = (index) => {
    const updated = rules.filter((_, i) => i !== index)
    setRules(updated)
  }

  // Edit Rule
  const handleEdit = (index) => {
    setForm(rules[index])
    setEditIndex(index)
  }

  return (
    <div className="min-h-screen bg-[#eef5f3] p-8">

      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          🚚 Shipping Management
        </h2>
        <p className="text-gray-500 mt-2">
          Manage delivery areas, charges, and timelines.
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-3xl shadow-md mb-10 grid gap-4 md:grid-cols-3"
      >
        <input
          type="text"
          name="area"
          placeholder="Delivery Area (e.g. Bangalore)"
          value={form.area}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2"
          required
        />

        <input
          type="number"
          name="cost"
          placeholder="Shipping Cost ₹"
          value={form.cost}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2"
          required
        />

        <input
          type="number"
          name="days"
          placeholder="Delivery Days"
          value={form.days}
          onChange={handleChange}
          className="border p-3 rounded-lg focus:outline-none focus:ring-2"
          required
        />

        <button
          type="submit"
          className="md:col-span-3 text-white p-3 rounded-xl font-semibold hover:opacity-90 transition"
          style={{ backgroundColor: PRIMARY }}
        >
          {editIndex !== null ? "Update Shipping Rule" : "Add Shipping Rule"}
        </button>
      </form>

      {/* Table Section */}
      <div className="bg-white rounded-3xl shadow-md p-6">

        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          Shipping Rules List
        </h3>

        {rules.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No shipping rules added yet 🚫
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-3">Area</th>
                  <th className="py-3">Cost</th>
                  <th className="py-3">Delivery Time</th>
                  <th className="py-3">Actions</th>
                </tr>
              </thead>

              <tbody>
                {rules.map((rule, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">

                    <td className="py-3">{rule.area}</td>

                    <td className="py-3 font-medium">
                      ₹{rule.cost}
                    </td>

                    <td className="py-3">
                      {rule.days} days
                    </td>

                    <td className="py-3 flex gap-3">

                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>

                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}
      </div>

    </div>
  )
}

export default SellerShipping

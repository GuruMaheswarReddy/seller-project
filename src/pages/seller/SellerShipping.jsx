import { useState, useEffect } from "react"

const PRIMARY = "#094b3d"

const SellerShipping = () => {
  const [rules, setRules] = useState([])
  const [form, setForm] = useState({
    area: "",
    cost: "",
    days: "",
    freeShipping: false,
    minAmount: "",
  })
  const [editIndex, setEditIndex] = useState(null)

  // Load from localStorage
  useEffect(() => {
    const data = localStorage.getItem("shippingRules")
    if (data) setRules(JSON.parse(data))
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("shippingRules", JSON.stringify(rules))
  }, [rules])

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Add / Update Rule
  const handleSubmit = (e) => {
    e.preventDefault()

    if (editIndex !== null) {
      const updated = [...rules]
      updated[editIndex] = form
      setRules(updated)
      setEditIndex(null)
    } else {
      setRules([...rules, form])
    }

    setForm({
      area: "",
      cost: "",
      days: "",
      freeShipping: false,
      minAmount: "",
    })
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
          Configure delivery areas, charges, and shipping rules.
        </p>
      </div>

      {/* Form */}
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
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="cost"
          placeholder="Shipping Cost ₹"
          value={form.cost}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="number"
          name="days"
          placeholder="Delivery Days"
          value={form.days}
          onChange={handleChange}
          className="border p-3 rounded-lg"
          required
        />

        {/* Free Shipping */}
        <div className="flex items-center gap-2 col-span-1">
          <input
            type="checkbox"
            name="freeShipping"
            checked={form.freeShipping}
            onChange={handleChange}
          />
          <label>Free Shipping</label>
        </div>

        {/* Minimum Amount */}
        <input
          type="number"
          name="minAmount"
          placeholder="Free shipping above ₹"
          value={form.minAmount}
          onChange={handleChange}
          className="border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="md:col-span-3 text-white p-3 rounded-xl font-semibold"
          style={{ backgroundColor: PRIMARY }}
        >
          {editIndex !== null ? "Update Rule" : "Add Rule"}
        </button>
      </form>

      {/* Table */}
      <div className="bg-white rounded-3xl shadow-md p-6">
        <h3 className="text-xl font-semibold mb-6">
          Shipping Rules
        </h3>

        {rules.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            📦 No shipping rules yet. Add your first rule!
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-3">Area</th>
                  <th>Cost</th>
                  <th>Days</th>
                  <th>Free</th>
                  <th>Min ₹</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {rules.map((rule, index) => (
                  <tr key={index} className="border-b">

                    <td className="py-3">{rule.area}</td>

                    <td>₹{rule.cost}</td>

                    <td>{rule.days} days</td>

                    <td>
                      {rule.freeShipping ? (
                        <span className="text-green-600">Yes</span>
                      ) : (
                        "No"
                      )}
                    </td>

                    <td>{rule.minAmount || "-"}</td>

                    <td className="flex gap-3 py-3">

                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-600"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-600"
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

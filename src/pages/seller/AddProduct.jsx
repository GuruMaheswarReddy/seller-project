import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useAppContext } from "../../context/AppContext.jsx";

const PRIMARY = "#094b3d";

const emptyForm = {
name: "",
price: "",
description: "",
};

const GOOGLE_FORM_LINK =
"https://docs.google.com/forms/d/e/1FAIpQLScROgSpRDHWbiNr6aSpk9Qx98F1JsmYeNgxuU0876lqHIQJSQ/viewform";

const AddProduct = () => {
const { user } = useAuth();
const { createProduct } = useAppContext();

const [form, setForm] = useState(emptyForm);
const [message, setMessage] = useState("");

const handleChange = (e) => {
setForm((prev) => ({
...prev,
[e.target.name]: e.target.value,
}));
};

const openGoogleForm = () => {
window.open(GOOGLE_FORM_LINK, "_blank");
};

const handleSubmit = (e) => {
e.preventDefault();

```
if (!user) return;

const priceNumber = Number(form.price || 0);

const newProduct = {
  id: Date.now(),
  name: form.name,
  price: priceNumber,
  description: form.description,
  sellerId: user.id,
  createdAt: new Date().toISOString(),
};

createProduct(newProduct);

setForm(emptyForm);

setMessage("Product successfully added to your catalog.");

setTimeout(() => {
  setMessage("");
}, 2500);
```

};

return ( <div className="min-h-screen bg-[#eef5f3] p-8">
{/* Header */} <div className="mb-8"> <h2 className="text-2xl font-bold text-gray-800">Add New Product</h2> <p className="text-sm text-gray-500 mt-1">
Create and publish a new product in your catalog. </p> </div>

```
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
          placeholder="Organic Mangoes"
          className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2"
        />
      </div>

      {/* Price */}
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
          placeholder="199"
          className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2"
        />
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
          placeholder="Describe your product features and benefits..."
          className="mt-2 w-full resize-none border border-gray-300 rounded-xl px-4 py-2 text-black placeholder-gray-400 focus:outline-none focus:ring-2"
        />
      </div>

      {/* Upload Image */}
      <div>
        <label className="block text-sm font-medium text-gray-600">
          Upload Product Image
        </label>

        <button
          type="button"
          onClick={openGoogleForm}
          className="mt-2 w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 hover:bg-gray-100 text-sm font-medium text-black"
        >
          Upload Image via Google Form
        </button>

        <p className="text-xs text-gray-400 mt-2">
          This will open a Google Form where you can upload the product image.
        </p>
      </div>

      {/* Submit */}
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

);
};

export default AddProduct;

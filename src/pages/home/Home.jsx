import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext.jsx'
import ProductCard from '../../components/ProductCard.jsx'
import Footer from '../../components/Footer'
import heroImage from "../../assets/Gemini_Generated_Image_q6rdtoq6rdtoq6rd.png";

const Home = () => {
  const navigate = useNavigate()
  const { products, users } = useAppContext()

  const latestProducts = products.slice(0, 4).map((p) => {
    const seller = users.find((u) => u.id === p.sellerId)
    return {
      ...p,
      sellerName: seller?.name ?? 'Seller Not Available',
    }
  })

  const steps = [
  {
    title: "Register Your Account",
    desc: "To get started, you need:",
    points: [
      "GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)",
      "A valid bank account"
    ]
  },
  {
    title: "Upload Your Products",
    desc: "Add and manage the products you wish to sell through your seller panel."
  },
  {
    title: "Start Receiving Orders",
    desc: "Begin receiving orders from customers actively shopping on the platform."
  },
  {
    title: "Affordable Delivery",
    desc: "Ship your products across India with cost-effective logistics."
  },
  {
    title: "Receive Payments",
    desc: "Payments are credited directly to your bank account within 7 days after delivery."
  }
]
  

  return (
    <div className="min-h-screen bg-gray-50">

{/* HERO SECTION */}
<section className="bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-md lg:max-w-6xl">

    <div className="bg-gray-50 rounded-3xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">

      <div className="w-full">
        <img
          src={heroImage}
          alt="Start selling"
          className="w-full h-64 sm:h-72 object-cover lg:h-full"
        />
      </div>

      <div className="p-6 sm:p-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Begin selling with us today
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Present your products to millions of customers who explore{" "}
          <span className="font-semibold text-[#094b3d]">ArshithFresh</span> every day.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full lg:w-auto bg-[#094b3d] hover:bg-[#0f6b58] text-white font-semibold py-4 px-8 rounded-full shadow-md transition duration-300"
        >
          Start Selling Now
        </button>
      </div>

    </div>

  </div>
</section>

{/* STATS SECTION */}
<section className="bg-gray-100 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Lakhs of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Sellers depend on ArshithFresh to sell online
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Crores of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Customers purchasing across India
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Thousands of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Serviceable pincodes nationwide — ensuring delivery everywhere
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Hundreds of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Categories available for online selling
        </p>
      </div>

    </div>
  </div>
</section>

{/* WHY SELLERS LOVE */}
<section className="bg-gray-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight sm:text-5xl">
          Why Sellers Prefer ArshithFresh
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          Every feature is built to help you increase sales and grow your business with ease.
        </p>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">

        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold text-lg">
            0%
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Zero Commission Fee
            </h3>
            <p className="mt-2 text-gray-600">
              Retain full profits without paying any commission.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold">
            ₹
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              No Penalty Charges
            </h3>
            <p className="mt-2 text-gray-600">
              Sell confidently without worrying about delays or cancellations.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold">
            ↑
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Growth for Every Seller
            </h3>
            <p className="mt-2 text-gray-600">
              We support businesses of all sizes to expand quickly.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Simple Business Experience
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 text-gray-700">

            <div className="flex items-center gap-3">✓ Easy Product Listing</div>
            <div className="flex items-center gap-3">✓ Lowest Shipping Cost</div>
            <div className="flex items-center gap-3">✓ 7-Day Payment Cycle</div>
            <div className="flex items-center gap-3">✓ Transparent Order Tracking</div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* TOOLS SECTION */}
<section className="relative bg-[#eef3f7] py-24 overflow-hidden">
  <div className="mx-auto max-w-7xl px-6">

    <div className="max-w-4xl">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        <span className="text-[#094b3d]">
          Explore our tools to accelerate your growth
        </span>{" "}
        on ArshithFresh
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Your online business may need support at times. With your seller account,
        you gain access to powerful tools designed to help you scale efficiently.
      </p>
    </div>

    <div className="absolute left-6 top-40 text-[120px] font-bold text-[#094b3d]/5">
      5x Growth
    </div>

    <div className="relative mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Fulfillment Assistance",
          desc: "Concerned about storage, packing, or delivery? Let us manage logistics.",
          path: "/how-it-works"
        },
        {
          title: "Seller Promotions",
          desc: "Increase your product visibility and stand out in the marketplace.",
          path: "/grow-business"
        },
        {
          title: "Festive Campaigns",
          desc: "Join special sales events to boost your order volume.",
          path: "/grow-business"
        },
        {
          title: "Learning Hub",
          desc: "Access webinars, tutorials, and expert sessions for growth.",
          path: "/how-it-works"
        },
        {
          title: "Account Support",
          desc: "Optimize pricing, selection, and insights with expert guidance.",
          path: "/pricing"
        },
        {
          title: "Mobile Access",
          desc: "Manage your seller account anytime, anywhere via mobile.",
          path: "/how-it-works"
        }
      ].map((item, index) => (
        <div key={index} className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl">
          <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
          <p className="mt-4 text-gray-600">{item.desc}</p>
          <button onClick={() => navigate(item.path)}
            className="mt-6 text-[#094b3d] font-semibold hover:underline">
            Explore More →
          </button>
        </div>
      ))}

    </div>
  </div>
</section>

{/* HELP SECTION */}
<section className="bg-gray-100 py-24">
  <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">

    <div>
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
        We’re here to support you 😊
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Have any questions or feedback? Let us know so we can improve your experience.
      </p>

      <form className="mt-10 space-y-6 max-w-md">

        <input type="text" placeholder="Enter your full name *" className="w-full border px-4 py-3" />
        <input type="text" placeholder="Enter mobile number or email *" className="w-full border px-4 py-3" />

        <select className="w-full border px-4 py-3">
          <option>Select topic</option>
          <option>General Inquiry</option>
          <option>Seller Assistance</option>
          <option>Payments</option>
          <option>Technical Support</option>
        </select>

        <textarea rows="5" placeholder="Write your message *" className="w-full border px-4 py-3"></textarea>

        <button className="bg-[#094b3d] text-white px-8 py-3">
          Submit Query
        </button>

      </form>
    </div>

    <div className="flex justify-center">
      <img src="https://illustrations.popsy.co/blue/customer-support.svg" />
    </div>

  </div>
</section>

{/* CATEGORIES */}
<section className="bg-[#094b3d] py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
      Popular Categories Across India
    </h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-green-100">

      <ul className="space-y-4">
        <li>Cold Pressed Oils</li>
        <li>Sunflower Oil</li>
        <li>Groundnut Oil</li>
        <li>Coconut Oil</li>
        <li>Sesame Oil</li>
      </ul>

      <ul className="space-y-4">
        <li>Dry Fruits</li>
        <li>Nuts & Seeds</li>
        <li>Premium Almonds</li>
        <li>Cashews</li>
        <li>Raisins</li>
      </ul>

      <ul className="space-y-4">
        <li>Beauty Products</li>
        <li>Toys</li>
        <li>Shirts</li>
        <li>Books</li>
        <li>Juices</li>
      </ul>

      <ul className="space-y-4">
        <li>Groceries</li>
        <li>Spices</li>
        <li>Healthy Snacks</li>
        <li>Combo Offers</li>
        <li>All Products</li>
      </ul>

    </div>

  </div>
</section>

    </div>
  )
}

export default Home

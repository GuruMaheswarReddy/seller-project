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
      sellerName: seller?.name ?? 'Verified Seller',
    }
  })

  const steps = [
  {
    title: "Create Your Profile",
    desc: "To begin selling, you need:",
    points: [
      "Basic identity or business verification",
      "An active bank account for payouts"
    ]
  },
  {
    title: "Upload Your Catalog",
    desc: "Add product details, images, and pricing in your dashboard."
  },
  {
    title: "Receive Orders",
    desc: "Customers browse and place orders anytime on the platform."
  },
  {
    title: "Hassle-Free Delivery",
    desc: "We support logistics to deliver products across locations."
  },
  {
    title: "Get Paid Easily",
    desc: "Payments are securely transferred to your account in cycles."
  }
]
  

  return (
    <div className="min-h-screen bg-gray-50">
{/* HERO SECTION - AMAZON MOBILE STYLE */}
<section className="bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-md lg:max-w-6xl">

    {/* CARD */}
    <div className="bg-gray-50 rounded-3xl shadow-md overflow-hidden lg:grid lg:grid-cols-2 lg:items-center">

      {/* IMAGE (TOP in mobile) */}
      <div className="w-full">
        <img
          src={heroImage}
          alt="Start your online business"
          className="w-full h-64 sm:h-72 object-cover lg:h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Take your business online!
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Reach thousands of active shoppers exploring{" "}
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

      {/* CARD 1 */}
      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Thousands of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Sellers building their businesses with us
        </p>
      </div>

      {/* CARD 2 */}
      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Millions of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Customers shopping every month
        </p>
      </div>

      {/* CARD 3 */}
      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Wide coverage
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Delivering to numerous serviceable locations
        </p>
      </div>

      {/* CARD 4 */}
      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Multiple
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Categories available for selling
        </p>
      </div>

    </div>
  </div>
</section>

      {/* WHY SELLERS LOVE SECTION */}
<section className="bg-gray-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* LEFT SIDE */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight sm:text-5xl">
          Why Choose Our Platform
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          Everything is designed to help you grow faster and manage your business with ease.
        </p>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">

        {/* ITEM 1 */}
        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold text-lg">
            0%
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              No Commission Fees
            </h3>
            <p className="mt-2 text-gray-600">
              Keep full earnings without paying platform commissions.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* ITEM 2 */}
        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold">
            ₹
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              No Extra Charges
            </h3>
            <p className="mt-2 text-gray-600">
              Transparent pricing without hidden deductions.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* ITEM 3 */}
        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold">
            ↑
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Growth Opportunities
            </h3>
            <p className="mt-2 text-gray-600">
              Suitable for both new and experienced sellers.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* ITEM 4 */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Simple Business Tools
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 text-gray-700">

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Easy Product Upload
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Affordable Shipping Options
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Fast Payment Processing
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Transparent Order Tracking
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    {/* HOW IT WORKS SECTION */}
<section className="py-20 bg-gray-50">
  <div className="mx-auto max-w-6xl px-6">

    <h2 className="text-center text-3xl font-semibold text-gray-900 mb-16">
      How the process works
    </h2>

    <div className="bg-white rounded-2xl shadow-lg px-10 py-14">

      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block">

        {/* NUMBER ROW */}
        <div className="grid grid-cols-5 items-center mb-12">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <div key={index} className="relative flex justify-center items-center">

              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#094b3d] text-white font-semibold text-sm">
                {num}
              </div>

              {index !== 4 && (
                <div className="absolute right-[-35%] top-1/2 -translate-y-1/2 w-[70%] h-[2px] bg-[#094b3d]"></div>
              )}
            </div>
          ))}
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-5 gap-8 text-center">
          {steps.map((step, index) => (
            <div key={index}>
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>

              {step.points && (
                <ul className="mt-3 text-sm text-gray-600 space-y-1 text-left">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#094b3d] text-xs mt-[6px]">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden relative">

        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#094b3d]"></div>

        <div className="space-y-14">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-16">

              {/* Circle */}
              <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#094b3d] text-white font-semibold text-sm shadow-md">
                {index + 1}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-gray-600">{step.desc}</p>

              {step.points && (
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {step.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#094b3d] text-xs mt-[6px]">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>
  
      
    {/* TOOLS SECTION */}
<section className="relative bg-[#eef3f7] py-24 overflow-hidden">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="max-w-4xl">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        <span className="text-[#094b3d]">
          Powerful tools to accelerate growth
        </span>{" "}
        on ArshithFresh
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Your business journey may need support at different stages. 
        Our platform provides tools that simplify operations and boost growth.
      </p>
    </div>

    {/* Background Large Text */}
    <div className="absolute left-6 top-40 text-[120px] font-bold text-[#094b3d]/5 select-none pointer-events-none">
      Grow Faster
    </div>

    {/* Cards Grid */}
    <div className="relative mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Logistics Assistance",
          desc: "We help manage storage, packaging, and delivery efficiently.",
          path: "/how-it-works"
        },
        {
          title: "Promotional Ads",
          desc: "Increase visibility and attract more customers to your products.",
          path: "/grow-business"
        },
        {
          title: "Seasonal Campaigns",
          desc: "Join special campaigns and boost your sales during peak seasons.",
          path: "/grow-business"
        },
        {
          title: "Learning Resources",
          desc: "Access tutorials, webinars, and expert guidance anytime.",
          path: "/how-it-works"
        },
        {
          title: "Business Insights",
          desc: "Optimize pricing and product strategy with data insights.",
          path: "/pricing"
        },
        {
          title: "Mobile Access",
          desc: "Manage your business anytime, anywhere from your device.",
          path: "/how-it-works"
        }
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl transition duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-4 text-gray-600">
            {item.desc}
          </p>

          <button
            onClick={() => navigate(item.path)}
            className="mt-6 text-[#094b3d] font-semibold hover:underline"
          >
            Explore More →
          </button>
        </div>
      ))}

    </div>
  </div>
</section>

     {/* HELP SECTION */}
<section className="bg-gray-100 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* LEFT SIDE */}
      <div>

        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          Need assistance?{" "}
          <span className="text-[#094b3d]">We’re here!</span>{" "}
          😊
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Have questions or need help? Share your concerns and we’ll assist you promptly.
        </p>

        {/* FORM */}
        <form className="mt-10 space-y-6 max-w-md">

          <input
            type="text"
            placeholder="Your Full Name *"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          />

          <input
            type="text"
            placeholder="Phone Number or Email *"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          />

          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          >
            <option>Choose a Topic</option>
            <option>General Inquiry</option>
            <option>Seller Assistance</option>
            <option>Payment Related</option>
            <option>Technical Support</option>
          </select>

          <textarea
            rows="5"
            placeholder="Write your message here *"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          ></textarea>

          <button
            type="submit"
            className="rounded-lg bg-[#094b3d] px-8 py-3 text-white font-semibold hover:bg-[#0f6b58] transition"
          >
            Submit Request
          </button>

        </form>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://illustrations.popsy.co/blue/customer-support.svg"
          alt="Support assistance"
          className="w-full max-w-md"
        />
      </div>

    </div>
  </div>
</section>

      {/* POPULAR CATEGORIES SECTION */}
<section className="bg-[#094b3d] py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
      Trending Categories Across the Platform
    </h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-green-100 text-sm sm:text-base">

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Organic Oils</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sunflower Oil</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Groundnut Oil</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Coconut Oil</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sesame Oil</li>
      </ul>

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Dry Fruits</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Nuts & Seeds</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Premium Almonds</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Cashews</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Raisins</li>
      </ul>

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Beauty Essentials</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Kids Toys</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Fashion Wear</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Books</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Beverages</li>
      </ul>

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Groceries</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Spices</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Healthy Snacks</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Combo Packs</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">All Categories</li>
      </ul>

    </div>

    <div className="mt-16 border-t border-green-700"></div>

  </div>
</section>
    
    </div>
  )
}

export default Home

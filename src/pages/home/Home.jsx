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
      sellerName: seller?.name ?? 'Unknown Seller',
    }
  })

  const steps = [
  {
    title: "Create Account",
    desc: "All you need is:",
    points: [
      "GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)",
      "Bank Account"
    ]
  },
  {
    title: "List Products",
    desc: "List the products you want to sell in your supplier panel."
  },
  {
    title: "Get Orders",
    desc: "Start getting orders from customers actively shopping on our platform."
  },
  {
    title: "Affordable Shipping",
    desc: "Enjoy affordable shipping to customers across India."
  },
  {
    title: "Receive Payments",
    desc: "Payments are deposited directly to your bank account following a 7-day payment cycle from order delivery."
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
          alt="Start selling"
          className="w-full h-64 sm:h-72 object-cover lg:h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Start selling today!
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Put your products in front of millions of customers who search for{" "}
          <span className="font-semibold text-[#094b3d]">ArshithFresh</span> everyday.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full lg:w-auto bg-[#094b3d] hover:bg-[#0f6b58] text-white font-semibold py-4 px-8 rounded-full shadow-md transition duration-300"
        >
          Start selling
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
          Lakhs of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Sellers trust ArshithFresh to sell online
        </p>
      </div>

      {/* CARD 2 */}
      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Crores of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Customers buying across India
        </p>
      </div>

      {/* CARD 3 */}
      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Thousands of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Serviceable pincodes across India — we deliver everywhere.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Hundreds of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Categories to sell online
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
          Why Sellers Love ArshithFresh
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          All the benefits that come with selling on ArshithFresh are 
          designed to help you sell more, and make it easier to grow 
          your business.
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
              0% Commission Fee
            </h3>
            <p className="mt-2 text-gray-600">
              Sellers keep 100% of their profit by not paying any commission.
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
              0 Penalty Charges
            </h3>
            <p className="mt-2 text-gray-600">
              Sell online without fear of cancellation charges or late dispatch penalties.
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
              Growth for Every Seller
            </h3>
            <p className="mt-2 text-gray-600">
              From small to large businesses, we help every seller grow faster.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* ITEM 4 */}
        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Ease of Doing Business
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 text-gray-700">

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Easy Product Listing
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Lowest Shipping Cost
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              7-Day Payment Cycle
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
      How it works
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
          Access our tools to grow faster
        </span>{" "}
        on ArshithFresh
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        We understand that your online business may require additional 
        support from time to time. With your seller account, you gain 
        access to powerful tools designed to help grow your business.
      </p>
    </div>

    {/* Background Large Text */}
    <div className="absolute left-6 top-40 text-[120px] font-bold text-[#094b3d]/5 select-none pointer-events-none">
      5x Growth
    </div>

    {/* Cards Grid */}
    <div className="relative mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Fulfillment Support",
          desc: "Worried about storing, packing and shipping? Let us handle logistics for you.",
          path: "/how-it-works"
        },
        {
          title: "Seller Ads",
          desc: "Boost your product visibility and stand out from competitors.",
          path: "/grow-business"
        },
        {
          title: "Shopping Festivals",
          desc: "Participate in mega sales and seasonal campaigns to increase orders.",
          path: "/grow-business"
        },
        {
          title: "Learning Center",
          desc: "Access webinars, tutorials and expert sessions to grow faster.",
          path: "/how-it-works"
        },
        {
          title: "Account Management",
          desc: "Improve product selection, pricing and business insights with experts.",
          path: "/pricing"
        },
        {
          title: "Mobile App",
          desc: "Manage your seller account 24x7 from your mobile device.",
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
            Learn More →
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
          We are happy to{" "}
          <span className="text-[#094b3d]">help you</span>{" "}
          😊
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Still have questions or queries that are left unanswered?
          Share your thoughts below which will help us improve your
          website experience.
        </p>

        {/* FORM */}
        <form className="mt-10 space-y-6 max-w-md">

          <input
            type="text"
            placeholder="Enter Full Name *"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          />

          <input
            type="text"
            placeholder="Enter Mobile Number / Email ID *"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          />

          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          >
            <option>Select A Topic</option>
            <option>General Query</option>
            <option>Seller Support</option>
            <option>Payments</option>
            <option>Technical Issue</option>
          </select>

          <textarea
            rows="5"
            placeholder="Type Your Message *"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          ></textarea>

          <button
            type="submit"
            className="rounded-lg bg-[#094b3d] px-8 py-3 text-white font-semibold hover:bg-[#0f6b58] transition"
          >
            Send Query
          </button>

        </form>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://illustrations.popsy.co/blue/customer-support.svg"
          alt="Customer Support"
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
      Popular Categories to Shop Across India
    </h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-green-100 text-sm sm:text-base">

      {/* Column 1 */}
      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Cold Pressed Oils Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Sunflower Oil Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Groundnut Oil Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Coconut Oil Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Sesame Oil Online</li>
      </ul>

      {/* Column 2 */}
      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Dry Fruits Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Nuts & Seeds Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Premium Almonds Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Cashews Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Raisins Online</li>
      </ul>

      {/* Column 3 */}
      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Beauty Products Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Toys Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Shirts Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Books Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Watche Juices Online</li>
      </ul>

      {/* Column 4 */}
      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Groceries Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Spices Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Healthy Snacks Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell Combo Offers Online</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sell All Products</li>
      </ul>

    </div>

    <div className="mt-16 border-t border-green-700"></div>

  </div>
</section>
    
    </div>
  )
}

export default Home

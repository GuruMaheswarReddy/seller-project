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
      sellerName: seller?.name ?? 'Authenticated Merchant',
    }
  })

  const steps = [
  {
    title: "Account Initialization",
    desc: "To begin onboarding, you must provide:",
    points: [
      "Government or business identity credentials",
      "Active settlement bank account details"
    ]
  },
  {
    title: "Product Enrollment",
    desc: "Publish your inventory with full details inside your seller console."
  },
  {
    title: "Order Acquisition",
    desc: "Customers from the marketplace place purchases around the clock."
  },
  {
    title: "Fulfillment Network",
    desc: "We coordinate logistics to ensure nationwide product dispatch."
  },
  {
    title: "Revenue Settlement",
    desc: "Your earnings are credited securely in scheduled payout cycles."
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
          alt="Digital storefront activation banner"
          className="w-full h-64 sm:h-72 object-cover lg:h-full"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6 sm:p-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Launch your digital storefront instantly
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Present your catalog to thousands of daily active buyers exploring{" "}
          <span className="font-semibold text-[#094b3d]">ArshithFresh</span> ecosystem.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full lg:w-auto bg-[#094b3d] hover:bg-[#0f6b58] text-white font-semibold py-4 px-8 rounded-full shadow-md transition duration-300"
        >
          Activate Seller Account
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
          Expanding Network of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Independent sellers scaling their online presence
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Massive Base of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Active customers engaging with products daily
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Nationwide Reach Across
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Logistics coverage spanning multiple regions
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Diverse Marketplace of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          Product verticals available for listing
        </p>
      </div>

    </div>
  </div>
</section>


{/* WHY SECTION */}
<section className="bg-gray-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight sm:text-5xl">
          Platform Advantages for Sellers
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          A fully optimized ecosystem designed to maximize seller performance and operational efficiency.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">

        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold text-lg">
            0%
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Commission-Free Model
            </h3>
            <p className="mt-2 text-gray-600">
              Sellers retain complete revenue ownership without deductions.
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
              Transparent Financial Structure
            </h3>
            <p className="mt-2 text-gray-600">
              No hidden deductions or unexpected operational fees.
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
              Scalable Business Growth
            </h3>
            <p className="mt-2 text-gray-600">
              Structured support for businesses at all growth stages.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Simplified Operational Workflow
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 text-gray-700">

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">✓</span>
              Streamlined Product Upload System
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">✓</span>
              Optimized Shipping Infrastructure
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">✓</span>
              Accelerated Payment Settlement Cycle
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">✓</span>
              Real-Time Transaction Visibility
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
      Platform Workflow Guide
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

        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#094b3d]"></div>

        <div className="space-y-14">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-16">

              <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center rounded-full bg-[#094b3d] text-white font-semibold text-sm shadow-md">
                {index + 1}
              </div>

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

    <div className="max-w-4xl">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        <span className="text-[#094b3d]">
          Business acceleration tools
        </span>{" "}
        built for sellers on ArshithFresh
      </h2>

      <p className="mt-6 text-lg text-gray-600">
        Expand your operations smoothly using integrated solutions designed to support scaling businesses.
      </p>
    </div>

    <div className="absolute left-6 top-40 text-[120px] font-bold text-[#094b3d]/5 select-none pointer-events-none">
      SCALE UP
    </div>

    <div className="relative mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Fulfillment Management",
          desc: "End-to-end logistics support including packaging and dispatch coordination.",
          path: "/how-it-works"
        },
        {
          title: "Advertising System",
          desc: "Promote your listings to reach a larger and more relevant audience.",
          path: "/grow-business"
        },
        {
          title: "Campaign Participation",
          desc: "Join promotional events and seasonal sales programs to boost visibility.",
          path: "/grow-business"
        },
        {
          title: "Training Hub",
          desc: "Learn strategies, insights, and marketplace optimization techniques.",
          path: "/how-it-works"
        },
        {
          title: "Analytics Dashboard",
          desc: "Monitor performance and improve decision-making with data insights.",
          path: "/pricing"
        },
        {
          title: "Mobile Operations",
          desc: "Control your entire seller account directly from mobile devices.",
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
            Open Feature →
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

      <div>

        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          Support Center{" "}
          <span className="text-[#094b3d]">available 24/7</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Reach out to us anytime for assistance regarding your seller journey or platform usage.
        </p>

        <form className="mt-10 space-y-6 max-w-md">

          <input
            type="text"
            placeholder="Full Name Required"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          />

          <input
            type="text"
            placeholder="Contact Information (Phone / Email)"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          />

          <select
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          >
            <option>Select Support Category</option>
            <option>General Help</option>
            <option>Seller Issues</option>
            <option>Payment Queries</option>
            <option>Technical Problems</option>
          </select>

          <textarea
            rows="5"
            placeholder="Describe your issue in detail"
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#094b3d]"
          ></textarea>

          <button
            type="submit"
            className="rounded-lg bg-[#094b3d] px-8 py-3 text-white font-semibold hover:bg-[#0f6b58] transition"
          >
            Submit Ticket
          </button>

        </form>
      </div>

      <div className="flex justify-center">
        <img
          src="https://illustrations.popsy.co/blue/customer-support.svg"
          alt="Support illustration"
          className="w-full max-w-md"
        />
      </div>

    </div>
  </div>
</section>

{/* CATEGORIES SECTION */}
<section className="bg-[#094b3d] py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
      Popular Product Segments Across Marketplace
    </h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-green-100 text-sm sm:text-base">

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Natural Oils Category</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Refined Sunflower Oils</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Premium Groundnut Oils</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Cold Press Coconut Oils</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Sesame Extract Oils</li>
      </ul>

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Dry Fruits Collection</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Nut Based Products</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Almond Variants</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Cashew Range</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Raisin Products</li>
      </ul>

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Beauty Essentials Line</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Kids Entertainment Toys</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Fashion Apparel</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Literature & Books</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Beverage Items</li>
      </ul>

      <ul className="space-y-4">
        <li className="hover:text-yellow-300 transition cursor-pointer">Daily Grocery Items</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Spice Collections</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Healthy Snacks Range</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Combo Product Packs</li>
        <li className="hover:text-yellow-300 transition cursor-pointer">Full Marketplace Access</li>
      </ul>

    </div>

    <div className="mt-16 border-t border-green-700"></div>

  </div>
</section>
    
    </div>
  )
}

export default Home

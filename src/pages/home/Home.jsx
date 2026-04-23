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
    title: "Register Your Account",
    desc: "Getting started is simple:",
    points: [
      "Provide GSTIN (for GST sellers) or Enrolment ID / UIN (for non-GST sellers)",
      "Add your active Bank Account details"
    ]
  },
  {
    title: "Upload Your Products",
    desc: "Easily add and manage your products through your seller dashboard."
  },
  {
    title: "Receive Orders",
    desc: "Start receiving orders from customers shopping across our platform."
  },
  {
    title: "Seamless Delivery",
    desc: "Deliver products nationwide with reliable and cost-effective shipping."
  },
  {
    title: "Get Paid Quickly",
    desc: "Payments are credited directly to your bank account within 7 days of delivery."
  }
]
  

  return (
    <div className="min-h-screen bg-gray-50">

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
          Start Your Selling Journey Today!
        </h1>

        <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
          Reach millions of customers actively searching for products on{" "}
          <span className="font-semibold text-[#094b3d]">ArshithFresh</span> every day.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="w-full lg:w-auto bg-[#094b3d] hover:bg-[#0f6b58] text-white font-semibold py-4 px-8 rounded-full shadow-md transition duration-300"
        >
          Start Selling
        </button>
      </div>

    </div>

  </div>
</section>

<section className="bg-gray-100 py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          ArshithFresh 
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          is trusted by thousands of sellers across India.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Millions of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          customers shop with us across India.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Thousands of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          serviceable pincodes ensuring nationwide delivery coverage.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-sm">
        <h3 className="text-4xl font-bold text-[#094b3d] mb-6">
          Hundreds of
        </h3>
        <p className="text-xl font-semibold text-gray-900 leading-snug">
          product categories available for you to sell online.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-gray-50 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight sm:text-5xl">
          Why Choose ArshithFresh
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
          Our platform is built to simplify your selling experience, helping you increase sales and scale your business effortlessly.
        </p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">

        <div className="flex gap-4 p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-[#094b3d] font-bold text-lg">
            0%
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Zero Commission
            </h3>
            <p className="mt-2 text-gray-600">
              Keep 100% of your profits with no commission charges.
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
              No Hidden Charges
            </h3>
            <p className="mt-2 text-gray-600">
              Sell confidently without worrying about penalties or extra fees.
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
              Scalable Growth
            </h3>
            <p className="mt-2 text-gray-600">
              Empowering businesses of all sizes to grow and succeed.
            </p>
          </div>
        </div>

        <hr className="border-gray-200" />

        <div className="p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Simplified Selling Experience
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 text-gray-700">

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Quick Product Upload
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Affordable Shipping
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Fast Payments
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] text-sm font-bold">
                ✓
              </span>
              Transparent Tracking
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-gray-50">
  <div className="mx-auto max-w-6xl px-6">

    <h2 className="text-center text-3xl font-semibold text-gray-900 mb-16">
      How It Works
    </h2>

    <div className="bg-white rounded-2xl shadow-lg px-10 py-14">

      <div className="hidden md:block">

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

<section className="bg-[#094b3d] py-20 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <h2 className="text-center text-3xl sm:text-4xl font-bold mb-16">
      Popular Categories You Can Sell
    </h2>

    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-green-100 text-sm sm:text-base">

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
        <li>Clothing</li>
        <li>Books</li>
        <li>Healthy Beverages</li>
      </ul>

      <ul className="space-y-4">
        <li>Groceries</li>
        <li>Spices</li>
        <li>Snacks</li>
        <li>Combo Offers</li>
        <li>All Categories</li>
      </ul>

    </div>

    <div className="mt-16 border-t border-green-700"></div>

  </div>
</section>

    </div>
  )
}

export default Home

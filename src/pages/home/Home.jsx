import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext.jsx'
import ProductCard from '../../components/ProductCard.jsx'
import Footer from '../../components/Footer'

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#094b3d] via-[#0f6b58] to-[#063d32] px-4 py-20 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-12 xl:gap-20">
          
          {/* Left Content */}
          <div className="lg:w-1/2 xl:w-2/3">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300 sm:mb-6">
              ArshithFresh
            </p>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Start selling online.
              <br />
              <span className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl">
                Grow your business faster.
              </span>
            </h1>
            <p className="mb-8 text-lg text-white/90 sm:text-xl">
              Create your store, add products, and start receiving orders in minutes.
              <br className="hidden sm:block" />
              <span className="font-semibold">No commission. No hidden charges.</span> Built for Indian sellers.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 sm:gap-6">
              <button
                onClick={() => navigate('/register')}
                className="rounded-xl bg-yellow-400 px-8 py-4 text-base font-semibold text-black shadow-xl transition-all duration-300 hover:bg-yellow-300 hover:shadow-2xl hover:-translate-y-1 sm:px-10 sm:py-5"
              >
                🚀 Start Selling
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('latest-products')
                  if (el) el.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-xl border-2 border-white/50 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/20 hover:shadow-2xl hover:-translate-y-1 sm:px-10 sm:py-5"
              >
                👤 Login
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 text-center sm:text-left">
              <div>
                <p className="text-2xl font-bold text-yellow-300">0%</p>
                <p className="text-xs text-white/70 uppercase tracking-wide">Commission</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-300">Instant</p>
                <p className="text-xs text-white/70 uppercase tracking-wide">Payouts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-300">Easy</p>
                <p className="text-xs text-white/70 uppercase tracking-wide">Onboarding</p>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="mt-12 w-full max-w-md lg:mt-0 lg:max-w-sm xl:max-w-md">
            <div className="rounded-3xl bg-white/90 backdrop-blur-xl p-8 shadow-2xl">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-600">
                Platform Snapshot
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">Seller Growth</h4>
                  <p className="text-xs text-gray-500 mb-4">Real marketplace insights</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2">
                    <span className="text-sm font-medium text-gray-700">Avg Monthly Orders</span>
                    <span className="text-lg font-bold text-green-600">+38%</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-sm font-medium text-gray-700">On-time Payouts</span>
                    <span className="text-lg font-bold text-green-600">99.1%</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#094b3d] to-[#0f6b58] px-6 py-4 text-center font-semibold text-white shadow-lg">
                Go live in minutes 🚀
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SELLERS CHOOSE US */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#094b3d]">
              Why Sellers Choose Us
            </p>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
              Built for local & growing brands
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Sell more with tools designed for every type of seller.
              From onboarding to payouts, everything is built for scale.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '📍', title: 'Pan-India Reach', desc: 'Reach customers across India with promotional visibility and wide marketplace access.' },
              { icon: '🚀', title: 'Simple Onboarding', desc: 'Upload KYC, add catalog, and start receiving orders within minutes.' },
              { icon: '📊', title: 'Growth Insights', desc: 'Real-time analytics, repeat buyer insights, and smart pricing tools.' },
              { icon: '💬', title: 'Seller-First Support', desc: 'WhatsApp & callback support for catalog, pricing, and growth help.' }
            ].map((feature, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#094b3d]/10 text-3xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-6">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#094b3d]">
              How It Works
            </p>
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Go from signup to first order in days
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A guided onboarding for busy store owners.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6">
              {[
                { title: 'Create account', desc: 'Start with mobile & email verification.' },
                { title: 'Complete KYC', desc: 'Add GST, PAN, bank details & address.' },
                { title: 'Add products', desc: 'Upload SKUs, prices, images & stock.' },
                { title: 'Start receiving orders', desc: 'Fulfil orders & handover easily.' }
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 rounded-3xl bg-white p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-[#094b3d] to-[#0f6b58] font-bold text-2xl text-white shadow-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:ml-12">
              <div className="rounded-3xl border-4 border-dashed border-[#094b3d]/20 bg-gradient-to-br from-white to-gray-50 p-10 shadow-2xl">
                <h3 className="mb-8 text-2xl font-bold text-gray-900 text-center">
                  What you need:
                </h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm">✓</span>
                    Business PAN & GST (if available)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm">✓</span>
                    Bank passbook or cancelled cheque
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm">✓</span>
                    Product photos
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-sm">✓</span>
                    Pricing & stock
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      <Footer />
    </div>
  )
}

export default Home

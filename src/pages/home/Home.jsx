import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext.jsx'
import ProductCard from '../../components/ProductCard.jsx'

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
    <div className="space-y-14 bg-[#094b3d]">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#094b3d] via-[#0f6b58] to-[#063d32] px-6 py-16 sm:px-10 lg:flex lg:items-center lg:justify-between">
  
  {/* Left Content */}
  <div className="max-w-xl space-y-6 text-white">
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-300">
      ArshithFresh
    </p>

    <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
      Start selling online.
      <br />
      Grow your business faster.
    </h1>

    <p className="text-base text-white/80">
      Create your store, add products, and start receiving orders in minutes.
      No commission. No hidden charges. Built for Indian sellers.
    </p>

    <div className="flex flex-wrap gap-4 pt-4">
      <button
        type="button"
        onClick={() => navigate('/register')}
        className="rounded-lg bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-md transition hover:bg-yellow-300"
      >
        Start for Free
      </button>

      <button
        type="button"
        onClick={() => {
          const el = document.getElementById('latest-products')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
        className="rounded-lg border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
      >
        Explore Products
      </button>
    </div>

    <div className="flex gap-6 pt-6 text-sm text-white/70">
      <div>
        <p className="text-lg font-bold text-white">0%</p>
        Commission
      </div>
      <div>
        <p className="text-lg font-bold text-white">Instant</p>
        Payouts
      </div>
      <div>
        <p className="text-lg font-bold text-white">Easy</p>
        Onboarding
      </div>
    </div>
  </div>

  {/* Right Side Card */}
  <div className="mt-12 w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl lg:mt-0">
    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
      Platform Snapshot
    </h3>

    <div className="mt-6 space-y-4 text-sm text-gray-700">
      <div className="flex justify-between">
        <span>Active Sellers</span>
        <span className="font-semibold">
          {users.filter((u) => u.role === 'seller').length}
        </span>
      </div>

      <div className="flex justify-between">
        <span>Products Listed</span>
        <span className="font-semibold">{products.length}</span>
      </div>

      <div className="flex justify-between">
        <span>Avg. Response</span>
        <span className="font-semibold text-green-600">120ms</span>
      </div>
    </div>

    <div className="mt-6 rounded-lg bg-[#094b3d] px-4 py-3 text-center text-sm font-medium text-white">
      Go live in minutes 🚀
    </div>
  </div>
</section>

      {/* Latest products */}
      <section id="latest-products" className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-white">Latest Products</h2>
            <p className="text-xs text-white/60">
              A sample feed of the commerce apps your sellers are shipping.
            </p>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {latestProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

            {/* HOW IT WORKS SECTION */}
      <section className="space-y-10 rounded-3xl bg-white px-6 py-14 text-gray-900 shadow-xl">
        <div className="text-center space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#094b3d]">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl font-bold">
            Go from signup to first order in days
          </h2>
          <p className="text-sm text-gray-500">
            A guided onboarding for busy store owners.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {[
              {
                title: 'Create account',
                desc: 'Start with mobile & email verification.',
              },
              {
                title: 'Complete KYC',
                desc: 'Add GST, PAN, bank details & address.',
              },
              {
                title: 'Add products',
                desc: 'Upload SKUs, prices, images & stock.',
              },
              {
                title: 'Start receiving orders',
                desc: 'Fulfil orders & handover easily.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-xl border bg-gray-50 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#094b3d]/10 font-semibold text-[#094b3d]">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border-2 border-dashed border-[#094b3d]/30 p-6">
            <h3 className="text-lg font-semibold mb-4">What you need:</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Business PAN & GST (if available)</li>
              <li>✓ Bank passbook or cancelled cheque</li>
              <li>✓ Product photos</li>
              <li>✓ Pricing & stock</li>
            </ul>
          </div>
        </div>
      </section>

      {/* EARNINGS SECTION */}
      <section className="space-y-8 rounded-3xl bg-[#e6f2ee] px-6 py-14 text-gray-900 shadow-xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#094b3d]">
              EARNINGS & PAYOUTS
            </p>
            <h2 className="text-3xl font-bold">
              0% Commission. Keep 100% of your earnings.
            </h2>
            <p className="text-sm text-gray-600">
              No hidden fees. No platform charges.
            </p>

            <div className="rounded-2xl bg-white p-6 shadow-md border border-[#094b3d]/20 w-56">
              <p className="text-3xl font-bold text-[#094b3d]">₹0</p>
              <p className="text-sm text-gray-500">
                Platform Commission Forever
              </p>
            </div>

            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Instant or weekly payouts after KYC</li>
              <li>• No listing fee or catalog charges</li>
              <li>• Transparent order-wise payouts</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="h-48 w-48 rounded-full bg-[#094b3d]/10 flex items-center justify-center text-6xl">
              🛒
            </div>
          </div>
        </div>
      </section>

          {/* BASIC FOOTER - ONLY HOME PAGE */}
      <footer className="mt-16 border-t border-white/20 pt-6 pb-8 text-center text-xs text-white/70">
        <p>© {new Date().getFullYear()} Seller.ArshithFresh. All rights reserved.</p>
        <p className="mt-2 text-white/50">
          Empowering sellers. Managing commerce.
        </p>
      </footer>

      

      
    </div>
  )
}

export default Home




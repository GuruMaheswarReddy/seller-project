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
      {/* Hero with glassmorphism and gradient background */}
      <section className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 px-6 py-10 shadow-lg sm:px-10 lg:flex lg:items-center lg:justify-between backdrop-blur-xl">
        <div className="pointer-events-none absolute -top-40 -left-40 h-72 w-72 rounded-full bg-[#094b3d]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-72 w-72 rounded-full bg-[#094b3d]/30 blur-3xl" />

        <div className="relative max-w-xl space-y-6">
          <p className="inline-flex rounded-full bg-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/40">
            BlackCart SaaS
          </p>
          <h1 className="text-balance bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
            Empowering Sellers.
            <br />
            Managing Commerce.
          </h1>
          <p className="max-w-lg text-sm text-white/90 sm:text-base">
            BlackCart gives modern commerce teams a single pane of glass to manage
            products, sellers and orders in real time. Built for scale, tuned for
            performance, and wrapped in a modern SaaS experience.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => navigate('/register')}
             className="rounded-full bg-gradient-to-r from-white to-white/90 px-6 py-2 text-sm font-semibold text-[#094b3d] shadow-xl shadow-white/40 transition hover:-translate-y-0.5 hover:shadow-white/60"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('latest-products')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="rounded-full border border-white/40 bg-white/10 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-white/30 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/60 hover:text-white"
            >
              View Products
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-white/70">
            <div className="rounded-full bg-white/20 px-3 py-1">
              <span className="font-semibold text-white">Live</span> seller &amp;
              order visibility
            </div>
            <div className="rounded-full bg-white/20 px-3 py-1">
              Multi-tenant, API-first, commerce ready
            </div>
          </div>
        </div>

        {/* Glass card with company details */}
        <div className="relative mt-10 w-full max-w-sm lg:mt-0">
          <div className="rounded-3xl border border-white/30 bg-white/20 p-5 shadow-2xl shadow-white/30 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Platform snapshot
              </p>
              <span className="h-2 w-2 rounded-full bg-white shadow shadow-white/70" />
            </div>
            <div className="mt-4 space-y-3 text-xs text-white/90">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Active sellers</span>
                <span className="font-semibold text-white">
                  {users.filter((u) => u.role === 'seller').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Products in catalog</span>
                <span className="font-semibold text-white">
                  {products.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Latency (P95)</span>
                <span className="font-semibold text-white">120ms</span>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-white to-white/90 px-4 py-3 text-xs font-medium text-[#094b3d] shadow-lg shadow-white/50">
              <p>Deploy your commerce ops in minutes, not months.</p>
              <p className="mt-1 text-[11px] opacity-80">
                Built for admins, sellers and growth teams out of the box.
              </p>
            </div>
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




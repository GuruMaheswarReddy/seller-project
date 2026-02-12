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
    <div className="space-y-14">
      {/* Hero with glassmorphism and gradient background */}
      <section className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-400/20 via-yellow-500/10 to-yellow-600/20 px-6 py-10 shadow-2xl shadow-yellow-500/30 backdrop-blur-2xl sm:px-10 lg:flex lg:items-center lg:justify-between">
        <div className="pointer-events-none absolute -top-40 -left-40 h-72 w-72 rounded-full bg-yellow-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-72 w-72 rounded-full bg-yellow-600/25 blur-3xl" />

        <div className="relative max-w-xl space-y-6">
          <p className="inline-flex rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-yellow-300 ring-1 ring-yellow-400/40">
            BlackCart SaaS
          </p>
          <h1 className="text-balance bg-gradient-to-r from-yellow-50 via-yellow-200 to-yellow-500 bg-clip-text text-3xl font-bold leading-tight text-transparent sm:text-4xl lg:text-5xl">
            Empowering Sellers.
            <br />
            Managing Commerce.
          </h1>
          <p className="max-w-lg text-sm text-gray-200/90 sm:text-base">
            BlackCart gives modern commerce teams a single pane of glass to manage
            products, sellers and orders in real time. Built for scale, tuned for
            performance, and wrapped in a modern SaaS experience.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => navigate('/register')}
              className="rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-2 text-sm font-semibold text-black shadow-xl shadow-yellow-500/40 transition hover:-translate-y-0.5 hover:shadow-yellow-500/60"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('latest-products')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="rounded-full border border-yellow-500/40 bg-black/40 px-5 py-2 text-sm font-medium text-yellow-200 shadow-lg shadow-black/60 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-yellow-400 hover:text-yellow-300"
            >
              View Products
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-300">
            <div className="rounded-full bg-black/40 px-3 py-1">
              <span className="font-semibold text-yellow-300">Live</span> seller &amp;
              order visibility
            </div>
            <div className="rounded-full bg-black/40 px-3 py-1">
              Multi-tenant, API-first, commerce ready
            </div>
          </div>
        </div>

        {/* Glass card with company details */}
        <div className="relative mt-10 w-full max-w-sm lg:mt-0">
          <div className="rounded-3xl border border-yellow-500/30 bg-black/50 p-5 shadow-2xl shadow-black/70 backdrop-blur-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                Platform snapshot
              </p>
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow shadow-emerald-400/70" />
            </div>
            <div className="mt-4 space-y-3 text-xs text-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Active sellers</span>
                <span className="font-semibold text-yellow-300">
                  {users.filter((u) => u.role === 'seller').length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Products in catalog</span>
                <span className="font-semibold text-yellow-300">
                  {products.length}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Latency (P95)</span>
                <span className="font-semibold text-emerald-300">120ms</span>
              </div>
            </div>
            <div className="mt-5 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-3 text-xs font-medium text-black shadow-lg shadow-yellow-500/50">
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
            <p className="text-xs text-gray-400">
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
    </div>
  )
}

export default Home



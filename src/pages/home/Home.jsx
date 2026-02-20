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

  <div>
    <h3 className="text-lg font-semibold text-gray-900">
      Seller growth snapshot
    </h3>
    <p className="text-xs text-gray-500">
      Real marketplace insights
    </p>
  </div>

  <div className="flex justify-between">
    <span>Average monthly orders</span>
    <span className="font-semibold text-green-600">+38%</span>
  </div>

  <div className="flex justify-between">
    <span>On-time payouts</span>
    <span className="font-semibold text-green-600">99.1%</span>
  </div>

</div>

    <div className="mt-6 rounded-lg bg-[#094b3d] px-4 py-3 text-center text-sm font-medium text-white">
      Go live in minutes 🚀
    </div>
  </div>
</section>



     {/* WHY SELLERS CHOOSE US */}
<section className="space-y-12 py-16">
  <div className="text-center space-y-4">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300">
      WHY SELLERS CHOOSE US
    </p>

    <h2 className="text-3xl font-bold text-white sm:text-4xl">
      Built for local & growing brands
    </h2>

    <p className="mx-auto max-w-2xl text-sm text-white/70 sm:text-base">
      Sell more with tools designed for every type of seller.
      From onboarding to payouts, everything is built for scale.
    </p>
  </div>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    
    {/* Card 1 */}
    <div className="group rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-2xl">
        📍
      </div>
      <h3 className="text-lg font-semibold text-gray-900">
        Pan-India Reach
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Reach customers across India with promotional visibility
        and wide marketplace access.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-2xl">
        🚀
      </div>
      <h3 className="text-lg font-semibold text-gray-900">
        Simple Onboarding
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Upload KYC, add catalog, and start receiving orders
        within minutes.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-2xl">
        📊
      </div>
      <h3 className="text-lg font-semibold text-gray-900">
        Growth Insights
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Real-time analytics, repeat buyer insights,
        and smart pricing tools.
      </p>
    </div>

    {/* Card 4 */}
    <div className="group rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d]/10 text-2xl">
        💬
      </div>
      <h3 className="text-lg font-semibold text-gray-900">
        Seller-First Support
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        WhatsApp & callback support for catalog,
        pricing, and growth help.
      </p>
    </div>

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

   {/* WHY SELLERS LOVE ARSHITHFRESH */}
<section className="bg-white py-20">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* LEFT SIDE */}
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Why Sellers Love ArshithFresh
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          All the benefits that come with selling on ArshithFresh are 
          designed to help you sell more, and make it easier to grow 
          your business.
        </p>
      </div>

      {/* RIGHT SIDE BENEFITS BOX */}
      <div className="rounded-3xl border border-[#094b3d]/20 bg-[#f4fbf8] p-8 shadow-sm">

        {/* Item 1 */}
        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d] font-bold">
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

        <hr className="my-6 border-[#094b3d]/10" />

        {/* Item 2 */}
        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d]">
            ₹
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              0 Penalty Charges
            </h3>
            <p className="mt-2 text-gray-600">
              Sell without fear of cancellation charges or late dispatch penalties.
            </p>
          </div>
        </div>

        <hr className="my-6 border-[#094b3d]/10" />

        {/* Item 3 */}
        <div className="flex gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#094b3d]/10 text-[#094b3d]">
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

        <hr className="my-6 border-[#094b3d]/10" />

        {/* Item 4 */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ease of Doing Business
          </h3>

          <div className="grid gap-3 sm:grid-cols-2 text-gray-700">
            <p>✔ Easy Product Listing</p>
            <p>✔ Lowest Shipping Cost</p>
            <p>✔ 7-Day Payment Cycle</p>
            <p>✔ Transparent Order Tracking</p>
          </div>
        </div>

      </div>
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

      {/* SELLER SUPPORT SECTION */}
<section className="bg-[#f9fafb] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

      {/* LEFT SIDE */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight sm:text-5xl">
          ArshithFresh Seller Support <br className="hidden sm:block" />
          Available 24/7
        </h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-8">

        <p className="text-lg text-gray-600 leading-relaxed">
          Our seller support team is available to solve all your doubts and 
          issues before and after you start your online selling journey.
        </p>

        {/* Contact Box */}
        <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-sm border border-gray-200">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#094b3d] text-white text-xl">
            ✉
          </div>

          <div>
            <p className="text-gray-700">
              You can reach out to
            </p>
            <a
              href="mailto:support@arshithfresh.com"
              className="text-lg font-semibold text-[#094b3d] hover:underline"
            >
              support@arshithfresh.com
            </a>
          </div>

        </div>

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

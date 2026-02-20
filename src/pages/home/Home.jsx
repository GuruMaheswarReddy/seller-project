import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext.jsx'
import ProductCard from '../../components/ProductCard.jsx'

const Home = () => {
  const navigate = useNavigate()
  const { products, users } = useAppContext()

  const latestProducts = products.slice(0, 12).map((p) => {
    const seller = users.find((u) => u.id === p.sellerId)
    return {
      ...p,
      sellerName: seller?.name ?? 'Premium Partner',
    }
  })

  return (
    <div className="bg-[#0b0f19] min-h-screen font-sans selection:bg-emerald-500 selection:text-white">
      {/* TOP NAV BANNER - Minimalist */}
      <section className="bg-emerald-600 px-4 py-2 border-b border-emerald-500/30">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-white text-xs font-medium tracking-widest uppercase">
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><span className="text-emerald-200">✓</span> Free Delivery</span>
            <span className="flex items-center gap-1"><span className="text-emerald-200">✓</span> 0% Commission</span>
          </div>
          <span className="hidden md:block">Support: 1800-XXX-XXXX</span>
        </div>
      </section>

      {/* HERO SECTION - Sophisticated Dark Mode */}
      <section className="relative overflow-hidden pt-10 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
              Next-Gen Marketplace
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Elevate Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Business Growth
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Join India's most transparent selling platform. No hidden fees, instant payouts, and premium support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => navigate('/register')}
                className="bg-emerald-500 hover:bg-emerald-400 text-[#0b0f19] px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-emerald-500/40"
              >
                Start Selling Now
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-md">
                Download App
              </button>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-[2rem] blur-2xl group-hover:bg-emerald-500/30 transition duration-1000"></div>
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" 
              alt="Premium Selling"
              className="relative w-full h-[450px] object-cover rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS ROW - Glassmorphism Card */}
      <section className="max-w-[1200px] mx-auto px-4 -mt-10 mb-20 relative z-20">
        <div className="bg-[#161b2a]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 shadow-2xl">
          {[
            { val: '50K+', label: 'Verified Sellers' },
            { val: '₹250Cr+', label: 'Annual Revenue' },
            { val: '20K+', label: 'Serviceable Areas' },
            { val: '4.8/5', label: 'App Rating' }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-gray-500 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES - Modern Icons */}
      <section className="py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Curated Categories</h2>
            <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Grocery', icon: '🥦', color: 'bg-green-500/10' },
              { name: 'Fashion', icon: '👗', color: 'bg-pink-500/10' },
              { name: 'Electronics', icon: '📱', color: 'bg-blue-500/10' },
              { name: 'Home', icon: '🏠', color: 'bg-orange-500/10' },
              { name: 'Beauty', icon: '💄', color: 'bg-purple-500/10' },
              { name: 'Sports', icon: '⚽', color: 'bg-yellow-500/10' }
            ].map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`${cat.color} rounded-2xl p-8 text-center border border-white/5 group-hover:border-emerald-500/50 transition-all duration-300`}>
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <div className="font-semibold text-gray-300 group-hover:text-white">{cat.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIVE PRODUCTS - Premium Grid */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Live Marketplace</h2>
              <p className="text-gray-500">Trending products across all categories</p>
            </div>
            <button className="text-emerald-400 font-bold flex items-center gap-2 group">
              Browse All <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestProducts.map((product) => (
              <div key={product.id} className="bg-[#161b2a] rounded-3xl overflow-hidden border border-white/5 hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image || "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?w=400&h=400&fit=crop"} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                    {product.sellerName}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3 line-clamp-1 group-hover:text-emerald-400 transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-white">₹{product.price}</span>
                        <span className="text-xs text-gray-500 line-through">₹{Math.round(product.price * 1.3)}</span>
                    </div>
                    <div className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-lg border border-emerald-500/20">
                        25% OFF
                    </div>
                  </div>
                  <button className="w-full py-3 bg-white/5 hover:bg-emerald-500 hover:text-[#0b0f19] text-white rounded-xl font-bold transition-all border border-white/10 hover:border-emerald-500">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ARSHITHFRESH - Feature Grid */}
      <section className="py-24 px-4 bg-[#0b0f19]">
        <div className="max-w-[1200px] mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The New Standard of Selling</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">We've removed the barriers. No commissions, no complicated paperwork, just business growth.</p>
        </div>
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Instant Live', desc: 'From signup to sales in under 5 minutes.', icon: '⚡' },
            { title: 'Zero Fees', desc: 'Keep every rupee you earn. No commission.', icon: '💎' },
            { title: 'Logistics', desc: 'Doorstep pickup across 20,000+ pincodes.', icon: '🚚' },
            { title: 'Analytics', desc: 'Advanced dashboards to track performance.', icon: '📈' }
          ].map((f, i) => (
            <div key={i} className="p-8 bg-[#161b2a] border border-white/5 rounded-3xl hover:-translate-y-2 transition-all">
              <div className="text-4xl mb-6">{f.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA - Elegant Gradient */}
      <section className="px-4 py-20">
        <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-emerald-600 to-cyan-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-xl mx-auto opacity-90">Join 50,000+ successful sellers who trust ArshithFresh for their online growth.</p>
            <button 
              onClick={() => navigate('/register')}
              className="bg-white text-emerald-900 px-12 py-5 rounded-2xl font-extrabold text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimalist */}
      <footer className="py-12 px-4 border-t border-white/5 text-gray-500">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <div>© 2026 ArshithFresh. Excellence in E-commerce.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

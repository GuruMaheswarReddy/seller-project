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
      sellerName: seller?.name ?? 'Unknown Seller',
    }
  })

  return (
    <div className="bg-[#094b3d] min-h-screen">
      {/* TOP BANNER - Meesho Style */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-white text-sm">
          <span>🏆 FREE DELIVERY | NO COMMISSION | INSTANT PAYOUTS</span>
          <span>📞 Call: 1800-XXX-XXXX</span>
        </div>
      </section>

      {/* HERO BANNER - Large Image + Bold CTA */}
      <section className="relative">
        <div className="max-w-[1200px] mx-auto px-4 pt-4 pb-8">
          <img 
            src="https://images.unsplash.com/photo-1571896349840-0d6f5e818aca?w=1200&h=400&fit=crop" 
            alt="Sell Online"
            className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute bottom-8 left-4 md:left-8 text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              Sell Online 
              <span className="block text-yellow-400 text-5xl md:text-7xl">₹0 Commission</span>
            </h1>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/register')}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                🚀 START SELLING FREE
              </button>
              <button className="border-2 border-white px-8 py-4 rounded-lg font-bold text-white hover:bg-white hover:text-black transition-all">
                📱 DOWNLOAD APP
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS ROW - Meesho Style */}
      <section className="bg-white/10 backdrop-blur-sm py-6 px-4">
        <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-6 text-center text-white">
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-1">50K+</div>
            <div className="text-sm">Active Sellers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-1">₹250Cr+</div>
            <div className="text-sm">Total Sales</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-1">20K+</div>
            <div className="text-sm">Pincodes</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400 mb-1">99.9%</div>
            <div className="text-sm">Success Rate</div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">POPULAR CATEGORIES</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Grocery', icon: '🥦' },
              { name: 'Fashion', icon: '👗' },
              { name: 'Electronics', icon: '📱' },
              { name: 'Home', icon: '🏠' },
              { name: 'Beauty', icon: '💄' },
              { name: 'Sports', icon: '⚽' }
            ].map((cat, i) => (
              <div key={i} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-white/20 transition-all border border-white/20">
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-bold text-white text-lg">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS - Meesho Grid Style */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-white">🔥 LIVE PRODUCTS</h2>
            <button className="text-yellow-400 font-bold text-lg hover:text-yellow-300">View All →</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {latestProducts.map((product, index) => (
              <div key={product.id} className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="w-full h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden mb-3 group-hover:scale-105 transition-transform">
                  <img 
                    src={product.image || "https://images.unsplash.com/photo-1608043152269-423dbba4e7e4?w=200&h=200&fit=crop"} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg line-clamp-2 text-gray-900 h-12">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#094b3d]">₹{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">₹{Math.round(product.price * 1.3)}</span>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">25% OFF</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                    <span className="text-gray-600">(1.2k)</span>
                  </div>
                  <div className="text-xs text-gray-600 capitalize">{product.sellerName}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ARSHITHFRESH - Meesho Cards */}
      <section className="bg-white/5 py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">WHY CHOOSE ARSHITHFRESH?</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Instant Live',
                desc: 'Go live in 5 mins with simple KYC'
              },
              {
                icon: '💰',
                title: '0% Commission',
                desc: 'Keep 100% profits forever'
              },
              {
                icon: '📦',
                title: 'Pan India',
                desc: '20K+ pincodes covered'
              },
              {
                icon: '📊',
                title: 'Smart Tools',
                desc: 'Analytics + Growth insights'
              }
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl mb-4 mx-auto w-16 h-16 bg-yellow-400/20 rounded-2xl flex items-center justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - Simple Steps */}
      <section className="py-12 px-4">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">3 EASY STEPS TO START</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Sign Up', desc: 'Mobile + Email (2 mins)' },
              { step: '2', title: 'Add Products', desc: 'Upload catalog (5 mins)' },
              { step: '3', title: 'Get Orders', desc: 'Start earning instantly' }
            ].map((s, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-yellow-400 text-black rounded-full font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-all">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12 px-4 text-center text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Sell Online?</h2>
          <p className="text-xl mb-8">Join 50K+ sellers making money daily</p>
          <button 
            onClick={() => navigate('/register')}
            className="bg-white text-orange-500 px-12 py-5 rounded-xl font-bold text-2xl shadow-2xl hover:shadow-white/50 transform hover:scale-105 transition-all"
          >
            START SELLING NOW 🚀
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#063d32] py-8 px-4 text-white/70 text-center text-sm border-t border-white/20">
        <div className="max-w-[1200px] mx-auto">
          <p>© 2026 ArshithFresh. All rights reserved | GST: 37XXXXX | Help: 1800-XXX-XXXX</p>
          <p className="mt-2">Empowering 50K+ Indian Sellers | Made in India 🇮🇳</p>
        </div>
      </footer>
    </div>
  )
}

export default Home






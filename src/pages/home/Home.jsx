import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext.jsx'
import { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard.jsx'

const Home = () => {
  const navigate = useNavigate()
  const { products, users } = useAppContext()
  const [currentSlide, setCurrentSlide] = useState(0)

  const latestProducts = products.slice(0, 8).map((p) => {
    const seller = users.find((u) => u.id === p.sellerId)
    return {
      ...p,
      sellerName: seller?.name ?? 'Unknown Seller',
    }
  })

  // Auto-scroll hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const heroSlides = [
    {
      title: "Start Selling Online",
      subtitle: "Grow your business 10x faster",
      desc: "Zero commission. Instant payouts. Built for Indian sellers.",
      cta: "Start Free Trial"
    },
    {
      title: "Reach Millions",
      subtitle: "Pan-India marketplace",
      desc: "Connect with customers across 20,000+ pincodes instantly.",
      cta: "Explore Reach"
    },
    {
      title: "Scale Effortlessly",
      subtitle: "Tools that grow with you",
      desc: "Analytics, insights, and automation for serious sellers.",
      cta: "See Features"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-900 overflow-x-hidden">
      {/* HERO SECTION - GLASSMORPHISM */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-ping"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center px-6">
          {/* Left Content */}
          <div className="space-y-8 lg:max-w-lg">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-ping"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-white">LIVE NOW</span>
            </div>

            {/* Sliding Hero Text */}
            <div className="space-y-6">
              <h1 className={`text-5xl md:text-7xl font-black bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent transform transition-all duration-700 ${currentSlide === 0 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
                Start Selling
              </h1>
              <h1 className={`text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text text-transparent transform transition-all duration-700 delay-200 ${currentSlide === 1 ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}>
                Reach Millions
              </h1>
              <h1 className={`text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent transform transition-all duration-700 delay-400 ${currentSlide === 2 ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
                Scale Fast
              </h1>
              
              <p className="text-xl text-white/90 font-medium leading-relaxed">
                {heroSlides[currentSlide].desc}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/register')}
                className="group relative px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300 transform -skew-x-12 -translate-x-20 group-hover:translate-x-0 transition-transform duration-1000"></span>
                <span className="relative z-10 flex items-center gap-2">
                  {heroSlides[currentSlide].cta} 
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
                Watch Demo
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 4.466v11.068c0 .59.656.936 1.14.62l5.771-4.534a.986.986 0 000-1.242l-5.771-4.534A1.002 1.002 0 008 4.466z"/>
                </svg>
              </button>
            </div>

            {/* Progress Dots */}
            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-yellow-400 scale-125 shadow-lg' 
                      : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 3D Product Mockup */}
          <div className="relative">
            <div className="relative z-10 w-full max-w-md mx-auto transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl p-6 border-2 border-white/30">
                  <div className="text-6xl mb-4">🛍️</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your Store</h3>
                  <p className="text-white/80 text-sm mb-4">Live in 5 mins</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Orders</span>
                      <span className="font-bold text-yellow-400">1,247</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Revenue</span>
                      <span className="font-bold text-emerald-400">₹4.2L</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS - FLOATING CARDS */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/50 to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: "50K+", label: "Active Sellers", icon: "👥" },
              { num: "₹250Cr+", label: "GMV", icon: "💰" },
              { num: "20K+", label: "Pincodes", icon: "📍" },
              { num: "99.9%", label: "Uptime", icon: "⚡" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="group relative p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-4"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent mb-2">
                  {stat.num}
                </h3>
                <p className="text-white/80 font-medium">{stat.label}</p>
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-emerald-400 to-yellow-400 opacity-0 group-hover:opacity-100 rounded-3xl blur transition-all duration-500 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="inline-flex px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-black font-bold text-lg shadow-xl">
            🚀 Why 50K+ Sellers Choose Us
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mt-8 bg-gradient-to-r from-white via-emerald-200 to-teal-300 bg-clip-text">
            Everything You Need<br/>To Sell Online
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "⚡",
              title: "Lightning Onboarding",
              desc: "Upload KYC, add products, go live in under 10 minutes. No complex setup."
            },
            {
              icon: "💰",
              title: "Zero Commission",
              desc: "Keep 100% of your earnings forever. No hidden fees, no surprises."
            },
            {
              icon: "📈",
              title: "Smart Analytics",
              desc: "Real-time insights, customer behavior, and growth recommendations."
            },
            {
              icon: "🚚",
              title: "Pan-India Delivery",
              desc: "Reach 20K+ pincodes with reliable logistics partners."
            }
          ].map((feature, i) => (
            <div key={i} className="group p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-3xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-xl text-white/80 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-6xl mb-8">🎯</div>
          <h2 className="text-5xl font-black text-white mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text">
            Ready to Start Selling?
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Join 50K+ sellers growing their business on ArshithFresh today.
          </p>
          <button
            onClick={() => navigate('/register')}
            className="px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-xl rounded-3xl shadow-2xl hover:shadow-yellow-500/50 transform hover:-translate-y-2 transition-all duration-300 inline-flex items-center gap-4"
          >
            Start Selling Free
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 pt-16 pb-12 text-center text-white/70 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-emerald-300 bg-clip-text text-transparent mb-4">
            ArshithFresh
          </h3>
          <p className="text-lg mb-8">Empowering Indian sellers. Scaling commerce.</p>
          <p>© {new Date().getFullYear()} ArshithFresh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home





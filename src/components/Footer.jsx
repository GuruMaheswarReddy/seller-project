import { useState } from "react"

const Footer = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="bg-[#094b3d] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Arshith Fresh
            </h3>

            <p className="text-base leading-relaxed text-white/80 mb-6">
              <span className="font-semibold text-white">
                Corporate Office —
              </span>{" "}
              Bengaluru, Karnataka, India - 560076
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          {/* SERVICES */}
          <div>
            <button
              onClick={() => toggleSection("services")}
              className="w-full text-left text-lg font-semibold mb-4 flex justify-between items-center lg:cursor-default"
            >
              Services
              <span className="lg:hidden">
                {openSection === "services" ? "−" : "+"}
              </span>
            </button>

            <ul
              className={`space-y-3 text-base text-white/80 ${
                openSection === "services" ? "block" : "hidden"
              } lg:block`}
            >
              <li><a href="https://arshithfresh.com/pages/about-us" className="hover:text-yellow-400">About Us</a></li>
              <li><a href="https://arshithfresh.com/pages/careers" className="hover:text-yellow-400">Careers</a></li>
              <li><a href="https://arshithfresh.com/collections/all" className="hover:text-yellow-400">Shop All</a></li>
              <li><a href="https://arshithfresh.com/blogs/news" className="hover:text-yellow-400">Blog</a></li>
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <button
              onClick={() => toggleSection("policies")}
              className="w-full text-left text-lg font-semibold mb-4 flex justify-between items-center lg:cursor-default"
            >
              Policies
              <span className="lg:hidden">
                {openSection === "policies" ? "−" : "+"}
              </span>
            </button>

            <ul
              className={`space-y-3 text-base text-white/80 ${
                openSection === "policies" ? "block" : "hidden"
              } lg:block`}
            >
              <li><a href="https://arshithfresh.com/policies/privacy-policy" className="hover:text-yellow-400">Privacy Policy</a></li>
              <li><a href="https://arshithfresh.com/policies/shipping-policy" className="hover:text-yellow-400">Shipping Info</a></li>
              <li><a href="https://arshithfresh.com/policies/refund-policy" className="hover:text-yellow-400">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <button
              onClick={() => toggleSection("contact")}
              className="w-full text-left text-lg font-semibold mb-4 flex justify-between items-center lg:cursor-default"
            >
              Need Help?
              <span className="lg:hidden">
                {openSection === "contact" ? "−" : "+"}
              </span>
            </button>

            <div
              className={`text-base text-white/80 space-y-3 ${
                openSection === "contact" ? "block" : "hidden"
              } lg:block`}
            >
              <p>📍 Bengaluru, Karnataka</p>
              <p>📞 <a href="tel:+919945676029" className="hover:text-yellow-400">+91 9945676029</a></p>
              <p>✉ <a href="mailto:support@arshithfresh.com" className="hover:text-yellow-400">support@arshithfresh.com</a></p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-16 pt-6 text-center text-base text-white/70">
          © {new Date().getFullYear()} Arshith Fresh India Pvt Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer

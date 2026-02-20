const Footer = () => {
  return (
    <footer className="bg-[#094b3d] text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Arshith Fresh
            </h3>

            <p className="text-sm mb-6 text-white/80">
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
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://arshithfresh.com/pages/about-us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://arshithfresh.com/pages/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://arshithfresh.com/collections/all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Shop All
                </a>
              </li>
              <li>
                <a
                  href="https://arshithfresh.com/blogs/news"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* POLICIES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://arshithfresh.com/policies/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://arshithfresh.com/policies/shipping-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Shipping Info
                </a>
              </li>
              <li>
                <a
                  href="https://arshithfresh.com/policies/refund-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Need Help?</h3>

            <p className="text-sm mb-2 text-white/80">
              📍 Bengaluru, Karnataka
            </p>

            <p className="text-sm mb-2">
              📞{" "}
              <a
                href="tel:+919945676029"
                className="hover:text-yellow-400 transition"
              >
                +91 9945676029
              </a>
            </p>

            <p className="text-sm mb-4">
              ✉{" "}
              <a
                href="mailto:support@arshithfresh.com"
                className="hover:text-yellow-400 transition"
              >
                support@arshithfresh.com
              </a>
            </p>
          </div>

        </div>

        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Arshith Fresh India Pvt Ltd. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer

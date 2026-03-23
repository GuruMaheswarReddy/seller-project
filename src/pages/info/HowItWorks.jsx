
import heroImg from "../../assets/Gemini_Generated_Image_ek2uhiek2uhiek2u.png";
const HowItWorks = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

     <section className="bg-[#fdf7fb] py-20 px-6 relative overflow-hidden">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

    {/* Left Content */}
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        How to Sell on{" "}
        <span className="text-[#094b3d]">Arshith Supplier</span>
      </h1>

      <p className="text-lg text-gray-600 mb-6 max-w-md">
        Become a seller and join thousands of businesses growing their sales every day across India.
      </p>

      <div className="flex max-w-md shadow-sm">
        <div className="flex items-center px-3 border border-gray-300 rounded-l-md bg-white text-gray-500">
          +91
        </div>

        <input
          type="text"
          placeholder="Enter Your Mobile Number"
          className="w-full px-4 py-3 border-t border-b border-gray-300 focus:outline-none"
        />

        <button className="bg-[#094b3d] hover:bg-[#07382e] text-white px-6 py-3 rounded-r-md font-medium transition">
          Start Selling
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="relative flex justify-center">
      <div className="absolute -right-16 -bottom-16 w-[380px] h-[380px] bg-[#f3d9e6] rounded-full z-0"></div>

      <img
        src={heroImg}
        alt="seller business"
        className="relative z-10 w-full max-w-md"
      />
    </div>

  </div>
</section>
      {/* ================= SIMPLE STEPS SECTION ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Become a seller in simple steps
          </h2>

          <div className="grid md:grid-cols-4 gap-8 bg-white p-10 rounded-xl shadow">

            {[
              "Sign up for free",
              "Upload your product & catalog",
              "Receive & Ship Orders",
              "Receive Payments",
            ].map((step, index) => (
              <div key={index}>
                <div className="w-10 h-10 bg-[#094b3d] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="font-semibold mb-2">{step}</h3>
                <p className="text-sm text-gray-600">
                  Start your journey easily with our simple process.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* LEFT MENU */}
          <div className="md:col-span-1">
            <ul className="space-y-4 sticky top-24">
              <li className="font-semibold text-[#094b3d]">Register Your Account</li>
              <li>Listing Your Product</li>
              <li>Getting Orders</li>
              <li>Delivery & Payment</li>
            </ul>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:col-span-3 space-y-16">

            {/* Register Account */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Register Your Account
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Mobile Number & Email ID",
                  "GSTIN Number (for GST sellers)",
                  "Active Bank Account",
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow">
                    <h4 className="font-semibold">{item}</h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Listing Product */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Listing Your Product
              </h2>
              <p className="text-gray-600 mb-4">
                Upload your product catalog from the supplier dashboard.
                Add images, price, GST details and description.
              </p>
            </div>

            {/* Getting Orders */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Getting Orders
              </h2>

              <ul className="list-disc ml-6 space-y-2 text-gray-600">
                <li>List more catalogs</li>
                <li>Set the right price</li>
                <li>Use price recommendation tools</li>
                <li>Follow market trends</li>
              </ul>
            </div>

            {/* Delivery & Payment */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Delivery & Payment
              </h2>
              <p className="text-gray-600">
                After receiving orders, pack products and hand over to
                logistics partner. Payment will be credited directly
                to your bank account.
              </p>

              {/* Fulfillment Steps */}
              <div className="grid md:grid-cols-4 gap-6 mt-10 bg-white p-8 rounded-xl shadow text-center">
                {[
                  "Accept your order",
                  "Download label",
                  "Pack the product",
                  "Hand over to logistics",
                ].map((item, index) => (
                  <div key={index}>
                    <div className="w-10 h-10 bg-[#094b3d] text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium">{item}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HowItWorks; 

const HowItWorks = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              How to Sell on Arshith Supplier
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Become a seller and grow your business across India.
            </p>

            <div className="flex">
              <input
                type="text"
                placeholder="Enter Your Mobile Number"
                className="border px-4 py-3 w-full rounded-l-md"
              />
              <button className="bg-[#094b3d] text-white px-6 rounded-r-md">
                Start Selling
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="seller"
              className="rounded-lg"
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
              {
                title: "Sign up for free",
                img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png"
              },
              {
                title: "Upload your product & catalog",
                img: "https://cdn-icons-png.flaticon.com/512/1828/1828925.png"
              },
              {
                title: "Receive & Ship Orders",
                img: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png"
              },
              {
                title: "Receive Payments",
                img: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
              }
            ].map((step, index) => (
              <div key={index}>
                <div className="w-10 h-10 bg-[#094b3d] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>

                <img
                  src={step.img}
                  alt="step"
                  className="w-12 mx-auto mb-4"
                />

                <h3 className="font-semibold mb-2">{step.title}</h3>

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
                  {
                    text: "Mobile Number & Email ID",
                    img: "https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  },
                  {
                    text: "GSTIN Number (for GST sellers)",
                    img: "https://cdn-icons-png.flaticon.com/512/3135/3135679.png"
                  },
                  {
                    text: "Active Bank Account",
                    img: "https://cdn-icons-png.flaticon.com/512/2830/2830284.png"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow text-center">

                    <img
                      src={item.img}
                      alt="info"
                      className="w-12 mx-auto mb-4"
                    />

                    <h4 className="font-semibold">{item.text}</h4>

                  </div>
                ))}
              </div>
            </div>

            {/* Listing Product */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Listing Your Product
              </h2>

              <img
                src="https://images.pexels.com/photos/6214457/pexels-photo-6214457.jpeg"
                alt="listing"
                className="rounded-xl mb-6"
              />

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

              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                alt="orders"
                className="rounded-xl mb-6"
              />

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

              <img
                src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg"
                alt="delivery"
                className="rounded-xl mb-6"
              />

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

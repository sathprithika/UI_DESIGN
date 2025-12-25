import React from "react";

export default function LandingPage() {
  return (
    <div className="bg-white text-[#191919]">
      {/*HEADER*/}
      <header className="flex justify-between items-center  px-6 md:px-16 py-4 md:py-6">
        <div className="flex items-center gap-2">
          <img
            className="w-10 h-10"
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRx6MXaK_mdIbvZyO2n-InZMqKW2WWU6yk4gpcGRW7oSFDZA9n5"
            alt="logo"
          ></img>
          <h1 className="font-bold text-2xl">FASHION</h1>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex gap-10 text-lg">
            <a href="#">CATALOGUE</a>
            <a href="#">FASHION</a>
            <a href="#">FAVOURITE</a>
            <a href="#">LIFESTYLE</a>
          </nav>
          <button className="bg-black text-white px-6 py-3 rounded-md">
            SIGN UP
          </button>
        </div>
      </header>

      {/*SECTION-1*/}
      <section className="max-w-7xl mx-auto mt-4 bg-[#f4f4f4] rounded-[24px] flex items-center justify-between px-8 py-8">
        <div>
          <h2 className="text-[80px] leading-[85px] font-black">
            <span className="inline-block bg-white px-4 rotate-[-2deg]">
              LET'S
            </span>
            <br />
            EXPLORE
            <br />
            <span className="inline-block bg-[#f5e36b] px-4 rotate-[-2deg]">
              UNIQUE
            </span>
            <br />
            CLOTHES.
          </h2>
          <p className="mt-6 text-xl">
            Live for influential and innovative fashion!
          </p>
          <button className="mt-10 bg-black text-white px-10 py-4 text-lg rounded-md">
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
          alt="hero"
          className="w-[320px] rounded-3xl"
        />
      </section>

      {/* SECTION-2 */}
      <section className="bg-[#EBD96B] py-8 flex justify-evenly items-center mt-20">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"
          alt="H&M"
          className="h-10"
        />
        <img
          src="https://www.vhv.rs/dpng/d/506-5060493_obey-black-and-white-logo-hd-png-download.png"
          alt="OBEY"
          className="h-10 mix-blend-multiply"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png"
          alt="Shopify"
          className="h-10"
        />
        <img
          src="https://images.seeklogo.com/logo-png/29/1/lacoste-logo-png_seeklogo-298009.png"
          alt="LACOSTE"
          className="h-20 mix-blend-multiply"
        />
        <img
          src="https://www.svgrepo.com/show/303398/levis-logo.svg"
          alt="Levi's"
          className="h-20 mix-blend-multiply"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
          alt="Amazon"
          className="h-10"
        />
      </section>

      {/* SECTION-3 */}
      <section className="px-16 mt-24">
        <h3 className="text-4xl font-black mb-14">NEW ARRIVALS</h3>

        <div className="grid grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="w-[300px]">
            <img
              src="https://images.pexels.com/photos/8791226/pexels-photo-8791226.jpeg"
              className="rounded-3xl w-full h-[420px] object-cover"
              alt="Hoodies"
            />
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Hoodies & Sweatshirt</p>
                <p className="text-gray-500">Explore Now!</p>
              </div>
              <a href="#">
                <span className="text-2xl text-gray-500">→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[300px]">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              className="rounded-3xl w-full h-[420px] object-cover"
              alt="Coats"
            />
            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Coats & Parkas</p>
                <p className="text-gray-500">Explore Now!</p>
              </div>
              <a href="#">
                <span className="text-2xl text-gray-500">→</span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[300px]">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              className="rounded-3xl w-full h-[420px] object-cover"
              alt="Tees"
            />

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Tees & T-Shirt</p>
                <p className="text-gray-500">Explore Now!</p>
              </div>
              <a href="#">
                <span className="text-2xl text-gray-500">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION-4 */}
      <section className="bg-[#EBD96B]  mt-24 flex items-center justify-between px-10 py-10 relative overflow-hidden min-h-[45vh]">
        <span className="absolute top-12 left-20 text-white text-2xl">★</span>
        <span className="absolute top-24 right-32 text-white text-xl">★</span>
        <span className="absolute bottom-20 left-36 text-white text-xl">★</span>
        <span className="absolute bottom-14 right-24 text-white text-2xl">
          ★
        </span>

        <img
          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"
          className="w-[420px] h-[520px] object-cover rounded-3xl"
          alt="urban fashion model"
        />

        <div className="max-w-xl ml-20">
          <span className="inline-block bg-white px-6 py-2 text-[64px] font-black leading-[70px] rotate-[-2deg]">
            PAYDAY
          </span>

          <h2 className="text-[64px] font-black leading-[70px] mt-3">
            SALE NOW
          </h2>

          <p className="mt-6 text-xl max-w-md">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>

          <p className="mt-4 text-xl font-bold">1 June – 10 June 2021</p>

          <p className="mt-4 text-lg">*Terms & Conditions apply</p>

          <button className="mt-8 bg-black text-white px-12 py-4 rounded-md text-lg font-semibold hover:bg-gray-900 transition">
            SHOP NOW
          </button>
        </div>
      </section>

      {/* SECTION-5 */}
      <section className="px-16 mt-24">
        <h3 className="text-4xl font-black mb-14">YOUNG'S FAVOURITE</h3>

        <div className="grid grid-cols-2 gap-16">
          {/* Card 1 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
              className="w-full h-[420px] object-cover rounded-3xl"
              alt="Trending on Instagram"
            />

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">Trending on Instagram</p>
                <p className="text-gray-500">Explore Now!</p>
              </div>
              <a href="#">
                <span className="text-2xl text-gray-500">→</span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              className="w-full h-[420px] object-cover rounded-3xl"
              alt="All under $40"
            />

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-xl font-semibold">All Under $40</p>
                <p className="text-gray-500">Explore Now!</p>
              </div>
              <a href="#">
                <span className="text-2xl text-gray-500">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION- 6 */}
      <section className="flex justify-between items-center px-16 mt-40">
        <div>
          <h3 className="text-[48px] font-black leading-tight">DOWNLOAD APP</h3>
          <h3 className="text-[48px] font-black leading-tight">
            GET THE VOUCHER!
          </h3>
          <p className="mt-6 text-xl text-gray-600 max-w-md">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </p>
          <div className="flex gap-6 mt-10">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-14"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-14"
            />
          </div>
        </div>
        <img
          src="https://img.freepik.com/premium-photo/woman-shopping-yellow-dress-online-her-mobile-phone-yellow-background_746318-766.jpg"
          alt="Fashion mobile UI"
          className="w-[600px] rounded-3xl shadow-xl"
        />
      </section>

      {/*SECTION -7*/}
      <section className="bg-[#EBD96B] mt-40 py-24 text-center">
        <h3 className="text-4xl font-bold text-white">
          JOIN SHOPPING COMMUNITY <br />
          TO GET MONTHLY PROMO
        </h3>
        <p className="mt-6  text-xl  font-bold text-white">
          Type your email down below and be young wild generation
        </p>
        <div className="mt-10 flex justify-center">
          <input
            className="px-8 py-4 rounded-l-md w-96"
            placeholder="Add your email here"
          />
          <button className="bg-black text-white px-8 rounded-r-md">
            SEND
          </button>
        </div>
      </section>

      {/*FOOTER*/}
      <footer className="bg-black text-white px-16 py-24 grid grid-cols-4 gap-20">
        <div>
          <h4 className="font-black text-2xl">FASHION</h4>
          <p className="mt-6 text-gray-400">
            Complete your style with awesome clothes from us.
          </p>
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 bg-[#EBD96B] rounded-lg flex items-center justify-center font-bold text-black">
              f
            </div>
            <div className="w-10 h-10 bg-[#EBD96B] rounded-lg flex items-center justify-center font-bold text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="black"
                className="w-5 h-5"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" ry="4" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="black" />
              </svg>
            </div>
            <div className="w-10 h-10 bg-[#EBD96B] rounded-lg flex items-center justify-center font-bold text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-5 h-5"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 3c-2.5 0-4.5 2.24-4.5 5 0 .39.04.76.12 1.12C8 8.94 4.29 6.87 1.71 3.88a5.08 5.08 0 00-.61 2.51c0 1.73.87 3.26 2.19 4.15A4.41 4.41 0 012 10v.06c0 2.42 1.65 4.44 3.83 4.9a4.52 4.52 0 01-2.02.08c.57 1.85 2.23 3.2 4.2 3.24A9.05 9.05 0 011 20.29 12.94 12.94 0 007.29 22c8.49 0 13.14-7.5 13.14-14v-.64A9.6 9.6 0 0023 3z" />
              </svg>
            </div>
            <div className="w-10 h-10 bg-[#EBD96B] rounded-lg flex items-center justify-center font-bold text-black">
              in
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-bold mb-4">Company</h5>
          <p className="mt-6 text-gray-400">About</p>
          <p className="mt-6 text-gray-400">Contact us</p>
          <p className="mt-6 text-gray-400">Support</p>
          <p className="mt-6 text-gray-400">Careers</p>
        </div>
        <div>
          <h5 className="font-bold mb-4">Quick Link</h5>
          <p className="mt-6 text-gray-400">Share Location</p>
          <p className="mt-6 text-gray-400">Orders Tracking</p>
          <p className="mt-6 text-gray-400">Size Guide</p>
          <p className="mt-6 text-gray-400">FAQS</p>
        </div>
        <div>
          <h5 className="font-bold mb-4">Legal</h5>
          <p className="mt-6 text-gray-400">Terms & Conditions</p>
          <p className="mt-6 text-gray-400">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

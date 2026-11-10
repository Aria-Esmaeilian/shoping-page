import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full">
      <div className="h-24 bg-white"></div>

      <div className="bg-[#F0F0F0]">
        <div className="max-w-7xl mx-auto px-4 pt-32">
          <div className="flex justify-between py-12">
            <div className="w-72 mr-20">
              <h2 className="font-[heavyFont] text-3xl cursor-default">
                SHOP.CO
              </h2>
              <p className="text-gray-500 mt-4 text-sm leading-6 cursor-default">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
            </div>

            <table className="w-[1000px] table-fixed text-left">
              <thead>
                <tr className="text-base">
                  <th className="pb-5 w-[220px] tracking-widest cursor-default">
                    COMPANY
                  </th>
                  <th className="pb-5 w-[240px] tracking-widest cursor-default">
                    HELP
                  </th>
                  <th className="pb-5 w-[240px] tracking-widest cursor-default">
                    FAQ
                  </th>
                  <th className="pb-5 w-[300px] tracking-widest cursor-default">
                    RESOURCES
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-500 text-base">
                <tr>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    About
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Customer Support
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Account
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Free eBooks
                  </td>
                </tr>
                <tr>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Features
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Delivery Details
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Manage Deliveries
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Development Tutorial
                  </td>
                </tr>
                <tr>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Works
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Terms & Conditions
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Orders
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    How to - Blog
                  </td>
                </tr>
                <tr>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Career
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Privacy Policy
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Payments
                  </td>
                  <td className="py-2 cursor-pointer hover:text-gray-400 active:scale-95 transition-all duration-150">
                    Youtube Playlist
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-t border-gray-300 flex items-center justify-between pt-6 pb-20">
            <p className="text-sm text-gray-500 cursor-default">
              Shop.co © 2000-2026, All Rights Reserved
            </p>

            <div className="flex items-center gap-3">
              <Image
                src="/icons/visa.svg"
                alt="Visa"
                width={60}
                height={40}
                className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
              />
              <Image
                src="/icons/mastercard.svg"
                alt="Mastercard"
                width={60}
                height={40}
                className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
              />
              <Image
                src="/icons/paypal.svg"
                alt="PayPal"
                width={60}
                height={40}
                className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
              />
              <Image
                src="/icons/apple-pay.svg"
                alt="Apple Pay"
                width={60}
                height={40}
                className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
              />
              <Image
                src="/icons/google-pay.svg"
                alt="Google Pay"
                width={60}
                height={40}
                className="cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl min-h-44 bg-black text-white rounded-3xl p-8 flex items-center justify-between z-10">
        <p className="text-4xl max-w-2xl font-[heavyFont] cursor-default">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </p>

        <div className="flex flex-col gap-3 w-96">
          <div className="relative">
            <Image
              src="/icons/mail.svg"
              alt="Email"
              width={20}
              height={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              className="w-full h-12 pl-12 pr-4 rounded-full bg-white text-black outline-none"
              placeholder="Enter your email address"
            />
          </div>

          <button className="w-full h-12 rounded-full bg-white text-black hover:bg-gray-200 active:scale-95 active:bg-gray-300 transition-all duration-150 cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </footer>
  );
}

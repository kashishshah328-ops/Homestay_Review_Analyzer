// export default function Footer() {

//   return (

//     <footer className="bg-gray-900 text-white text-center py-4 mt-10">

//       © 2026 Homestay Review Analyzer

//     </footer>

//   );

// }
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>

            <h2 className="text-2xl font-bold text-white">
              Homestay Review Analyzer
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              AI-powered review analytics platform that helps businesses
              understand customer feedback through sentiment analysis,
              intelligent summaries and automated responses.
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Product
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Resources
            </h3>

            <ul className="space-y-3">

              <li>Documentation</li>

              <li>Support</li>

              <li>Privacy Policy</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold text-white mb-5">
              Contact
            </h3>

            <p>Email</p>

            <p className="text-emerald-400">
              support@reviewanalyzer.ai
            </p>

            <p className="mt-4">
              Available 24/7
            </p>

          </div>

        </div>

        <div
          className="
          border-t
          border-gray-800

          mt-12
          pt-8

          flex

          flex-col
          md:flex-row

          justify-between

          items-center

          gap-4
          "
        >

          <p>
            © 2026 Homestay Review Analyzer. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link href="/">
              Home
            </Link>

            <Link href="/about">
              About
            </Link>

            <Link href="/dashboard">
              Dashboard
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
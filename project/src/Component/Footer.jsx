// import React from "react";
// import { FaXTwitter, FaYoutube, FaLinkedin, FaRss } from "react-icons/fa6";

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t mt-10">
//       <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
//         {/* Logo + description */}
//         <div>
//           <h2 className="flex items-center text-xl font-semibold text-gray-900">
//             <span className="text-blue-600 mr-2">⌂</span> Vital Hawks
//           </h2>
//           <p className="mt-4 text-sm leading-relaxed text-gray-600">
//           At Vital Hawks, we found a common challenge in sales-driven businesses: teams spend more time researching and verifying leads than closing deals, losing focus on high-impact revenue activities.
//           </p>
//         </div>

//         {/* Follow */}
//         <div>
//           <h3 className="font-semibold text-gray-900 mb-3">Follow</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center space-x-2">
//               <FaXTwitter /> <a href="#" className="hover:text-blue-600">@ChromiumDev on X</a>
//             </li>
//             <li className="flex items-center space-x-2">
//               <FaYoutube /> <a href="#" className="hover:text-blue-600">YouTube</a>
//             </li>
//             <li className="flex items-center space-x-2">
//               <FaLinkedin /> <a href="#" className="hover:text-blue-600">Chrome for Developers on LinkedIn</a>
//             </li>
//             <li className="flex items-center space-x-2">
//               <FaRss /> <a href="#" className="hover:text-blue-600">RSS</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//     </footer>
//   );
// }

import React from "react";
import { FaXTwitter, FaYoutube, FaLinkedin, FaRss } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "./photos/logo.jpeg"; // ✅ Import your logo (place in src/assets or same folder)

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
        {/* Logo + Description */}
        <div>
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="Vital Hawks Logo"
              className="h-10 w-10 rounded-lg shadow-md"
            />
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Vital Hawks
            </h2>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-gray-600 max-w-sm">
            At Vital Hawks, we help sales teams focus on closing deals by
            removing time-consuming tasks like researching and verifying leads —
            so they can concentrate on what truly drives revenue.
          </p>
          <div className="flex items-center justify-start gap-2 pt-4">
            <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg">
              <FaMapMarkerAlt size={12} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-gray-600">Indore, Madhya Pradesh, India</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Follow Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-3 hover:text-blue-600 transition">
              <FaXTwitter className="text-lg" /> <a href="#">Twitter / X</a>
            </li>
            <li className="flex items-center space-x-3 hover:text-blue-600 transition">
              <FaYoutube className="text-lg" /> <a href="#">YouTube</a>
            </li>
            <li className="flex items-center space-x-3 hover:text-blue-600 transition">
              <FaLinkedin className="text-lg" /> <a href="#">LinkedIn</a>
            </li>
            <li className="flex items-center space-x-3 hover:text-blue-600 transition">
              <FaRss className="text-lg" /> <a href="#">RSS</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

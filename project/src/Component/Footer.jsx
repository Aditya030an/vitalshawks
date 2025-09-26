

// import React from "react";
// import { FaXTwitter, FaYoutube, FaLinkedin, FaRss } from "react-icons/fa6";
// import { FaMapMarkerAlt } from "react-icons/fa";
// import logo from "./photos/logo.jpeg"; // ✅ Import your logo (place in src/assets or same folder)

// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-gray-200 mt-16">
//       <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">
//         {/* Logo + Description */}
//         <div>
//           <div className="flex items-center space-x-3">
//             <img
//               src={logo}
//               alt="Vital Hawks Logo"
//               className="h-10 w-10 rounded-lg shadow-md"
//             />
//             <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
//               Vital Hawks
//             </h2>
//           </div>
//           <p className="mt-5 text-sm leading-relaxed text-gray-600 max-w-sm">
//             At Vital Hawks, we help sales teams focus on closing deals by
//             removing time-consuming tasks like researching and verifying leads —
//             so they can concentrate on what truly drives revenue.
//           </p>
//           <div className="flex items-center justify-start gap-2 pt-4">
//             <div className="p-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg">
//               <FaMapMarkerAlt size={12} />
//             </div>
//             <div>
//               <p className="font-semibold text-gray-800">Address</p>
//               <p className="text-gray-600">Noida, Uttar Pradesh, India</p>
//             </div>
//           </div>
//         </div>

        

        
//       </div>
//     </footer>
//   );
// }



import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import logo from "./photos/logo.jpeg"; // ✅ Ensure logo path is correct

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-14 text-gray-700">
        {/* Logo + Description */}
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
          {/* Left: Logo + Name + Text */}
          <div className="max-w-lg">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Vital Hawks Logo"
                className="h-12 w-12 rounded-xl shadow-md"
              />
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Vital Hawks
              </h2>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              At Vital Hawks, we help sales teams focus on closing deals by
              removing time-consuming tasks like researching and verifying leads
              — so they can concentrate on what truly drives revenue.
            </p>
          </div>

          {/* Right: Address */}
          <div className="flex items-start gap-3">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg">
              <FaMapMarkerAlt size={16} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Our Office</p>
              <p className="text-gray-600 text-sm">
                Noida, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vital Hawks. All rights reserved.
      </div>
    </footer>
  );
}
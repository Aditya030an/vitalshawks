

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaLaptopCode,
//   FaUniversity,
//   FaBullhorn,
//   FaHospital,
//   FaIndustry,
//   FaGraduationCap,
//   FaShoppingCart,
//   FaBuilding,
// } from "react-icons/fa";

// const industries = [
//   {
//     title: "IT & Technology",
//     description:
//       "Connect with software companies, SaaS providers, IT services, and tech decision-makers. Build your pipeline with verified emails and mobile numbers of key contacts.",
//     icon: <FaLaptopCode className="text-4xl text-indigo-500" />,
//   },
//   {
//     title: "Finance & Banking Services",
//     description:
//       "Target banks, fintech, investment firms, insurance providers, and financial consultants. Access accurate contacts for decision-makers to boost client acquisition.",
//     icon: <FaUniversity className="text-4xl text-green-500" />,
//   },
//   {
//     title: "Marketing & Advertising",
//     description:
//       "Reach marketing agencies, media companies, and advertising professionals. Drive partnerships and business development with verified leads.",
//     icon: <FaBullhorn className="text-4xl text-pink-500" />,
//   },
//   {
//     title: "Healthcare & Pharmaceuticals",
//     description:
//       "Connect with hospitals, clinics, pharma companies, and medical device suppliers. Access decision-maker emails and mobile numbers for B2B outreach.",
//     icon: <FaHospital className="text-4xl text-red-500" />,
//   },
//   {
//     title: "Manufacturing & Industrial",
//     description:
//       "Target manufacturers, distributors, and industrial service providers. Build strong sales pipelines with verified contacts for your business solutions.",
//     icon: <FaIndustry className="text-4xl text-yellow-500" />,
//   },
//   {
//     title: "Education & eLearning",
//     description:
//       "Reach universities, edtech companies, training providers, and corporate learning departments. Access accurate emails and contact numbers for your outreach campaigns.",
//     icon: <FaGraduationCap className="text-4xl text-purple-500" />,
//   },
//   {
//     title: "Retail & E-Commerce",
//     description:
//       "Connect with retail chains, online marketplaces, and wholesalers. Streamline B2B communication with verified decision-maker contacts.",
//     icon: <FaShoppingCart className="text-4xl text-orange-500" />,
//   },
//   {
//     title: "Real Estate & Construction",
//     description:
//       "Target developers, contractors, and property management companies. Use verified contact information to generate leads efficiently.",
//     icon: <FaBuilding className="text-4xl text-blue-500" />,
//   },
// ];

// export default function IndustriesSection() {
//   return (
//     <section className="w-full bg-gradient-to-br from-[#0e2338] via-[#142d4c] to-[#1b3b61] text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Headline */}
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-5xl font-extrabold mb-6"
//         >
//           Industries We Cater To
//         </motion.h2>

//         {/* Subheadline */}
//         <motion.p
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-16"
//         >
//           No matter your sector, we provide verified B2B databases to help your
//           sales and marketing teams reach the right decision-makers efficiently.
//         </motion.p>

//         {/* Industries Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {industries.map((industry, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:bg-white/20 transition-all"
//             >
//               <div className="flex justify-center mb-6">{industry.icon}</div>
//               <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
//               <p className="text-gray-300 text-sm leading-relaxed">
//                 {industry.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mt-16"
//         >
//           <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full font-semibold text-lg hover:scale-105 transition-all shadow-lg">
//             Find Your Industry Database →
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaUniversity,
  FaBullhorn,
  FaHospital,
  FaIndustry,
  FaGraduationCap,
  FaShoppingCart,
  FaBuilding,
} from "react-icons/fa";

const industries = [
  {
    title: "IT & Technology",
    description:
      "Connect with software companies, SaaS providers, IT services, and tech decision-makers.",
    details:
      "Build your pipeline with verified emails and mobile numbers of key contacts.",
    icon: <FaLaptopCode className="text-4xl text-indigo-400" />,
  },
  {
    title: "Finance & Banking Services",
    description:
      "Target banks, fintech, investment firms, insurance providers, and financial consultants.",
    details:
      "Access accurate contacts for decision-makers to boost client acquisition.",
    icon: <FaUniversity className="text-4xl text-green-400" />,
  },
  {
    title: "Marketing & Advertising Services",
    description:
      "Reach marketing agencies, media companies, and advertising professionals.",
    details: "Drive partnerships and business development with verified leads.",
    icon: <FaBullhorn className="text-4xl text-pink-400" />,
  },
  {
    title: "Healthcare & Pharmaceuticals",
    description:
      "Connect with hospitals, clinics, pharma companies, and medical device suppliers.",
    details: "Access decision-maker emails and mobile numbers for B2B outreach.",
    icon: <FaHospital className="text-4xl text-red-400" />,
  },
  {
    title: "Manufacturing & Industrial Services",
    description:
      "Target manufacturers, distributors, and industrial service providers.",
    details:
      "Build strong sales pipelines with verified contacts for your business solutions.",
    icon: <FaIndustry className="text-4xl text-yellow-400" />,
  },
  {
    title: "Education & eLearning Providers",
    description:
      "Reach universities, edtech companies, training providers, and corporate learning departments.",
    details:
      "Access accurate emails and contact numbers for your outreach campaigns.",
    icon: <FaGraduationCap className="text-4xl text-purple-400" />,
  },
  {
    title: "Retail & E-Commerce",
    description:
      "Connect with retail chains, online marketplaces, and wholesalers.",
    details:
      "Streamline B2B communication with verified decision-maker contacts.",
    icon: <FaShoppingCart className="text-4xl text-orange-400" />,
  },
  {
    title: "Real Estate & Construction Services",
    description:
      "Target developers, contractors, and property management companies.",
    details:
      "Use verified contact information to generate leads efficiently.",
    icon: <FaBuilding className="text-4xl text-blue-400" />,
  },
];

export default function Industries() {
  return (
    <>
    <section className="relative w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-32 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Industries We Cater To
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          No matter your sector, we provide verified B2B databases to help your
          sales and marketing teams reach the right decision-makers efficiently.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:border-blue-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              {industry.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {industry.title}
            </h3>
            <p className="text-gray-300 text-sm mb-2">{industry.description}</p>
            <p className="text-gray-400 text-sm">{industry.details}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mt-20"
      >
        <button className="px-10 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          Find Your Industry Database →
        </button>
      </motion.div>
    </section>
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
        >
          Trusted by Leading Brands
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-600 mb-10"
        >
          Our verified B2B databases and services have helped companies across industries 
          save time, connect with the right prospects, and grow their sales pipeline.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-10"
        ></motion.div>

        {/* Body Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
        >
          We take pride in working with a diverse range of clients — from top corporates 
          to educational institutions. Our focus is always on delivering accurate, actionable 
          contact information so your sales team can focus on closing deals instead of chasing leads.
        </motion.p>
      </div>
    </section>
    </>
  );
}
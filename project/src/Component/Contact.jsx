import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="relative w-full bg-white py-28 px-6 md:px-20" id="contact">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Contact <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Us</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to hear from you. Reach out to us anytime and our team will get back to you shortly.
        </p>
      </motion.div>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg">
              <FaPhoneAlt size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Phone</p>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg">
              <FaEnvelope size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">info@yourcompany.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg">
              <FaMapMarkerAlt size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Address</p>
              <p className="text-gray-600">Indore, Madhya Pradesh, India</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
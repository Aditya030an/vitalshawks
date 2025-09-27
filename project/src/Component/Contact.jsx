"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_1fv4z6j", // 🔑 replace with your EmailJS service ID
        // "template_mf54x5q", // 🔑 replace with your EmailJS template ID
        "template_lyjsfgs",
        e.target,
        "cDp0f94GI8_CGBW7i" // 🔑 replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  return (
    <section
      className="relative w-full bg-white py-28 px-6 md:px-20"
      id="contact"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Us
          </span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          We’d love to hear from you. Reach out to us anytime and our team will
          get back to you shortly.
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
              <FaEnvelope size={22} />
            </div>
            <div>
              <p className="font-semibold text-gray-800">Email</p>
              <p className="text-gray-600">Info@vitalhawks.com</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-100"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name" // 🔑 must match EmailJS template
              placeholder="Your Name"
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email" // 🔑 must match EmailJS template
              placeholder="you@example.com"
              className="mt-2 w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              name="message" // 🔑 must match EmailJS template
              placeholder="Write your message..."
              className="mt-2 w-full p-3 resize-none border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            Send Message
          </motion.button>

          {status && (
            <p className="text-center text-sm mt-2 text-gray-600">{status}</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

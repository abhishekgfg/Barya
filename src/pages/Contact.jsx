import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact <span className="text-blue-600">Us</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-700 md:text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We’d love to hear from you! Reach out to us directly or fill out the form below.
        </motion.p>

        {/* Contact Info */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaMapMarkerAlt className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-gray-600 text-sm text-center">123 Business Street, New Delhi, India</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaEnvelope className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 text-sm text-center">info@baryahr.com</p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaPhoneAlt className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 text-sm text-center">+91 9876543210</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none"
              rows={4}
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

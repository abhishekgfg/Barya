import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // WhatsApp redirect link
    const whatsappNumber = "919773784887"; // without + sign
    const text = `Hello Barya HR Services,%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Message: ${formData.message}`;

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

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
            <p className="text-gray-600 text-sm text-center">
              G-351, SECTOR-56 NOIDA U.P.-201301
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaEnvelope className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600 text-sm text-center">
              baryahrservices@gmail.com
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-transform transform hover:-translate-y-2">
            <FaPhoneAlt className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600 text-sm text-center">+91 9773784887</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-700 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
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
            Send on WhatsApp
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

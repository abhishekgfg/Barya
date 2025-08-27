// WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase, FaStar, FaHandshake } from "react-icons/fa";
import { Link } from "react-router-dom";

// Features data
const features = [
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600 mb-4" />,
    title: "People-First Culture",
    description: "We believe that our people are our greatest asset. At Barya, you’ll be part of a supportive, inclusive, and forward-thinking team where your voice matters, your ideas are valued, and your growth is prioritized.",
  },
  {
    icon: <FaBriefcase className="w-8 h-8 text-green-600 mb-4" />,
    title: "Diverse Opportunities",
    description: "Barya HR Services connects you to diverse opportunities — from entry-level to executive — across IT, finance, healthcare, logistics, and more",
  },
  {
    icon: <FaStar className="w-8 h-8 text-yellow-500 mb-4" />,
    title: "Career Development & Training",
    description: "Your career growth is important to us. We offer skill-building programs, soft-skill workshops, interview coaching, and ongoing mentorship to ensure you're always one step ahead in a competitive job market.",
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-purple-600 mb-4" />,
    title: "Ethical & Transparent Recruitment",
    description: "Integrity is the foundation of everything we do. We are committed to fair hiring practices, clear communication, and building long-term relationships with both candidates and clients.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-600 rounded-full opacity-20 "></div>
      <div className="absolute -bottom-20 -right-16 w-96 h-96 bg-purple-600 rounded-full opacity-15 "></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Why Choose a Career with Barya?
        </motion.h2>

        {/* Subheading / description */}
        <motion.p
          className="text-gray-700 md:text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          At <strong>Barya HR Services</strong>, we don’t just offer jobs — we shape futures. 
          As one of the leading HR consultancy and workforce solutions providers,
           we are committed to connecting ambitious professionals with career-defining
            opportunities across diverse industries.
        </motion.p>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border-t-4 border-blue-600 transition-transform transform hover:-translate-y-2 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
         <Link to="/contact">
  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
    Contact Us
  </button>
</Link>
        </motion.div>
      </div>
    </section>
  );
}

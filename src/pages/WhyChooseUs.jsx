// WhyChooseUs.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBriefcase, FaStar, FaHandshake } from "react-icons/fa";

// Features data
const features = [
  {
    icon: <FaUsers className="w-8 h-8 text-blue-600 mb-4" />,
    title: "Experienced Team",
    description: "Our skilled professionals ensure top-notch recruitment solutions for your company.",
  },
  {
    icon: <FaBriefcase className="w-8 h-8 text-green-600 mb-4" />,
    title: "Industry Expertise",
    description: "We understand your industry needs and deliver tailored staffing solutions.",
  },
  {
    icon: <FaStar className="w-8 h-8 text-yellow-500 mb-4" />,
    title: "Proven Results",
    description: "Our clients have achieved remarkable success with our HR strategies.",
  },
  {
    icon: <FaHandshake className="w-8 h-8 text-purple-600 mb-4" />,
    title: "Client Satisfaction",
    description: "Building long-term relationships with businesses and employees is our priority.",
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
          Why Choose Us?
        </motion.h2>

        {/* Subheading / description */}
        <motion.p
          className="text-gray-700 md:text-lg mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Barya HR Services is committed to connecting the right talent with the right companies. 
          Our expertise ensures businesses thrive while employees find meaningful opportunities.
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
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}

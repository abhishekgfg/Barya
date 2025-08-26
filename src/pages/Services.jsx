// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, FileText, GraduationCap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Recruitment & Talent Acquisition",
      description:
        "End-to-end hiring solutions to connect companies with the best talent quickly and efficiently.",
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Temporary & Permanent Staffing",
      description:
        "Flexible staffing models to meet your short-term and long-term workforce requirements.",
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "HR Consulting & Payroll",
      description:
        "Expert advice on compliance, HR policies, and seamless payroll management for organizations.",
      icon: <FileText className="w-10 h-10 text-yellow-600" />,
    },
    {
      id: 4,
      title: "Employee Training & Development",
      description:
        "Upskilling programs and leadership training to help employees and organizations grow.",
      icon: <GraduationCap className="w-10 h-10 text-purple-600" />,
    },
  ];

  return (
<section className="pt-12 md:pt-16 pb-8 px-6 bg-gradient-to-br from-blue-50 to-white mt-0 md:mt-10">


      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore our professional HR solutions tailored to empower businesses
          and individuals.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

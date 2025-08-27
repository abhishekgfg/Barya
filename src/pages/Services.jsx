// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, FileText } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Manpower Supply",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Skilled, semi-skilled, and unskilled labor</li>
          <li>Technical professionals (engineers, technicians, etc.)</li>
          <li>Hospitality, healthcare, logistics, and construction staff</li>
        </ul>
      ),
      icon: <Briefcase className="w-10 h-10 text-blue-600" />,
    },
    {
      id: 2,
      title: "Recruitment & Staffing",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Permanent staffing</li>
          <li>Contract and project-based hiring</li>
          <li>Executive search (middle & senior management)</li>
        </ul>
      ),
      icon: <Users className="w-10 h-10 text-green-600" />,
    },
    {
      id: 3,
      title: "HR Consulting",
      description: (
        <ul className="text-left list-disc list-inside space-y-1">
          <li>Job profiling and role analysis</li>
          <li>Workforce planning</li>
          <li>Interview coordination and candidate assessment</li>
        </ul>
      ),
      icon: <FileText className="w-10 h-10 text-yellow-600" />,
    },
  ];

  return (
    <section className="pt-12 md:pt-16 pb-8 px-6 bg-gradient-to-br from-blue-50 to-white">
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
          We offer a comprehensive range of manpower and HR services, including:
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col text-left hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-lg font-semibold text-blue-800">
                  {service.title}
                </h3>
              </div>
              <div className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Services from "./Services";
import { motion } from "framer-motion";
import WhyChooseUs from "./WhyChooseUs";
import { FaBuilding } from "react-icons/fa";
import VisionMissionSection from "./VisionMissionSection";
import { Link } from "react-router-dom";

function Home() {
     const features = [
    "Experienced Team",
    "Industry Expertise",
    "Proven Results",
    "Client Satisfaction",
  ];

  const clients = [
  { name: "Company A", logo: <FaBuilding className="w-12 h-12 text-blue-600" /> },
  { name: "Company B", logo: <FaBuilding className="w-12 h-12 text-green-600" /> },
  { name: "Company C", logo: <FaBuilding className="w-12 h-12 text-yellow-500" /> },
  { name: "Company D", logo: <FaBuilding className="w-12 h-12 text-purple-600" /> },
];
  return (
  <div className="w-full">
  {/* 🔹 Hero Section */}
  <section className="relative bg-blue-900 text-white h-[80vh] md:h-[90vh] flex items-center justify-center text-center">
    {/* Background Image Overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-30"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521791055366-0d553872125f')",
      }}
    ></div>

    {/* Content */}
    <div className="relative z-10 px-4 md:px-6 lg:px-0 max-w-5xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-snug md:leading-tight">
        Connecting Companies with the Right Talent
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-100 max-w-3xl mx-auto">
        Barya HR Services is your trusted partner for recruitment, staffing, and HR consulting.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
          Get Started
        </button>
        <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-6 py-3 rounded-lg shadow transition duration-300 transform hover:scale-105">
          Learn More
        </button>
      </div>
    </div>
  </section>



      {/* 🔹 About Us */}
    
<section className="container mx-auto py-16 px-6">
    
  <div className="grid md:grid-cols-2 gap-12 items-center">
    
    {/* Left Side: Images */}
    <div className="grid grid-cols-2 gap-4">
      <img
        src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
        alt="Graduation 1"
        className="rounded-xl object-cover w-full h-[300px] -mb-[40px]"
      />
      <img
        src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg"
        alt="Graduation 2"
        className="rounded-xl object-cover w-full h-[300px] mt-[40px]"
      />
    </div>



    {/* Right Side: Text */}
    <div>
    
      <h2 className="text-4xl font-bold text-blue-900 mb-6">
      About BARYA HR SERVICES 
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
    <strong>  BARYA HR SERVICES</strong> is a professional recruitment and manpower consultancy
       committed to delivering efficient,reliable, and customized HR solutions.
        With a growing network of qualified candidates and industry-focused recruitment 
        strategies, we aim to be the trusted bridge between talent and opportunity.
      </p>
       <a
  href="https://wa.me/919773784887?text=Hello%20Barya%20HR%20Services%2C%20I%20would%20like%20to%20apply.%20Here%20are%20my%20details%3A%0AName%3A%20%0AExperience%3A%20%0ASkills%3A%20%0AInterested%20Role%3A%20"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-4 border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
>
  WhatsApp Apply
</a>
    </div>
  </div>
</section>

<VisionMissionSection />
      {/* 🔹 Our Services */}
     <Services />  
      <WhyChooseUs />
    


   <section className="relative bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-300 rounded-full opacity-15 animate-pulse"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Left Side Intro */}
        <motion.div
          className="lg:w-1/3 flex flex-col justify-center text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
        <h1 className="text-5xl font-bold text-blue-900 mb-6 -mt-7">
 Your Journey with Barya Starts Now
</h1>

          <p className="text-gray-700 mb-6 text-lg">
           Whether you're a jobseeker looking for the right opportunity or a professional aiming to upgrade your career, Barya HR Services is your trusted partner every step of the way. Let’s build your career together — with purpose, passion, and the right guidance.
          </p>
         <button
  onClick={() =>
    window.open(
      "https://wa.me/919773784887?text=Hello%20Barya%20HR%20Services%2C%20I%20am%20interested%20to%20work%20with%20you.",
      "_blank"
    )
  }
  className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105 w-40"
>
  Work With Us
</button>

        </motion.div>

        {/* Right Side Client Cards */}
        <motion.div
          className="lg:w-2/3 grid sm:grid-cols-2 md:grid-cols-2 gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{client.logo}</div>
              <h3 className="text-xl font-semibold text-blue-800">{client.name}</h3>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Trusted partner in recruitment and staffing solutions.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

      {/* 🔹 Call to Action */}
      <section className="relative bg-white-900 text-blue-900 py-24 overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-600 rounded-full opacity-20 "></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full opacity-15 "></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 md:mb-8"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
         Your Journey with Barya Starts Now
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl mb-10 text-blue-900 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
         Whether you're a jobseeker looking for the right opportunity or a professional aiming to upgrade your career,
          Barya HR Services is your trusted partner every step of the way. 
         Let’s build your career together — with purpose, passion, and the right guidance.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
        <div className="flex gap-4">
  <Link to="/contact">
    <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105">
      Contact Us
    </button>
  </Link>

  <Link to="/careers">
    <button className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-blue-800 transition transform hover:scale-105">
      Careers
    </button>
  </Link>
</div>
        </motion.div>

        {/* Small CTA note */}
        <motion.p
          className="mt-6 text-blue-900 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Trusted by businesses across industries for delivering top talent efficiently.
        </motion.p>
      </div>
    </section>
    </div>
  );
}

export default Home;

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Users, ShieldCheck, Globe } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-sky-50 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start justify-between gap-12"
        >
          {/* Left - Headline + Stats */}
          <div className="flex-1 self-start">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                Our Identity
              </span>
              <span className="text-sm text-slate-500">
                Trusted • Ethical • Professional
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-slate-900">
              We empower businesses and people — with integrity, quality and
              partnership.
            </h2>

            <p className="mt-4 text-slate-600 max-w-xl">
              At Barya HR we believe great organisations are built by great
              people. Our vision and mission guide every connection we make —
              delivering transparent, compliant and diverse hiring solutions
              that let companies scale and individuals thrive.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl font-medium shadow-lg transform hover:-translate-y-0.5 transition"
              >
                Get Talent
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-200 text-slate-700 px-4 py-3 rounded-2xl font-medium shadow-sm"
              >
                See Services
              </a>
            </div>

            {/* Values badges */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md">
              <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-xs text-slate-500">Commitment to</div>
                  <div className="text-sm font-semibold text-slate-800">
                    Ethical Hiring
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                <Users className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-xs text-slate-500">People First</div>
                  <div className="text-sm font-semibold text-slate-800">
                    Candidate Care
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                <ShieldCheck className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-xs text-slate-500">Trusted Processes</div>
                  <div className="text-sm font-semibold text-slate-800">
                    Compliance
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                <Globe className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-xs text-slate-500">Inclusive</div>
                  <div className="text-sm font-semibold text-slate-800">
                    Diversity
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative animated stats footer - shifted left */}
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-4 text-center shadow"
              >
                <div className="text-2xl font-bold text-slate-900">1.2k+</div>
                <div className="text-xs text-slate-500">Placements</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="bg-white rounded-xl p-4 text-center shadow"
              >
                <div className="text-2xl font-bold text-slate-900">98%</div>
                <div className="text-xs text-slate-500">Client Retention</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-4 text-center shadow"
              >
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-xs text-slate-500">Industry Verticals</div>
              </motion.div>
            </div>
          </div>

          {/* Right - Vision + Mission Card Cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 max-w-lg w-full self-start"
          >
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 opacity-60 blur-3xl transform rotate-12" />

              {/* Vision Card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Our Vision</div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      To be a leading HR consultancy known for ethical
                      recruitment and long-term partnerships.
                    </h3>
                  </div>
                  <div className="text-sm text-slate-400">2025+</div>
                </div>

                <p className="mt-4 text-slate-600">
                  We champion transparent hiring practices and build
                  relationships that create value for both businesses and
                  professionals.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500">Focus</div>
                    <div className="font-semibold">Quality Placements</div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-lg">
                    <div className="text-xs text-slate-500">Approach</div>
                    <div className="font-semibold">Ethical & Transparent</div>
                  </div>
                </div>

                <div className="mt-5 border-t pt-4 flex items-center justify-between">
                  <div className="text-sm text-slate-500">Trusted by</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-slate-100 rounded-md flex items-center justify-center text-xs">
                      AC
                    </div>
                    <div className="w-10 h-6 bg-slate-100 rounded-md flex items-center justify-center text-xs">
                      BT
                    </div>
                    <div className="w-10 h-6 bg-slate-100 rounded-md flex items-center justify-center text-xs">
                      XY
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mission floating pill */}
            <motion.div
  initial={{ opacity: 0, x: 0, y: 40 }} // default for mobile (fade up)
  whileInView={{ opacity: 1, x: 0, y: 0 }}
  transition={{ delay: 0.15 }}
  viewport={{ once: true }}
  className="mt-4 md:mt-6"
>
  <div className="bg-gradient-to-r from-white/80 via-white/60 to-white/80 p-4 rounded-2xl border border-slate-100 shadow-lg backdrop-blur-md">
    <div className="text-xs text-slate-500">Our Mission</div>
    <div className="mt-1 text-slate-800 font-semibold">
      To connect organizations with the right talent through a
      transparent, efficient, and client-centric process.
    </div>

    <ul className="mt-3 space-y-2 text-slate-600 text-sm">
      <li>
        • Deliver high-quality manpower solutions that help
        clients grow and thrive.
      </li>
      <li>
        • Maintain compliance, diversity, and professionalism in
        every placement.
      </li>
      <li>
        • Build long-term partnerships with clear communication
        and measurable outcomes.
      </li>
    </ul>

    <div className="mt-4 flex items-center gap-3 flex-wrap">
      <a
        href="https://wa.me/919773784887?text=Hello%20Barya%20HR%20Services%2C%20I%20would%20like%20to%20talk%20to%20an%20expert%20regarding%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full font-medium shadow-sm hover:bg-green-100 transition"
      >
        Talk to an Expert
      </a>

      <a
        href="#about"
        className="inline-flex items-center gap-2 text-slate-600 px-3 py-2 rounded-full font-medium"
      >
        Learn More
      </a>
    </div>
  </div>
</motion.div>

            </div>
          </motion.div>
        </motion.div>

        {/* Accessibility & microcopy */}
       
      </div>
    </section>
  );
}

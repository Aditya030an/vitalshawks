import { FaDatabase, FaBullseye, FaClock, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Clock,
  Users,
  BarChart,
  Target,
  Upload,
  Database,
  Headphones,
  Rocket,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Verified B2B Database",
    description: "Accurate emails and mobile numbers of decision-makers.",
    icon: <FaDatabase className="text-4xl text-orange-500" />,
  },
  {
    title: "Targeted Outreach",
    description: "Filtered by industry, role, company size, and more.",
    icon: <FaBullseye className="text-4xl text-orange-500" />,
  },
  {
    title: "Save Sales Time",
    description: "Removes manual research so your team can focus on deals.",
    icon: <FaClock className="text-4xl text-orange-500" />,
  },
  {
    title: "Actionable Pipeline",
    description: "Ensures your pipeline is always full and revenue-ready.",
    icon: <FaChartLine className="text-4xl text-orange-500" />,
  },
];

export default function Home() {
  const navigate = useNavigate(); 

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0e2338] via-[#1c3c59] to-[#27496d] text-white px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Build Your Sales Pipeline with{" "}
            <span className="text-orange-400">Verified B2B Databases</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
            We provide accurate contact information for your ideal customers and
            handle the backend work — so your sales team can focus on outreach
            and closing deals effectively.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/Contact")} 
              className="bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-lg font-semibold shadow-md"
            >
              Get Started
            </button>
            <button onClick={() => navigate("/About")} className="bg-transparent border border-white hover:bg-white hover:text-[#0e2338] transition px-8 py-3 rounded-lg font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative w-full py-20 bg-white text-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold mb-12 tracking-tight"
          >
            Our <span className="text-green-600">Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="group bg-gray-50 p-6 rounded-3xl shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-6 flex justify-center text-5xl text-green-600 group-hover:scale-110 transition">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <div className="bg-white text-gray-800">
        <section className="relative max-w-6xl mx-auto px-6 pb-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-center mb-16"
          >
            Why <span className="text-[#0e2338]">Choose Us</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Clock />,
                title: "Time-Saving",
                desc: "Stop spending hours finding the right contacts.",
              },
              {
                icon: <Users />,
                title: "Smart Support",
                desc: "Our experienced team handles backend research so your sales team can focus on selling.",
              },
              {
                icon: <BarChart />,
                title: "Higher Effectiveness",
                desc: "Too many tasks reduce results — we streamline your operations.",
              },
              {
                icon: <Target />,
                title: "Custom Targeting",
                desc: "Reach the right companies and decision-makers that matter most.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-200 hover:border-[#0e2338] hover:shadow-xl transition"
              >
                <div className="text-[#0e2338] mb-4 text-4xl">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="relative bg-gradient-to-r from-[#0e2338] via-[#16314d] to-[#0e2338] text-white py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-16"
            >
              How <span className="text-[#B77F59]">It Works</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
              {[
                {
                  icon: <Upload />,
                  title: "Share Your Target Audience",
                  desc: "Tell us who your ideal customers are.",
                },
                {
                  icon: <Database />,
                  title: "We Build Your Database",
                  desc: "Fresh, accurate, decision-maker contacts.",
                },
                {
                  icon: <Headphones />,
                  title: "Backend Support",
                  desc: "We handle research so your team can focus on outreach.",
                },
                {
                  icon: <Rocket />,
                  title: "Boost Sales Effectiveness",
                  desc: "Less busywork, more conversions.",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.7 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:scale-105 transition-transform"
                >
                  <div className="mb-4 text-[#B77F59] text-5xl">{step.icon}</div>
                  <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button
                onClick={() => navigate("/Contact")}
                className="px-10 py-4 bg-[#B77F59] text-[#0e2338] font-semibold rounded-2xl shadow-lg hover:bg-yellow-300 transition"
              >
                Get Your Verified Database Today →
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

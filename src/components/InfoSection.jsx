import React from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb, FaRocket, FaGlobe } from "react-icons/fa";

const infoData = [
  {
    icon: <FaRegLightbulb className="text-yellow-300 text-4xl mb-4" />,
    title: "Innovative Ideas",
    description: "Our platform is designed with innovation at its core.",
  },
  {
    icon: <FaRocket className="text-yellow-300 text-4xl mb-4" />,
    title: "Fast Performance",
    description: "Experience seamless speed and performance.",
  },
  {
    icon: <FaGlobe className="text-yellow-300 text-4xl mb-4" />,
    title: "Global Reach",
    description: "Reach a global audience with ease.",
  },
];

const InfoSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 py-16">
      {infoData.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white/10 p-8 rounded-lg text-center shadow-lg"
        >
          {item.icon}
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default InfoSection;

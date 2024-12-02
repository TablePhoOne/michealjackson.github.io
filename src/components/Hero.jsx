import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center py-20"
    >
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-yellow-300">Your Website</span>
      </h1>
      <p className="text-lg max-w-2xl mb-6">
        This is an informational website built to captivate and inspire.
      </p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="px-6 py-3 bg-yellow-300 text-indigo-700 font-semibold rounded-md"
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default Hero;

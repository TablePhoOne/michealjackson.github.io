import React from "react";
import { motion } from "framer-motion";
import BentoGrid from "../components/BentoGrid";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      {/* Neon Drip at the top */}
      <div className="neon-bar"></div>

      {/* Motion Heading */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
      >
        Michael Jackson
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-4 text-xl text-gray-200"
      >
        American singer-songwriter and dancer
      </motion.p>

      {/* Bento Grid */}
      <BentoGrid />
    </div>
  );
}

export default Home;

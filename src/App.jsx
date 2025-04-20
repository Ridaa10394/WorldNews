import React, { useState } from "react";
import CountryDropdown from "./components/CountryDropdown";
import NewsGrid from "./components/NewsGrid";
import { motion } from "framer-motion";

const App = () => {
  const [country, setCountry] = useState("us");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.3,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
  };

  const title = "World News";

  return (
    <div className="min-h-screen bg-gray-800 px-4 py-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-center text-4xl font-extrabold mb-6 font-sans tracking-wide text-white"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="flex justify-center mb-6">
          <CountryDropdown selected={country} onChange={setCountry} />
        </div>

        <NewsGrid country={country} />
      </div>
    </div>
  );
};

export default App;




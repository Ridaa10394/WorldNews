import React from 'react'
import { motion } from 'framer-motion';

function CountryDropdown({ selected, onChange }) {
  const countries = [
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "in", name: "India" },
    { code: "au", name: "Australia" },
    { code: "ca", name: "Canada" },
    { code: "de", name: "Germany" },
    { code: "fr", name: "France" },
  ];

  return (
    <motion.select
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      className="p-2 border bg-white-900 border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-60 sm:w-72 md:w-80"
      style={{ backgroundColor: 'white' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
     
    >
      {countries.map((c) => (
        <option key={c.code} value={c.code}>
          {c.name}
        </option>
      ))}
    </motion.select>
  )
}

export default CountryDropdown;



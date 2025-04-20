import React, { useEffect, useState } from 'react'
import NewsCard from "./NewsCard";
import {motion } from 'framer-motion'
function NewsGrid({ country }) {
  const categories = ["business", "entertainment", "health", "science", "sports", "technology"];
  const [articles, setArticles] = useState({});
  const API_KEY="42a275162bf048ea8761988c2fdec181"

  useEffect(() => {
    categories.forEach(async (category) => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${country}+${category}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        const data = await res.json();
        setArticles((prev) => ({ ...prev, [category]: data.articles[0] }));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    });
  }, [country]);
  return (
    <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
    key={country} // key is important to re-trigger animation on country change
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {categories.map((cat) => (
      <NewsCard key={cat} category={cat} article={articles[cat]} />
    ))}
  </motion.div>
  )
}

export default NewsGrid
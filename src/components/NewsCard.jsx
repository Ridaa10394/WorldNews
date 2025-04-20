import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function NewsCard({ category, article }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => setIsModalOpen(true);
  const handleBackgroundClick = () => setIsModalOpen(false);

  if (!article || !article.title || !article.urlToImage) {
    return (
      <motion.div
        className="bg-white rounded-lg shadow-md p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-lg font-semibold mb-2 capitalize">{category}</h2>
        <p className="text-sm text-gray-500">No news available for this category.</p>
      </motion.div>
    );
  }

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50"
            onClick={handleBackgroundClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-md p-6 w-full sm:w-96 md:w-1/2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4 capitalize">{category}</h2>
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <p className="text-lg mb-4">{article.title}</p>
              <p className="text-sm text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm mt-2 inline-block"
              >
                Read More
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Card */}
      <motion.div
        className="relative rounded-lg shadow-md overflow-hidden cursor-pointer group h-64 sm:h-72 md:h-64"
        onClick={handleCardClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
      >
        {/* Blurred Background Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110 group-hover:blur-[1px] group-hover:scale-100 transition-all duration-500"
          style={{ backgroundImage: `url(${article.urlToImage})` }}
        ></motion.div>

        

        {/* Foreground Content */}
        <motion.div
          className="relative z-10 p-4 h-full flex flex-col justify-between text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div>
            <h2 className="text-lg font-semibold mb-2 capitalize">{category}</h2>
            <p className="text-sm line-clamp-3">{article.title}</p>
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-300 text-sm mt-2 inline-block hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Read More
          </a>
        </motion.div>
      </motion.div>
    </>
  );
}

export default NewsCard;

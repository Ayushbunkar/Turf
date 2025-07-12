import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const HeroSection = () => {
  return <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt="Cricket Field" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      {/* Animated Background Element */}
      <motion.div className="absolute inset-0 z-10 opacity-30 pointer-events-none" animate={{
      background: ['radial-gradient(circle at center, #4ade8066 0%, transparent 50%)', 'radial-gradient(circle at center, #4ade8066 20%, transparent 70%)', 'radial-gradient(circle at center, #4ade8066 0%, transparent 50%)']
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }} />
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Premium <span className="text-green-400">Sports Turf</span> for
                Champions
              </h1>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Experience world-class cricket and football facilities with
                state-of-the-art amenities
              </p>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/booking" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-md font-medium transition-colors text-center">
                Book Your Slot Now
              </Link>
              <Link to="/gallery" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-md font-medium transition-colors text-center">
                View Gallery
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;
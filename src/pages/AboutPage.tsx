import React from 'react';
import { motion } from 'framer-motion';
const AboutPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-green-700">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" alt="Cricket Field" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h1 initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Blaze Turf
            </motion.h1>
            <motion.div initial={{
            opacity: 0,
            scale: 0
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="w-20 h-1 bg-white mx-auto mb-6"></motion.div>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-xl text-green-100 max-w-3xl mx-auto">
              Our journey, mission, and commitment to providing exceptional
              sporting experiences
            </motion.p>
          </div>
        </div>
      </section>
      {/* Content placeholder */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2018, Blaze Turf started with a simple mission: to
              create a premium sports facility that caters to the needs of both
              amateur and professional players. Our founder, Rajesh Kumar, a
              former state-level cricket player, noticed the lack of quality
              turfs in the area and decided to fill this gap.
            </p>
            <p className="text-gray-600 mb-10">
              What began as a single cricket pitch has now grown into a
              comprehensive sports complex featuring multiple cricket and
              football turfs, practice nets, and state-of-the-art facilities.
              Today, Blaze Turf is proud to be the preferred destination for
              sports enthusiasts across the city.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  At Blaze Turf, our mission is to provide accessible,
                  high-quality sporting facilities that inspire players to
                  perform at their best. We believe that everyone deserves
                  access to professional-grade facilities, regardless of their
                  skill level or background.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  We aim to become the leading sports facility provider in the
                  region, known for our exceptional turf quality, customer
                  service, and community engagement. We envision a future where
                  Blaze Turf is synonymous with sporting excellence.
                </p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-gray-600 mb-10">
              Behind Blaze Turf is a dedicated team of sports enthusiasts who
              work tirelessly to ensure you have the best playing experience.
            </p>
          </div>
        </div>
      </section>
      {/* More content would be added here in a complete implementation */}
    </div>;
};
export default AboutPage;
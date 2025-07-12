import React, { useEffect, useState, Children } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarIcon, Clock3Icon, ShieldCheckIcon, UmbrellaIcon, ShowerHeadIcon, LightbulbIcon, ParkingCircleIcon, WifiIcon, StarIcon } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import BookingPreview from '../components/home/BookingPreview';
const HomePage = () => {
  // For animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  const staggerContainer = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const testimonials = [{
    id: 1,
    name: 'Virat K.',
    role: 'Cricket Enthusiast',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60',
    text: "The best cricket turf I've played on in the city. Excellent pitch conditions and the floodlights make evening games a treat."
  }, {
    id: 2,
    name: 'Mithali R.',
    role: 'Local Team Captain',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd29tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=100&q=60',
    text: 'Our team regularly books Blaze Turf for practice sessions. The online booking system is convenient, and the facilities are top-notch.'
  }, {
    id: 3,
    name: 'Sunil C.',
    role: 'Football Coach',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=100&q=60',
    text: 'The synthetic grass quality is exceptional. My football students love training here, and the staff is always helpful and professional.'
  }];
  const galleryImages = ['https://images.unsplash.com/photo-1624880357913-a8539238245b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpY2tldCUyMHBpdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldCUyMGZpZWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1602674809970-89e5fc5b0012?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vdGJhbGwlMjBmaWVsZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1600679472829-3044539ce8ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNyaWNrZXQlMjBuZXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNwb3J0cyUyMGZpZWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60', 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
  };
  useEffect(() => {
    const timer = setInterval(nextImage, 3000);
    return () => clearInterval(timer);
  }, []);
  return <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      {/* About Blaze Turf Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate={controls} variants={fadeInUp} ref={ref} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome to <span className="text-green-600">Blaze Turf</span>
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Experience premium cricket and football facilities designed for
              players of all levels. Our state-of-the-art turf offers the
              perfect playing conditions for your sporting needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={controls} variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.2
              }
            }
          }}>
              <img src="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3JpY2tldCUyMHBpdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Blaze Turf Cricket Ground" className="rounded-lg shadow-xl w-full h-auto object-cover" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={controls} variants={{
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.6,
                delay: 0.4
              }
            }
          }}>
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Blaze Turf?
              </h3>
              <p className="text-gray-600 mb-6">
                Founded in 2018, Blaze Turf has quickly become the premier
                destination for cricket and football enthusiasts in the city.
                Our mission is to provide accessible, high-quality sporting
                facilities that inspire players to perform at their best.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <ShieldCheckIcon size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      Professional-Grade Facilities
                    </h4>
                    <p className="text-gray-600">
                      Built to international standards for optimal playing
                      experience
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Clock3Icon size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Extended Hours</h4>
                    <p className="text-gray-600">
                      Open from early morning until late night to fit your
                      schedule
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <CalendarIcon size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Easy Online Booking</h4>
                    <p className="text-gray-600">
                      Secure your slot in advance with our hassle-free booking
                      system
                    </p>
                  </div>
                </li>
              </ul>
              <Link to="/about" className="mt-6 inline-block text-green-600 font-medium hover:text-green-800 transition-colors">
                Learn more about us →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Turf Features Section */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate={controls} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Premium Facilities
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Blaze Turf offers world-class amenities designed to enhance your
              playing experience
            </p>
          </motion.div>
          <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={controls} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
            icon: <LightbulbIcon size={32} className="text-green-600" />,
            title: 'Floodlights',
            description: 'Play day or night with our professional lighting system'
          }, {
            icon: <ShowerHeadIcon size={32} className="text-green-600" />,
            title: 'Clean Washrooms',
            description: 'Modern facilities with showers and changing rooms'
          }, {
            icon: <UmbrellaIcon size={32} className="text-green-600" />,
            title: 'Covered Seating',
            description: 'Shaded areas for spectators and players'
          }, {
            icon: <ParkingCircleIcon size={32} className="text-green-600" />,
            title: 'Ample Parking',
            description: 'Secure parking space available for all visitors'
          }, {
            icon: <WifiIcon size={32} className="text-green-600" />,
            title: 'Free Wi-Fi',
            description: 'Stay connected throughout your visit'
          }, {
            icon: <ShieldCheckIcon size={32} className="text-green-600" />,
            title: 'Security',
            description: '24/7 surveillance for your safety and peace of mind'
          }, {
            icon: <img src="https://cdn-icons-png.flaticon.com/512/1099/1099680.png" alt="Cricket Nets" className="w-8 h-8" />,
            title: 'Cricket Nets',
            description: 'Professional practice nets for batting and bowling'
          }, {
            icon: <img src="https://cdn-icons-png.flaticon.com/512/861/861512.png" alt="Synthetic Grass" className="w-8 h-8" />,
            title: 'Synthetic Grass',
            description: 'High-quality turf that performs in all weather conditions'
          }].map((feature, index) => <motion.div key={index} variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>)}
          </motion.div>
        </div>
      </section>
      {/* Gallery Section with Swiper */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate={controls} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Take a virtual tour of our state-of-the-art facilities
            </p>
          </motion.div>
          {/* Replace Swiper Gallery with simple gallery */}
          <div className="mb-12 relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg aspect-video max-w-4xl mx-auto">
              <motion.img key={currentImageIndex} src={galleryImages[currentImageIndex]} alt={`Blaze Turf Gallery ${currentImageIndex + 1}`} className="w-full h-full object-cover" initial={{
              opacity: 0,
              scale: 1.1
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5
            }} />
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevImage} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                  ←
                </button>
                <button onClick={nextImage} className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                  →
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`} />)}
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/gallery" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>
      {/* Booking Preview Section */}
      <BookingPreview />
      {/* Testimonials Section with enhanced animations */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div initial="hidden" animate={controls} variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Players Say
            </h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <motion.div key={testimonial.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: testimonial.id * 0.2
          }} whileHover={{
            y: -5,
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
          }} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className="text-yellow-500 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-green-700 text-white">
        <div className="container mx-auto text-center">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Book Your Slot?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Secure your preferred time slot now and experience the best turf
              in town
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/booking" className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors">
                Book a Slot
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-md font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>;
};
export default HomePage;
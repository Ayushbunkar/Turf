import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon, UserIcon, CalendarIcon } from 'lucide-react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div initial={{
            rotate: -10
          }} animate={{
            rotate: 0
          }} transition={{
            duration: 0.5
          }}>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
                Blaze
              </span>
            </motion.div>
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Turf
            </span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'} transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'} transition-colors`}>
              About
            </Link>
            <Link to="/booking" className={`font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'} transition-colors`}>
              Book Now
            </Link>
            <Link to="/gallery" className={`font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'} transition-colors`}>
              Gallery
            </Link>
            <Link to="/events" className={`font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'} transition-colors`}>
              Events
            </Link>
            <Link to="/contact" className={`font-medium ${scrolled ? 'text-gray-800 hover:text-green-600' : 'text-white hover:text-green-300'} transition-colors`}>
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/booking" className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
              <CalendarIcon size={18} />
              <span>Book Slot</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md transition-colors">
              <UserIcon size={18} />
              <span>Login</span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} transition={{
        duration: 0.2
      }} className="md:hidden bg-white shadow-lg rounded-lg mt-4 py-4 px-2">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 text-gray-800 hover:bg-green-50 rounded-md" onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/about" className="px-4 py-2 text-gray-800 hover:bg-green-50 rounded-md" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/booking" className="px-4 py-2 text-gray-800 hover:bg-green-50 rounded-md" onClick={toggleMenu}>
                Book Now
              </Link>
              <Link to="/gallery" className="px-4 py-2 text-gray-800 hover:bg-green-50 rounded-md" onClick={toggleMenu}>
                Gallery
              </Link>
              <Link to="/events" className="px-4 py-2 text-gray-800 hover:bg-green-50 rounded-md" onClick={toggleMenu}>
                Events
              </Link>
              <Link to="/contact" className="px-4 py-2 text-gray-800 hover:bg-green-50 rounded-md" onClick={toggleMenu}>
                Contact
              </Link>
              <div className="border-t border-gray-200 pt-4 mt-2 flex flex-col space-y-3 px-4">
                <Link to="/booking" className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-center" onClick={toggleMenu}>
                  Book Slot
                </Link>
                <Link to="/login" className="w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white py-2 rounded-md text-center" onClick={toggleMenu}>
                  Login
                </Link>
              </div>
            </div>
          </motion.div>}
      </div>
    </nav>;
};
export default Navbar;
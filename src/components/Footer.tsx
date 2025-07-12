import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TwitterIcon, YoutubeIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-green-400 mr-1">Blaze</span> Turf
            </h3>
            <p className="text-gray-400 mb-4">
              Premium cricket and football turf facilities for sports
              enthusiasts. Book your slot today and experience the best playing
              conditions.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-green-400 transition-colors">
                  Book a Slot
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-green-400 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-green-400 transition-colors">
                  Events & Tournaments
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-green-400 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={20} className="text-green-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Sports Complex, Cricket Avenue, Mumbai, 400001
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="text-green-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">info@blazeturf.com</span>
              </li>
            </ul>
          </div>
          {/* Column 4 - Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-green-400">6:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-green-400">6:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-green-400">6:00 AM - 12:00 AM</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link to="/booking" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors inline-block">
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Blaze Turf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
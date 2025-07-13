import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, ClockIcon, UsersIcon, CheckCircleIcon } from 'lucide-react';
const BookingPreview = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  
  const dates = Array.from({
    length: 7
  }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });
  
  const timeSlots = [{
    id: '1',
    time: '06:00 - 07:00',
    available: true
  }, {
    id: '2',
    time: '07:00 - 08:00',
    available: true
  }, {
    id: '3',
    time: '08:00 - 09:00',
    available: false
  }, {
    id: '4',
    time: '09:00 - 10:00',
    available: true
  }, {
    id: '5',
    time: '10:00 - 11:00',
    available: true
  }, {
    id: '6',
    time: '16:00 - 17:00',
    available: true
  }, {
    id: '7',
    time: '17:00 - 18:00',
    available: false
  }, {
    id: '8',
    time: '18:00 - 19:00',
    available: true
  }, {
    id: '9',
    time: '19:00 - 20:00',
    available: true
  }, {
    id: '10',
    time: '20:00 - 21:00',
    available: true
  }, {
    id: '11',
    time: '21:00 - 22:00',
    available: true
  }, {
    id: '12',
    time: '22:00 - 23:00',
    available: false
  }];
  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric'
    });
  };
  // Check if a date is selected
  const isDateSelected = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  };
  return <section className="py-16 md:py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Check Slot Availability
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Preview available slots and book your preferred time
          </p>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Date Selector */}
            <div className="bg-gray-50 p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center mb-4">
                <CalendarIcon size={20} className="text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-800">Select Date</h3>
              </div>
              <div className="space-y-2">
                {dates.map((date, index) => <motion.button key={index} whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} onClick={() => setSelectedDate(date)} className={`w-full p-3 rounded-md flex justify-between items-center transition-colors ${isDateSelected(date) ? 'bg-green-600 text-white' : 'bg-white hover:bg-green-50 text-gray-700'}`}>
                    <span>{formatDate(date)}</span>
                    <AnimatePresence>
                      {isDateSelected(date) && <motion.div initial={{
                    scale: 0
                  }} animate={{
                    scale: 1
                  }} exit={{
                    scale: 0
                  }} transition={{
                    duration: 0.2
                  }}>
                          <CheckCircleIcon size={18} className="text-white" />
                        </motion.div>}
                    </AnimatePresence>
                  </motion.button>)}
              </div>
            </div>
            {/* Time Slots */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <div className="flex items-center mb-4">
                <ClockIcon size={20} className="text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-800">Select Time</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map(slot => <motion.button key={slot.id} whileHover={slot.available ? {
                scale: 1.02
              } : {}} whileTap={slot.available ? {
                scale: 0.98
              } : {}} disabled={!slot.available} onClick={() => setSelectedSlot(slot.id)} className={`p-2 rounded-md text-center transition-colors ${!slot.available ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : selectedSlot === slot.id ? 'bg-green-600 text-white' : 'bg-white hover:bg-green-50 text-gray-700 border border-gray-200'}`}>
                    {slot.time}
                  </motion.button>)}
              </div>
              <div className="flex items-center mt-4 text-sm text-gray-500">
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-green-600 mr-1"></div>
                  <span>Available</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
                  <span>Booked</span>
                </div>
              </div>
            </div>
            {/* Booking Summary */}
            <div className="p-6">
              <div className="flex items-center mb-4">
                <UsersIcon size={20} className="text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-800">Booking Summary</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">
                    {selectedDate.toLocaleDateString('en-US', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time Slot:</span>
                  <AnimatePresence mode="wait">
                    <motion.span key={selectedSlot || 'none'} initial={{
                    opacity: 0,
                    y: 5
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} exit={{
                    opacity: 0,
                    y: -5
                  }} transition={{
                    duration: 0.2
                  }} className="font-medium">
                      {selectedSlot ? timeSlots.find(slot => slot.id === selectedSlot)?.time : 'Not selected'}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Turf Type:</span>
                  <span className="font-medium">Cricket</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-bold text-green-600">₹1,200</span>
                </div>
              </div>
              <motion.div whileHover={selectedSlot ? {
              scale: 1.02
            } : {}} whileTap={selectedSlot ? {
              scale: 0.98
            } : {}}>
                <Link to="/booking" className={`w-full block text-center py-3 rounded-md font-medium transition-colors ${selectedSlot ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`}>
                  Proceed to Book
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <div className="text-center mt-8 text-gray-600">
          <p>Want to check full availability or book multiple slots?</p>
          <Link to="/booking" className="text-green-600 font-medium hover:text-green-800 transition-colors">
            Go to advanced booking system →
          </Link>
        </div>
      </div>
    </section>;
};
export default BookingPreview;
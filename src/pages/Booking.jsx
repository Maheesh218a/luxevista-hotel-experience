import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Calendar as CalendarIcon, User } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedRoom = roomsData.find(r => r.id === parseInt(formData.roomId));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    if (!formData.checkIn || !formData.checkOut || !selectedRoom) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const nights = Math.max((end - start) / (1000 * 60 * 60 * 24), 1);
    return nights * selectedRoom.price;
  };

  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pb-20">
      <Helmet>
        <title>Online Booking | LuxeVista Hotel</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">Complete Your Booking</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form Area */}
          <div className="lg:w-2/3">
            <div className="glass rounded-2xl p-6 md:p-8">
                <motion.form 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-serif font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-4">Stay Details & Personal Info</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Check-in Date</label>
                      <input type="date" name="checkIn" required value={formData.checkIn} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Check-out Date</label>
                      <input type="date" name="checkOut" required value={formData.checkOut} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Room Type</label>
                      <select name="roomId" required value={formData.roomId} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none">
                        <option value="">Select a room...</option>
                        {roomsData.map(room => (
                          <option key={room.id} value={room.id}>{room.name} - ${room.price}/night</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Guests</label>
                      <select name="guests" value={formData.guests} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                      <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                      <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none" />
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-end">
                    <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                      Confirm Booking
                    </button>
                  </div>
                </motion.form>
            </div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:w-1/3">
            <div className="glass rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-serif font-semibold text-slate-900 dark:text-white mb-6">Booking Summary</h3>
              
              {selectedRoom ? (
                <>
                  <div className="mb-4">
                    <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                    <h4 className="font-semibold text-slate-900 dark:text-white text-lg">{selectedRoom.name}</h4>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6 border-b border-slate-200 dark:border-slate-700 pb-6">
                    <li className="flex justify-between"><span>Check-in</span> <span className="font-medium text-slate-900 dark:text-white">{formData.checkIn || '--'}</span></li>
                    <li className="flex justify-between"><span>Check-out</span> <span className="font-medium text-slate-900 dark:text-white">{formData.checkOut || '--'}</span></li>
                    <li className="flex justify-between"><span>Guests</span> <span className="font-medium text-slate-900 dark:text-white">{formData.guests}</span></li>
                  </ul>
                  <div className="flex justify-between items-center text-lg font-bold text-slate-900 dark:text-white mb-2">
                    <span>Total</span>
                    <span className="text-primary-500">${calculateTotal()}</span>
                  </div>
                  <p className="text-xs text-slate-500 text-right">Includes taxes and fees</p>
                </>
              ) : (
                <div className="text-center py-10 text-slate-500 dark:text-slate-400">
                  <p>Please select a room to see the summary.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border border-slate-200 dark:border-slate-700"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-500 w-10 h-10" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">Booking Confirmed!</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Thank you, {formData.firstName}. Your reservation for the {selectedRoom?.name} is confirmed. A confirmation email has been sent to {formData.email}.
              </p>
              <button 
                onClick={() => {
                  setIsModalOpen(false);
                  window.location.href = '/';
                }}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-md font-semibold transition-colors"
              >
                Return to Home
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Booking;

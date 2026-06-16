import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pb-20">
      <Helmet>
        <title>Location & Map | LuxeVista Hotel</title>
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center py-12 mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Discover Our Location</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Situated in the heart of the city, offering easy access to major attractions and corporate hubs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-6">
            <motion.div className="glass p-8 rounded-2xl" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6">Contact Details</h3>
              <ul className="space-y-6 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <MapPin className="text-primary-500 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">Address</strong>
                    123 Luxury Avenue, Colombo 00300, Sri Lanka
                  </div>
                </li>
                <li className="flex items-start">
                  <Phone className="text-primary-500 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">Phone / WhatsApp</strong>
                    +94 76 790 0101
                  </div>
                </li>
                <li className="flex items-start">
                  <Mail className="text-primary-500 mr-4 mt-1 shrink-0" size={24} />
                  <div>
                    <strong className="block text-slate-900 dark:text-white mb-1">Email</strong>
                    demo@luxevista.com
                  </div>
                </li>
              </ul>
              <button className="mt-8 w-full bg-slate-900 dark:bg-primary-500 text-white py-3 rounded-md font-semibold hover:bg-slate-800 dark:hover:bg-primary-600 transition-colors flex items-center justify-center">
                <Navigation size={18} className="mr-2" /> Get Directions
              </button>
            </motion.div>

            <motion.div className="glass p-8 rounded-2xl" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-4">Nearby Attractions</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-600 dark:text-slate-400">
                  <span>National Museum</span> <span className="font-semibold text-primary-500">1.2 km</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-600 dark:text-slate-400">
                  <span>Galle Face Green</span> <span className="font-semibold text-primary-500">2.5 km</span>
                </li>
                <li className="flex justify-between items-center border-b border-slate-200 dark:border-slate-700 pb-2 text-slate-600 dark:text-slate-400">
                  <span>Lotus Tower</span> <span className="font-semibold text-primary-500">3.0 km</span>
                </li>
                <li className="flex justify-between items-center text-slate-600 dark:text-slate-400">
                  <span>International Airport</span> <span className="font-semibold text-primary-500">32.0 km</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="lg:w-2/3 h-[600px] rounded-2xl overflow-hidden shadow-2xl relative border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800">
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-500 dark:text-slate-400">
              <MapPin size={64} className="text-primary-500 mb-4 opacity-50" />
              <p className="text-xl font-medium">Interactive Google Map Area</p>
              <p className="text-sm mt-2">Requires Maps API Key for actual implementation</p>
            </div>
            {/* Fake map image overlay */}
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Map" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

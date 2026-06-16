import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import QuickBookingForm from './QuickBookingForm';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-5xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 drop-shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Experience True <span className="text-primary-400">Luxury</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Discover an unparalleled stay with breathtaking views, world-class dining, and exclusive amenities.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <QuickBookingForm />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

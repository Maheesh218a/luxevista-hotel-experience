import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const events = [
  { title: 'Wedding Packages', desc: 'Fairy-tale weddings with breathtaking backdrops, custom catering, and dedicated planners.', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80' },
  { title: 'Corporate Events', desc: 'Host your next summit or retreat in our state-of-the-art conference facilities.', image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800&q=80' },
  { title: 'Local Activities', desc: 'Immerse yourself in the culture with cooking classes, yoga sessions, and art workshops.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80' },
  { title: 'Guided Tours', desc: 'Explore the hidden gems of the city with our expert local guides.', image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80' }
];

const Events = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pb-20">
      <Helmet>
        <title>Events & Experiences | LuxeVista Hotel</title>
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Curated Experiences</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, make every moment unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, idx) => (
            <motion.div 
              key={idx}
              className="glass rounded-2xl overflow-hidden group shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-3">{event.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{event.desc}</p>
                <button className="border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white px-6 py-2 rounded-md font-medium transition-colors w-full">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

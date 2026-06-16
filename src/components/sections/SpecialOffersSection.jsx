import { motion } from 'framer-motion';
import { Tag, Calendar, Gift } from 'lucide-react';

const offers = [
  {
    title: 'Honeymoon Package',
    description: 'Experience romantic bliss with our all-inclusive honeymoon suite, featuring a private dinner, spa treatments, and late checkout.',
    icon: Gift,
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    discount: '20% OFF'
  },
  {
    title: 'Family Getaway',
    description: 'Perfect for families! Includes connected rooms, free meals for kids under 12, and tickets to nearby attractions.',
    icon: Calendar,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    discount: '15% OFF'
  },
  {
    title: 'Weekend Escape',
    description: 'Recharge your batteries with our 2-night weekend package. Includes complimentary breakfast and airport transfers.',
    icon: Tag,
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    discount: '10% OFF'
  }
];

const SpecialOffersSection = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-dark-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4"
          >
            Exclusive Offers
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Take advantage of our curated packages and seasonal promotions for an unforgettable stay.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                  {offer.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif font-semibold mb-3 text-slate-900 dark:text-white flex items-center">
                  <offer.icon className="w-6 h-6 mr-2 text-primary-500" />
                  {offer.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                  {offer.description}
                </p>
                <button className="text-primary-500 dark:text-primary-400 font-medium hover:text-primary-600 dark:hover:text-primary-300 flex items-center transition-colors">
                  View Details <span className="ml-2">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;

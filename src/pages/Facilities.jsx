import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Utensils, Waves, Sparkles, Dumbbell, Users } from 'lucide-react';

const facilities = [
  { title: 'Fine Dining Restaurant', icon: Utensils, desc: 'Experience culinary excellence with our Michelin-star chef curated menu.', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80' },
  { title: 'Infinity Swimming Pool', icon: Waves, desc: 'Temperature-controlled infinity pool offering panoramic city skyline views.', image: 'https://images.unsplash.com/photo-1576013551627-11971f39f772?w=800&q=80' },
  { title: 'Luxury Wellness Spa', icon: Sparkles, desc: 'Rejuvenate your mind and body with our exclusive signature spa therapies.', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80' },
  { title: 'State-of-art Gym', icon: Dumbbell, desc: 'Fully equipped fitness center open 24/7 with personal trainers available.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80' },
  { title: 'Grand Conference Hall', icon: Users, desc: 'Versatile event spaces equipped with the latest audio-visual technology.', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80' }
];

const Facilities = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pb-20">
      <Helmet>
        <title>World-Class Facilities | LuxeVista Hotel</title>
      </Helmet>

      <div className="container mx-auto px-4 text-center py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">World-Class Facilities</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16">
          Indulge in an array of premium amenities designed to provide the ultimate comfort and convenience during your stay.
        </p>

        <div className="space-y-20">
          {facilities.map((fac, idx) => (
            <motion.div 
              key={idx} 
              className={`flex flex-col lg:flex-row gap-8 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="lg:w-1/2 w-full relative rounded-2xl overflow-hidden shadow-2xl group">
                <img src={fac.image} alt={fac.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="lg:w-1/2 w-full text-left lg:px-12">
                <div className="w-16 h-16 bg-primary-100 dark:bg-slate-800 text-primary-500 rounded-full flex items-center justify-center mb-6 shadow-md">
                  <fac.icon size={32} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">{fac.title}</h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  {fac.desc}
                </p>
                <button className="text-primary-500 font-bold tracking-wider uppercase text-sm border-b-2 border-primary-500 pb-1 hover:text-slate-900 dark:hover:text-white hover:border-slate-900 dark:hover:border-white transition-all">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilities;

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = ['All', 'Hotel', 'Rooms', 'Restaurant', 'Pool', 'Facilities'];

const images = [
  { src: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8c85', category: 'Hotel' },
  { src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32', category: 'Rooms' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4', category: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1576013551627-11971f39f772', category: 'Pool' },
  { src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457', category: 'Facilities' },
  { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b', category: 'Rooms' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f', category: 'Restaurant' },
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48', category: 'Facilities' },
  { src: 'https://images.unsplash.com/photo-1551882547-ff40c0d5bf8f', category: 'Pool' } // Using placeholder pool
];

const Gallery = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pb-20">
      <Helmet>
        <title>Gallery | LuxeVista Hotel</title>
      </Helmet>

      <div className="container mx-auto px-4 text-center py-12">
        <motion.h1 
          className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Photo & Video Gallery
        </motion.h1>
        <motion.p 
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          A visual journey through LuxeVista. Experience the grandeur, the details, and the unparalleled luxury.
        </motion.p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button key={cat} className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-colors font-medium">
              {cat}
            </button>
          ))}
        </div>

        {/* Video Placeholder */}
        <div className="relative w-full max-w-5xl mx-auto h-[60vh] rounded-2xl overflow-hidden mb-16 group cursor-pointer shadow-2xl">
          <img src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Drone View" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary-500/90 rounded-full flex items-center justify-center text-white pl-1 shadow-lg group-hover:bg-primary-500 transition-colors">
              <Play size={32} />
            </div>
          </div>
          <div className="absolute bottom-6 left-6 text-left">
            <span className="bg-primary-500 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-2 inline-block">Drone Tour</span>
            <h3 className="text-white text-2xl font-serif font-bold">LuxeVista Aerial View</h3>
          </div>
        </div>

        {/* Image Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              className="break-inside-avoid relative rounded-xl overflow-hidden group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={`${img.src}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} alt={img.category} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg border-b-2 border-primary-500 pb-1">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

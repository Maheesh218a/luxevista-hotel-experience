import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Check, Wifi, Wind, Tv, Coffee, Maximize } from 'lucide-react';
import { roomsData } from '../data/mockData';
import { Link } from 'react-router-dom';

const getIcon = (amenity) => {
  if (amenity.includes('WiFi')) return <Wifi size={18} />;
  if (amenity.includes('Air Conditioning')) return <Wind size={18} />;
  if (amenity.includes('TV')) return <Tv size={18} />;
  if (amenity.includes('Room Service')) return <Coffee size={18} />;
  if (amenity.includes('Balcony')) return <Maximize size={18} />;
  return <Check size={18} />;
};

const Rooms = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <Helmet>
        <title>Rooms & Suites | LuxeVista Hotel</title>
        <meta name="description" content="Explore our luxurious rooms and suites." />
      </Helmet>

      {/* Header */}
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Rooms & Suites
        </motion.h1>
        <motion.p 
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Discover your perfect sanctuary. Each of our meticulously designed rooms offers a blend of comfort, style, and state-of-the-art amenities.
        </motion.p>
      </div>

      {/* Room List */}
      <div className="container mx-auto px-4 pb-20">
        <div className="space-y-12">
          {roomsData.map((room, index) => (
            <motion.div 
              key={room.id}
              className="glass rounded-2xl overflow-hidden flex flex-col lg:flex-row group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="lg:w-1/2 relative overflow-hidden h-72 lg:h-auto">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">{room.name}</h2>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary-500">${room.price}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400 block">/ night</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6 font-medium">
                  <span>{room.size}</span>
                  <span>&bull;</span>
                  <span>{room.capacity}</span>
                  <span>&bull;</span>
                  <span>{room.bed}</span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3">
                  {room.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center text-slate-700 dark:text-slate-300 text-sm">
                      <span className="text-primary-500 mr-2">{getIcon(amenity)}</span>
                      {amenity}
                    </div>
                  ))}
                </div>

                <Link to="/booking" className="inline-block text-center w-full md:w-auto bg-slate-900 dark:bg-primary-500 hover:bg-slate-800 dark:hover:bg-primary-600 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                  Book This Room
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comparison Section */}
      <div className="bg-white dark:bg-slate-900 py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 overflow-x-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">Compare Rooms</h2>
          </div>
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="py-4 px-6 font-semibold text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800/50 rounded-tl-xl">Feature</th>
                {roomsData.map(room => (
                  <th key={room.id} className="py-4 px-6 font-serif font-bold text-lg text-primary-500 bg-slate-50 dark:bg-slate-800/50">{room.name}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm text-slate-600 dark:text-slate-300">
              <tr className="border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                <td className="py-4 px-6 font-medium">Size</td>
                {roomsData.map(r => <td key={r.id} className="py-4 px-6">{r.size}</td>)}
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                <td className="py-4 px-6 font-medium">Capacity</td>
                {roomsData.map(r => <td key={r.id} className="py-4 px-6">{r.capacity}</td>)}
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                <td className="py-4 px-6 font-medium">Bed Type</td>
                {roomsData.map(r => <td key={r.id} className="py-4 px-6">{r.bed}</td>)}
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                <td className="py-4 px-6 font-medium">Bathtub</td>
                {roomsData.map(r => <td key={r.id} className="py-4 px-6">{r.amenities.includes('Bathtub') ? <Check className="text-green-500" size={20}/> : '-'}</td>)}
              </tr>
              <tr className="border-b border-slate-200 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/20">
                <td className="py-4 px-6 font-medium">Private Pool</td>
                {roomsData.map(r => <td key={r.id} className="py-4 px-6">{r.amenities.includes('Private Pool') ? <Check className="text-green-500" size={20}/> : '-'}</td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Rooms;

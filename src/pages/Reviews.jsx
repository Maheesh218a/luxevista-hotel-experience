import { Helmet } from 'react-helmet-async';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { reviewsData } from '../data/mockData';

const Reviews = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pb-20">
      <Helmet>
        <title>Guest Reviews | LuxeVista Hotel</title>
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">What Our Guests Say</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Read authentic reviews from guests who have experienced the LuxeVista standard of hospitality.
          </p>
          
          <div className="flex justify-center items-center space-x-4 glass inline-flex px-8 py-4 rounded-full shadow-lg">
            <div className="text-4xl font-bold text-slate-900 dark:text-white">4.9</div>
            <div className="flex flex-col text-left">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">Based on 1,245 reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((review, idx) => (
            <motion.div 
              key={review.id}
              className="glass p-8 rounded-2xl relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Quote className="absolute top-6 right-6 text-primary-500/20 w-12 h-12" />
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} color={i < review.rating ? "currentColor" : "#cbd5e1"} />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-8 italic relative z-10 leading-relaxed text-lg">
                "{review.text}"
              </p>
              <div className="flex items-center mt-auto border-t border-slate-200 dark:border-slate-700 pt-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-xl mr-4 shadow-inner">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white font-serif">{review.name}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;

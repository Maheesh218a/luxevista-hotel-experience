import { motion } from 'framer-motion';
import { Monitor, CalendarCheck, Award, Gift, TrendingUp, Plane, Bot } from 'lucide-react';

const features = [
  { icon: Monitor, title: 'Virtual 360 Tour', desc: 'Explore our luxury spaces virtually before booking.' },
  { icon: CalendarCheck, title: 'Real-time Availability', desc: 'Instant calendar sync for seamless booking.' },
  { icon: Award, title: 'Loyalty Program', desc: 'Earn points and unlock exclusive rewards.' },
  { icon: Gift, title: 'Gift Vouchers', desc: 'Give the gift of luxury to your loved ones.' },
  { icon: TrendingUp, title: 'Dynamic Pricing', desc: 'Get the best rates guaranteed directly on our site.' },
  { icon: Plane, title: 'Airport Transfers', desc: 'Book seamless rides from the airport to your suite.' },
  { icon: Bot, title: 'AI Assistant', desc: '24/7 intelligent concierge at your fingertips.' }
];

const PremiumFeaturesSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4"
          >
            Premium Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            Enhance your stay with our signature digital features designed for maximum comfort and convenience.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] glass p-6 rounded-2xl flex flex-col items-center text-center hover:border-primary-400/50 transition-colors cursor-default group"
            >
              <div className="w-16 h-16 bg-primary-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                <feature.icon className="w-8 h-8 text-primary-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeaturesSection;

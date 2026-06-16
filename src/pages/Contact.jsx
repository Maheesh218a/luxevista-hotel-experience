import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300 pb-20">
      <Helmet>
        <title>Contact Us | LuxeVista Hotel</title>
      </Helmet>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We are here to assist you with any inquiries or special requests. Reach out to our dedicated concierge team.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-8">
            <motion.div className="glass p-8 rounded-2xl flex items-start shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full mr-6">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Phone & WhatsApp</h3>
                <p className="text-slate-600 dark:text-slate-400">+94 76 790 0101</p>
                <p className="text-sm mt-2 text-primary-500 font-medium">Available 24/7</p>
              </div>
            </motion.div>

            <motion.div className="glass p-8 rounded-2xl flex items-start shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full mr-6">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
                <p className="text-slate-600 dark:text-slate-400">demo@luxevista.com</p>
                <p className="text-sm mt-2 text-primary-500 font-medium">We reply within 24 hours</p>
              </div>
            </motion.div>

            <motion.div className="glass p-8 rounded-2xl flex items-start shadow-md" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-primary-100 text-primary-600 p-4 rounded-full mr-6">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Address</h3>
                <p className="text-slate-600 dark:text-slate-400">123 Luxury Avenue,<br/>Colombo 00300,<br/>Sri Lanka</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div className="lg:w-2/3 glass p-8 md:p-12 rounded-2xl shadow-xl" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-8">Send a Message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message Sent Successfully!"); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-shadow" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-shadow" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input type="text" required className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-shadow" placeholder="How can we help you?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea required rows="6" className="w-full px-4 py-3 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-shadow" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-md font-semibold transition-all flex items-center justify-center w-full md:w-auto shadow-lg hover:shadow-xl">
                <Send size={18} className="mr-2" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

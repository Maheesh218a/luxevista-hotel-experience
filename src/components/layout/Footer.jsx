import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-white font-bold tracking-wider">LuxeVista<span className="text-primary-400">.</span></h3>
            <p className="text-sm">Experience luxury and comfort at its finest. Your perfect getaway starts here.</p>
          </div>
          <div>
            <h4 className="text-lg text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/rooms" className="hover:text-primary-400 transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/facilities" className="hover:text-primary-400 transition-colors">Facilities</Link></li>
              <li><Link to="/offers" className="hover:text-primary-400 transition-colors">Special Offers</Link></li>
              <li><Link to="/gallery" className="hover:text-primary-400 transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Luxury Avenue, Colombo, Sri Lanka</li>
              <li>Phone: +94 76 790 0101</li>
              <li>WhatsApp: +94 76 790 0101</li>
              <li>Email: demo@luxevista.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for exclusive offers.</p>
            <div className="flex">
              <input type="email" placeholder="Your email" className="bg-slate-800 text-white px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary-400" />
              <button className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors text-white">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} LuxeVista Hotel Experience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

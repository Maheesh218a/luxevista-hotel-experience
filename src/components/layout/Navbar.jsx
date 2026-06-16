import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Facilities', path: '/facilities' },
  { name: 'Offers', path: '/offers' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "glass py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold tracking-wider">
            LuxeVista<span className="text-primary-400">.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary-400",
                  location.pathname === link.path ? "text-primary-400" : ""
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-1 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
                <Globe size={20} />
                <span className="text-sm uppercase">{language}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 glass rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-opacity invisible group-hover:visible">
                <button onClick={() => changeLanguage('en')} className="block w-full text-left px-4 py-2 hover:text-primary-400">English</button>
                <button onClick={() => changeLanguage('si')} className="block w-full text-left px-4 py-2 hover:text-primary-400">Sinhala</button>
              </div>
            </div>
            <Link to="/booking" className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full glass-dark p-4 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium hover:text-primary-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
            <button onClick={toggleTheme} className="flex items-center space-x-2">
              {theme === 'dark' ? <><Sun size={20}/> <span>Light Mode</span></> : <><Moon size={20}/> <span>Dark Mode</span></>}
            </button>
            <div className="flex space-x-4">
               <button onClick={() => changeLanguage('en')} className={language === 'en' ? 'text-primary-400' : ''}>EN</button>
               <button onClick={() => changeLanguage('si')} className={language === 'si' ? 'text-primary-400' : ''}>SI</button>
            </div>
          </div>
          <Link to="/booking" onClick={() => setIsOpen(false)} className="bg-primary-500 text-white text-center py-3 rounded-md font-medium mt-4">
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

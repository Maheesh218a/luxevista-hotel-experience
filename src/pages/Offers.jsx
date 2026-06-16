import { Helmet } from 'react-helmet-async';
import SpecialOffersSection from '../components/sections/SpecialOffersSection';

const Offers = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-dark-bg transition-colors duration-300">
      <Helmet>
        <title>Special Offers | LuxeVista Hotel</title>
      </Helmet>
      <SpecialOffersSection />
    </div>
  );
};

export default Offers;

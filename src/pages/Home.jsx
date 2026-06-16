import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import SpecialOffersSection from '../components/sections/SpecialOffersSection';
import PremiumFeaturesSection from '../components/sections/PremiumFeaturesSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Home | LuxeVista Hotel Experience</title>
        <meta name="description" content="Experience true luxury at LuxeVista Hotel. Book your stay today." />
      </Helmet>
      
      <HeroSection />
      <SpecialOffersSection />
      <PremiumFeaturesSection />
      
    </div>
  );
};

export default Home;

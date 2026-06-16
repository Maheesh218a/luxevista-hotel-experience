import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import Facilities from './pages/Facilities';
import Reviews from './pages/Reviews';
import Offers from './pages/Offers';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="booking" element={<Booking />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="location" element={<Location />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="offers" element={<Offers />} />
          <Route path="events" element={<Events />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

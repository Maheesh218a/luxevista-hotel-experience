import { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickBookingForm = () => {
  const navigate = useNavigate();
  const [dates, setDates] = useState({ checkIn: '', checkOut: '' });
  const [guests, setGuests] = useState('2');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/booking');
  };

  return (
    <div className="glass rounded-xl p-4 md:p-6 mt-8 max-w-4xl mx-auto backdrop-blur-md bg-white/10 border-white/20">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white/90 dark:bg-slate-800/90 rounded-md p-3 flex items-center shadow-inner">
          <Calendar className="text-primary-500 mr-3" size={24} />
          <div className="flex flex-col text-left w-full">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Check In</label>
            <input 
              type="date" 
              className="bg-transparent border-none outline-none text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 focus:ring-0 p-0"
              value={dates.checkIn}
              onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex-1 bg-white/90 dark:bg-slate-800/90 rounded-md p-3 flex items-center shadow-inner">
          <Calendar className="text-primary-500 mr-3" size={24} />
          <div className="flex flex-col text-left w-full">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Check Out</label>
            <input 
              type="date" 
              className="bg-transparent border-none outline-none text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 focus:ring-0 p-0"
              value={dates.checkOut}
              onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex-1 bg-white/90 dark:bg-slate-800/90 rounded-md p-3 flex items-center shadow-inner">
          <Users className="text-primary-500 mr-3" size={24} />
          <div className="flex flex-col text-left w-full">
            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Guests</label>
            <select 
              className="bg-transparent border-none outline-none text-sm md:text-base font-medium text-slate-800 dark:text-slate-200 focus:ring-0 p-0 appearance-none"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all shadow-lg hover:shadow-xl shrink-0"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default QuickBookingForm;

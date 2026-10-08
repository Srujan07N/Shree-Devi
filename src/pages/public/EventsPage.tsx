import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { eventsData } from '../../data/events';
import { useToast } from '../../context/ToastContext';

export const EventsPage: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [registeredEvents, setRegisteredEvents] = useState<string[]>([]);
  const { showToast } = useToast();

  const categories = ['All', 'Technical', 'Hackathon', 'Workshop', 'Cultural', 'Placement Drive'];

  const filteredEvents = eventsData.filter((evt) => {
    if (filterCategory === 'All') return true;
    return evt.category === filterCategory;
  });

  const handleRegister = (evtId: string, title: string) => {
    if (registeredEvents.includes(evtId)) {
      showToast(`You have already registered for ${title}`, 'info');
      return;
    }
    setRegisteredEvents([...registeredEvents, evtId]);
    showToast(`Successfully registered for ${title}! Check your email for event passes.`, 'success');
  };

  return (
    <div className="w-full bg-white text-black">
      {/* Hero */}
      <section className="bg-white text-black py-16 lg:py-20 border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BC0202] font-bold"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#BC0202]"></span>
            Campus Calendar
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            Events & Symposia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Upcoming technical conclaves, inter-collegiate hackathons, management conclaves, and
            campus cultural festivals at SDIT.
          </motion.p>
        </div>
      </section>

      {/* Filter and List */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-neutral-100 rounded-md max-w-fit">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
                  filterCategory === cat
                    ? 'bg-black text-white shadow-xs'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {cat === 'All' ? 'All Categories' : cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((evt, idx) => {
              const isRegistered = registeredEvents.includes(evt.id);
              return (
                <motion.div
                  key={evt.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-neutral-50 border border-neutral-200 hover:border-[#BC0202] rounded-lg p-6 flex flex-col justify-between transition-all space-y-4 shadow-xs"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-[#BC0202] bg-[#FFF0F0] px-2 py-0.5 rounded">
                        {evt.category}
                      </span>
                      <span className="text-neutral-600 font-medium">
                        {evt.date}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-black leading-snug">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-neutral-700 leading-relaxed line-clamp-3 font-normal">
                      {evt.description}
                    </p>

                    <div className="pt-2 border-t border-neutral-200 space-y-1.5 text-xs text-neutral-600 font-medium">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#BC0202]" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#BC0202]" />
                        <span>{evt.venue}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-neutral-500" />
                        <span>{evt.organizer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    {evt.registrationOpen ? (
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleRegister(evt.id, evt.title)}
                        className={`w-full py-2 text-xs font-bold uppercase tracking-wider rounded transition-colors ${
                          isRegistered
                            ? 'bg-neutral-800 text-white cursor-default'
                            : 'bg-[#BC0202] hover:bg-[#8F0000] text-white shadow-xs'
                        }`}
                      >
                        {isRegistered ? 'Registered ✓' : 'Register for Event'}
                      </motion.button>
                    ) : (
                      <div className="text-center text-xs text-neutral-500 font-medium py-2">
                        Registrations Opening Soon
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

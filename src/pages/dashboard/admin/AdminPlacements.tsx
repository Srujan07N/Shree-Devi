import React, { useState } from 'react';
import { recruitersData } from '../../../data/recruiters';
import { eventsData } from '../../../data/events';
import { EventItem, Recruiter } from '../../../types';
import { Plus, Trash2, Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export const AdminPlacements: React.FC = () => {
  const { showToast } = useToast();
  const [recruiters, setRecruiters] = useState<Recruiter[]>(recruitersData);
  const [isAdding, setIsAdding] = useState(false);
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const [tier, setTier] = useState<Recruiter['tier']>('Core');

  const handleAddRecruiter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !sector) {
      showToast('Please provide recruiter name and industry sector', 'warning');
      return;
    }
    const newRec: Recruiter = {
      id: `rec-${Date.now()}`,
      name,
      sector,
      tier,
      logoText: name,
      batchYears: ['2026']
    };
    setRecruiters([newRec, ...recruiters]);
    setIsAdding(false);
    setName('');
    setSector('');
    showToast(`Recruitment partner ${name} registered!`, 'success');
  };

  const handleDelete = (id: string, rName: string) => {
    setRecruiters(recruiters.filter((r) => r.id !== id));
    showToast(`Removed recruiter record for ${rName}`, 'info');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Placement & Recruiter Administration
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Manage corporate tie-ups, campus recruitment drive schedules, and verified recruiter records.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel' : 'Add Recruiter Partner'}</span>
        </button>
      </div>

      {isAdding && (
        <form
          onSubmit={handleAddRecruiter}
          className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg space-y-4 animate-in fade-in duration-150"
        >
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Register Corporate Recruiter
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Company Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Cisco Systems"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Sector / Domain *
              </label>
              <input
                type="text"
                required
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                placeholder="Enterprise Networking & Security"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Recruiter Tier
              </label>
              <select
                value={tier}
                onChange={(e) => setTier(e.target.value as any)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              >
                <option value="Tier 1">Tier 1</option>
                <option value="Product">Product</option>
                <option value="Core">Core</option>
                <option value="Services">Services</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold rounded uppercase tracking-wider"
            >
              Save Recruiter
            </button>
          </div>
        </form>
      )}

      {/* Recruiter List */}
      <div className="bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left text-neutral-700 dark:text-neutral-300">
            <thead className="bg-neutral-100 dark:bg-[#181818] text-neutral-900 dark:text-white">
              <tr>
                <th className="p-3.5">Company Name</th>
                <th className="p-3.5">Industry Sector</th>
                <th className="p-3.5">Tier Category</th>
                <th className="p-3.5">Hiring Batches</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200 dark:divide-[#202020]">
              {recruiters.map((r) => (
                <tr key={r.id} className="hover:bg-neutral-50 dark:hover:bg-[#161616]">
                  <td className="p-3.5 font-bold text-neutral-900 dark:text-white">{r.name}</td>
                  <td className="p-3.5 text-neutral-600 dark:text-neutral-400">{r.sector}</td>
                  <td className="p-3.5 font-mono text-[#BC0202] font-semibold">{r.tier}</td>
                  <td className="p-3.5 font-mono text-neutral-500">{r.batchYears.join(', ')}</td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => handleDelete(r.id, r.name)}
                      className="p-1.5 text-neutral-400 hover:text-[#BC0202] rounded"
                      title="Remove partner"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export const AdminEvents: React.FC = () => {
  const { showToast } = useToast();
  const [events, setEvents] = useState<EventItem[]>(eventsData);
  const [isAdding, setIsAdding] = useState(false);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<EventItem['category']>('Technical');
  const [date, setDate] = useState('2026-11-20');
  const [time, setTime] = useState('09:30 AM - 04:30 PM');
  const [venue, setVenue] = useState('Central Auditorium');
  const [desc, setDesc] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !desc) {
      showToast('Please provide event title and description', 'warning');
      return;
    }
    const newEvt: EventItem = {
      id: `evt-${Date.now()}`,
      title,
      category,
      date,
      time,
      venue,
      department: 'Institutional',
      description: desc,
      organizer: 'SDIT Academic Council',
      registrationOpen: true,
      status: 'Upcoming'
    };
    setEvents([newEvt, ...events]);
    setIsAdding(false);
    setTitle('');
    setDesc('');
    showToast(`Event "${title}" added to academic calendar!`, 'success');
  };

  const handleDelete = (id: string, eTitle: string) => {
    setEvents(events.filter((e) => e.id !== id));
    showToast(`Deleted event "${eTitle}"`, 'info');
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display font-bold text-2xl text-neutral-900 dark:text-white">
            Institutional Events Management
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Publish conferences, symposiums, hackathons, and placement drives on the public website.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-4 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold uppercase tracking-wider rounded transition-colors inline-flex items-center gap-1.5 self-start sm:self-auto shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>{isAdding ? 'Cancel' : 'Create New Event'}</span>
        </button>
      </div>

      {isAdding && (
        <form
          onSubmit={handleAdd}
          className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg space-y-4 animate-in fade-in duration-150"
        >
          <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
            Schedule Event
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Event Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. AI In Healthcare Symposium"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              >
                <option value="Technical">Technical</option>
                <option value="Hackathon">Hackathon</option>
                <option value="Workshop">Workshop</option>
                <option value="Placement Drive">Placement Drive</option>
                <option value="Cultural">Cultural</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Time
              </label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="10:00 AM - 04:00 PM"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Venue
              </label>
              <input
                type="text"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Main Auditorium"
                className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Description *
            </label>
            <textarea
              rows={3}
              required
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Outline event agenda and participation details..."
              className="w-full bg-neutral-50 dark:bg-[#181818] border border-neutral-200 dark:border-[#282828] rounded px-3 py-2 text-xs text-neutral-900 dark:text-white"
            ></textarea>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-5 py-2 bg-[#BC0202] hover:bg-[#8F0000] text-white text-xs font-semibold rounded uppercase tracking-wider"
            >
              Publish Event
            </button>
          </div>
        </form>
      )}

      {/* Events List */}
      <div className="space-y-4">
        {events.map((evt) => (
          <div
            key={evt.id}
            className="p-6 bg-white dark:bg-[#121212] border border-neutral-200 dark:border-[#222222] rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] dark:bg-[#201010] px-2 py-0.5 rounded">
                  {evt.category}
                </span>
                <span className="text-xs text-neutral-400 font-mono">{evt.date}</span>
              </div>
              <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                {evt.title}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2">
                {evt.description}
              </p>
              <div className="text-[11px] text-neutral-400 pt-1 flex items-center gap-3">
                <span>Venue: {evt.venue}</span>
                <span>Time: {evt.time}</span>
              </div>
            </div>

            <div>
              <button
                onClick={() => handleDelete(evt.id, evt.title)}
                className="p-2 text-neutral-400 hover:text-[#BC0202] rounded transition-colors"
                title="Delete event"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

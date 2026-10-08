import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, BookOpen, Building2, Users, Calendar, Newspaper, ArrowRight } from 'lucide-react';
import { programsData } from '../../data/programs';
import { departmentsData } from '../../data/departments';
import { facultyData } from '../../data/faculty';
import { eventsData } from '../../data/events';
import { newsData } from '../../data/news';

interface CommandSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandSearch: React.FC<CommandSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matches: Array<{
      id: string;
      title: string;
      subtitle: string;
      type: string;
      url: string;
      icon: any;
    }> = [];

    // Search programs
    programsData.forEach((p) => {
      if (p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q)) {
        matches.push({
          id: `prog-${p.id}`,
          title: p.name,
          subtitle: `${p.degree} · ${p.department}`,
          type: 'Program',
          url: `/programs/${p.id}`,
          icon: BookOpen
        });
      }
    });

    // Search departments
    departmentsData.forEach((d) => {
      if (d.name.toLowerCase().includes(q) || d.shortName.toLowerCase().includes(q)) {
        matches.push({
          id: `dept-${d.id}`,
          title: d.name,
          subtitle: `HOD: ${d.hodName}`,
          type: 'Department',
          url: '/departments',
          icon: Building2
        });
      }
    });

    // Search faculty
    facultyData.forEach((f) => {
      if (f.name.toLowerCase().includes(q) || f.specialization.toLowerCase().includes(q)) {
        matches.push({
          id: `fac-${f.id}`,
          title: f.name,
          subtitle: `${f.designation} · ${f.department}`,
          type: 'Faculty',
          url: '/faculty',
          icon: Users
        });
      }
    });

    // Search events
    eventsData.forEach((e) => {
      if (e.title.toLowerCase().includes(q) || e.category.toLowerCase().includes(q)) {
        matches.push({
          id: `evt-${e.id}`,
          title: e.title,
          subtitle: `${e.date} · ${e.category}`,
          type: 'Event',
          url: '/events',
          icon: Calendar
        });
      }
    });

    // Search news
    newsData.forEach((n) => {
      if (n.title.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)) {
        matches.push({
          id: `news-${n.id}`,
          title: n.title,
          subtitle: `${n.date} · ${n.category}`,
          type: 'Notice',
          url: '/news',
          icon: Newspaper
        });
      }
    });

    return matches.slice(0, 8);
  }, [query]);

  const handleSelect = (url: string) => {
    navigate(url);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/50 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-white text-black border border-neutral-300 rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-neutral-200">
              <Search className="w-5 h-5 text-neutral-500 mr-3 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search programs, faculty, departments, events (Ctrl + K)..."
                className="w-full bg-transparent text-sm text-black placeholder:text-neutral-400 focus:outline-hidden"
              />
              <button
                onClick={onClose}
                className="text-neutral-500 hover:text-black p-1 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto p-2">
              {query.trim() === '' ? (
                <div className="py-8 px-4 text-center text-xs text-neutral-600">
                  <p className="font-bold text-neutral-800 mb-1">Quick Navigation Suggestions</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSelect('/programs')}
                      className="px-3 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded border border-neutral-300 transition-colors font-medium"
                    >
                      All Programs
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSelect('/admissions')}
                      className="px-3 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded border border-neutral-300 transition-colors font-medium"
                    >
                      Admissions 2026
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSelect('/placements')}
                      className="px-3 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded border border-neutral-300 transition-colors font-medium"
                    >
                      Placements & Analytics
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSelect('/faculty')}
                      className="px-3 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded border border-neutral-300 transition-colors font-medium"
                    >
                      Faculty Directory
                    </motion.button>
                  </div>
                </div>
              ) : results.length === 0 ? (
                <div className="py-8 text-center text-sm text-neutral-600">
                  No matching institutional records found for "{query}".
                </div>
              ) : (
                <div className="space-y-1">
                  {results.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.button
                        key={item.id}
                        whileHover={{ x: 4 }}
                        onClick={() => handleSelect(item.url)}
                        className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-neutral-100 transition-colors text-left group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-neutral-100 flex items-center justify-center text-[#BC0202] shrink-0 border border-neutral-200">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-black group-hover:text-[#BC0202] transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-neutral-600">{item.subtitle}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono uppercase bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-200">
                            {item.type}
                          </span>
                          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-[#BC0202] transition-colors" />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer Shortcut Bar */}
            <div className="p-3 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-600">
              <div className="flex items-center gap-3">
                <span>
                  Press <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded font-mono text-[10px] text-black">ESC</kbd> to close
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded font-mono text-[10px] text-black">↑</kbd>{' '}
                  <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 rounded font-mono text-[10px] text-black">↓</kbd> to navigate
                </span>
              </div>
              <span className="text-neutral-500 font-medium">SDIT Institutional Index</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

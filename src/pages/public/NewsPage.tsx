import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Calendar, User, ArrowRight, X } from 'lucide-react';
import { newsData } from '../../data/news';
import { NewsArticle } from '../../types';

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = [
    'All',
    'Academic',
    'Admissions',
    'Placements',
    'Events',
    'Examinations',
    'Achievements'
  ];

  const filteredNews = newsData.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

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
            Official Institutional Bulletin
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-black"
          >
            News & Announcements
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-normal"
          >
            Stay updated with academic circulars, campus recruitment drives, VTU examination
            schedules, admissions guidelines, and faculty achievements.
          </motion.p>
        </div>
      </section>

      {/* Filter and News List */}
      <section className="py-12 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-neutral-200">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#BC0202] text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((news, idx) => (
              <motion.div
                key={news.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-neutral-50 border border-neutral-200 hover:border-[#BC0202] rounded-lg p-6 flex flex-col justify-between transition-colors shadow-xs group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-[#BC0202] bg-[#FFF0F0] px-2 py-0.5 rounded font-bold">
                      {news.category}
                    </span>
                    <span className="text-neutral-500 font-medium">{news.date}</span>
                  </div>

                  <h3 className="font-display font-bold text-base text-black group-hover:text-[#BC0202] transition-colors leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-3 leading-relaxed font-normal">
                    {news.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-200 flex items-center justify-between text-xs">
                  <span className="text-neutral-500 text-[11px] font-medium">By {news.author}</span>
                  <button
                    onClick={() => setActiveArticle(news)}
                    className="text-xs font-bold text-[#BC0202] hover:underline flex items-center gap-1"
                  >
                    <span>Read Circular</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Read Notice Modal */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white text-black border border-neutral-300 rounded-xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#BC0202] bg-[#FFF0F0] px-2.5 py-0.5 rounded">
                    {activeArticle.category}
                  </span>
                  <span className="text-xs text-neutral-500">{activeArticle.date}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-black">
                  {activeArticle.title}
                </h3>
              </div>

              <div className="text-xs text-neutral-700 leading-relaxed space-y-3 border-t border-b border-neutral-200 py-4 font-normal">
                <p className="font-semibold text-black">{activeArticle.summary}</p>
                <p>
                  Official announcement released by the Office of the Principal and Controller of
                  Examinations, SDIT Kenjar. For student or parent inquiries, kindly contact the
                  designated department academic coordinator or the registrar's office.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>Issued by: {activeArticle.author}</span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 rounded text-xs font-bold transition-colors"
                >
                  Close Notice
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

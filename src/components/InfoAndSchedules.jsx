
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, XCircle, HelpCircle, Calendar } from 'lucide-react';

const InfoAndSchedules = () => {
  const scheduleData = [
    {
      title: 'Registration Period',
      date: 'October 1 to November 6',
    },
    {
      title: 'Lecture Series',
      date: 'November 8, 9, 15, 16',
    },
    {
      title: 'Competition Proper',
      date: 'November 22, 23, 29, 30',
    },
  ];

  return (
    <section className="relative py-12 px-4 bg-gray-50 overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Competition Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden flex flex-col"
          >
            <div className="bg-brand-dark-teal text-white p-8 sm:p-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <HelpCircle className="w-12 h-12 mx-auto mb-4 text-brand-teal" />
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Is joining the competition required?
                </h2>
              </motion.div>
            </div>
            <div className="p-8 sm:p-12 flex-grow">
              <div className="max-w-2xl mx-auto space-y-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-brand-orange/10 p-3 rounded-full">
                      <XCircle className="w-8 h-8 text-brand-orange" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-brand-dark mb-1">
                      No, it's optional
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Participation is <strong>not mandatory</strong>. You can choose whether to join when you fill out the registration form.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-brand-light-teal/10 p-3 rounded-full">
                      <Gift className="w-8 h-8 text-brand-light-teal" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-brand-dark mb-1">
                      Free & Recommended
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      It's a <strong>free add-on</strong> to make JournCamp+ more exciting. We highly recommend participating for the experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Schedules Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden flex flex-col"
          >
            <div className="bg-brand-dark-teal text-white p-8 sm:p-10 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Calendar className="w-12 h-12 mx-auto mb-4 text-brand-teal" />
                <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
                  Dates to Remember
                </h2>
              </motion.div>
            </div>
            <div className="p-8 sm:p-12 flex-grow">
              <div className="max-w-2xl mx-auto space-y-10">
                {scheduleData.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-brand-orange/10 p-3 rounded-full">
                        <Calendar className="w-8 h-8 text-brand-orange" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-brand-dark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoAndSchedules;

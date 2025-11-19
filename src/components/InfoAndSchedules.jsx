import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, XCircle, Gift } from 'lucide-react';

const InfoAndSchedules = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.section 
      id="info-and-schedules"
      className="bg-slate-50 py-16 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* Column 1: Competition Requirement */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
          >
            <div className="bg-brand-dark-teal p-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <XCircle className="w-7 h-7 mr-3 text-brand-teal" />
                Is joining the competition required?
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-start">
                <XCircle className="w-10 h-10 mr-4 text-brand-orange" />
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">No, it's optional</h4>
                  <p className="text-gray-600">
                    Participation is not mandatory. You can choose whether to join when you fill out the registration form.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Gift className="w-10 h-10 mr-4 text-brand-teal" />
                <div>
                  <h4 className="font-bold text-lg text-brand-dark">Free & Recommended</h4>
                  <p className="text-gray-600">
                    It's a free add-on to make JournCamp+ more exciting. We highly recommend participating for the experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Dates to Remember */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden"
          >
            <div className="bg-brand-dark-teal p-6">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <Calendar className="w-7 h-7 mr-3 text-brand-teal" />
                Dates to Remember
              </h3>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center">
                <div className="p-2 bg-brand-orange/10 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Registration Period</p>
                  <p className="text-gray-600">October 1 to November 6</p>
                </div>
              </div>
              <div className="flex items-center">
                 <div className="p-2 bg-brand-orange/10 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Lecture Series</p>
                  <p className="text-gray-600">November 8, 9, 15, 16</p>
                </div>
              </div>
              <div className="flex items-center">
                 <div className="p-2 bg-brand-orange/10 rounded-full mr-4">
                    <Calendar className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Competition Proper</p>
                  <p className="text-gray-600">November 22, 23, 29, 30</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default InfoAndSchedules;

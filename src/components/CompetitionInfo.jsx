import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Award, XCircle, HelpCircle } from 'lucide-react';

const CompetitionInfo = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-gray-50 overflow-hidden">
      {/* Background Silhouettes */}
      <Gift className="absolute -left-20 top-1/4 w-72 h-72 text-gray-200/70 opacity-20 rotate-12" />
      <Award className="absolute -right-24 -bottom-24 w-96 h-96 text-gray-200/70 opacity-20 -rotate-12" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200/80 overflow-hidden"
        >
          {/* Question Box Header */}
          <div className="bg-brand-dark-teal text-white p-8 sm:p-10 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <HelpCircle className="w-12 h-12 mx-auto mb-4 text-brand-teal" />
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Is joining the competition required?
              </h2>
            </motion.div>
          </div>

          {/* Answers Section */}
          <div className="p-8 sm:p-12">
            <div className="max-w-2xl mx-auto space-y-10">
              {/* Point 1: Optional */}
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

              {/* Point 2: Recommended */}
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
      </div>
    </section>
  );
};

export default CompetitionInfo;

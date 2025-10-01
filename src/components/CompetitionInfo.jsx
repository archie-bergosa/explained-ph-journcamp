import React from 'react';
import { motion } from 'framer-motion';

const CompetitionInfo = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
            Is joining the competition required?
          </h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
              <strong>No, joining the competition is optional.</strong> It is not required since it is included only as a <strong>free add-on activity</strong> to make JournCamp more exciting. In the registration form, participants can simply select whether or not they want to join.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              However, we <strong>highly recommend participating</strong> in the competition for the added experience and learning opportunity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitionInfo;
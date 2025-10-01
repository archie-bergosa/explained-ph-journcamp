import React from 'react';
import { motion } from 'framer-motion';
import { Gift, BookOpen, Award, XCircle } from 'lucide-react';

const CompetitionInfo = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 bg-slate-100 overflow-hidden">
      {/* Background Silhouettes */}
      <BookOpen className="absolute -left-24 -top-24 w-96 h-96 text-gray-200/80 opacity-20 rotate-12" />
      <Award className="absolute -right-24 -bottom-24 w-96 h-96 text-gray-200/80 opacity-20 -rotate-12" />

      <div className="container mx-auto relative">
        {/* Question Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-brand-dark-teal text-white p-8 rounded-xl shadow-2xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Is joining the competition required?
          </h2>
        </motion.div>

        {/* Answer Section */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Card 1: Optional */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/80 flex flex-col items-center text-center">
            <div className="bg-brand-orange/10 p-4 rounded-full mb-4">
                <XCircle className="w-10 h-10 text-brand-orange" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">
              No, it's optional
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Participation is <strong>not mandatory</strong>. In the registration form, you can simply select whether or not you want to join.
            </p>
          </div>

          {/* Card 2: Recommended */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200/80 flex flex-col items-center text-center">
            <div className="bg-brand-light-teal/10 p-4 rounded-full mb-4">
                <Gift className="w-10 h-10 text-brand-light-teal" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-2">
              Free & Recommended
            </h3>
            <p className="text-gray-600 leading-relaxed">
              It's a <strong>free add-on</strong> to make JournCamp+ more exciting. We highly recommend joining for the added experience and learning opportunity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitionInfo;

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Capacity Building',
      description: 'Strengthen campus publications through comprehensive skill development sessions'
    },
    {
      icon: Users,
      title: 'Community Network',
      description: 'Connect with young journalists and student publications nationwide'
    },
    {
      icon: Target,
      title: 'Expert Training',
      description: 'Learn from seasoned practitioners and award-winning storytellers'
    },
    {
      icon: Sparkles,
      title: 'Modern Approach',
      description: 'Explore impactful storytelling methods for today\'s media landscape'
    }
  ];

  return (
    <section id="about" className="py-12 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
            What is Explained PH JournCamp+?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            The Virtual Journalism Camp is an annual initiative of Explained PH, an online media network led by young community and student journalists nationwide. It is designed to strengthen campus publications through capacity-building sessions that equip young journalists with the skills and knowledge they need to thrive in today's fast-changing media landscape.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 md:p-8 mb-12 border border-gray-200 shadow-sm"
        >
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
            This year, we proudly launch <span className="font-bold text-brand-teal">JournCamp+: National Campus Press Summit</span> — combining seasoned practitioners with award-winning storytellers to give participants the chance to learn and engage with the best of Explained PH. As we continue to build communities where facts prevail, this summit becomes a vital space to share, collaborate, and explore impactful approaches to storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-brand-light-teal/10 rounded-full">
                  <feature.icon className="w-7 h-7 text-brand-teal" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-brand-dark mb-3">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
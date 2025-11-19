import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, ArrowRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '@/lib/variants';

const Competition = () => {
  return (
    <motion.section 
      id="competition"
      variants={staggerContainer(0.3, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="bg-brand-dark-teal text-white py-20 px-4"
    >
      <div className="container mx-auto text-center">
        <motion.div variants={fadeIn('up', 0.2)}>
            <Award className="w-16 h-16 mx-auto mb-6 text-brand-orange" />
        </motion.div>
        
        <motion.h2 
            variants={fadeIn('up', 0.4)}
            className="text-3xl sm:text-4xl font-extrabold mb-4"
        >
            Join the National Campus Press Summit
        </motion.h2>
        
        <motion.p 
            variants={fadeIn('up', 0.6)}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8"
        >
            A national competition designed to recognize and celebrate the best in campus journalism. Compete in various categories and showcase your skills.
        </motion.p>
        
        <motion.div variants={fadeIn('up', 0.8)}>
            <a href="https://docs.google.com/document/d/1vC3z-gB8vA3eL5C4aT5c6oJ3nFtD2sWqN8zI9xR0tY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold">
                    View Mechanics &amp; Guidelines
                    <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Competition;

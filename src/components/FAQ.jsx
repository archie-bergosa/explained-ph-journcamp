import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { fadeIn, staggerContainer } from '@/lib/variants';

const faqs = [
  {
    value: 'item-1',
    question: 'What is JournCamp+?',
    answer: 'JournCamp+ is a month-long virtual journalism camp by Explained PH, designed to enhance the skills of campus journalists through a series of lectures and workshops by seasoned practitioners and award-winning storytellers.',
  },
  {
    value: 'item-2',
    question: 'Who can join?',
    answer: 'The program is open to all aspiring and current campus journalists, as well as school paper advisers. We welcome everyone who wants to learn and grow in the field of journalism.',
  },
  {
    value: 'item-3',
    question: 'Is there a registration fee?',
    answer: 'No, participation in JournCamp+ is completely free. We are committed to making quality journalism training accessible to all.',
  },
  {
    value: 'item-4',
    question: 'What will I get from joining?',
    answer: 'Participants will receive a certificate of completion, access to exclusive learning materials, and the opportunity to be mentored by industry experts. Top participants will also be recognized.',
  },
    {
    value: 'item-5',
    question: 'How do I register?',
    answer: 'You can register by filling out the official registration form. The link will be available on this page and on our social media channels during the registration period.',
  },
];

const FAQ = () => {
  return (
    <motion.section 
        id="faq"
        variants={staggerContainer(0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-slate-50 py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div variants={fadeIn('up', 0.2)} className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-dark-teal">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about JournCamp+.</p>
        </motion.div>

        <motion.div variants={fadeIn('up', 0.4)}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="bg-white mb-4 rounded-lg shadow-sm border border-slate-200 px-6">
                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline text-brand-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-700 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQ;

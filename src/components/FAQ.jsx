import React from 'react';
import { motion } from 'framer-motion';
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
    question: 'How do I register?',
    answer: 'Simply fill out the official registration form and follow all the instructions provided. Once you submit, your slot will be recorded automatically.',
  },
  {
    value: 'item-2',
    question: 'How much is the registration fee and what does it cover?',
    answer: (
        <div>
            The registration fee is ₱150. This already covers:
            <ul className="list-disc list-inside mt-2">
                <li>Access to all campus journalism lectures</li>
                <li>Participation in JournCamp+ activities</li>
                <li>Eligibility for the National Campus Press Summit</li>
            </ul>
        </div>
    )
  },
  {
    value: 'item-3',
    question: 'What platform will be used?',
    answer: 'The lectures will be conducted through trusted online conferencing platforms, ensuring participants nationwide can join seamlessly.',
  },
  {
    value: 'item-4',
    question: 'I registered but haven’t received a confirmation email. What should I expect after registration?',
    answer: 'After submitting your form, you will see an on-screen confirmation message confirming that we have received your registration. A separate confirmation email will be sent to your registered address within a few days. If you don’t see it, kindly check your Spam or Promotions folder.',
  },
  {
    value: 'item-5',
    question: 'What is the schedule of the lectures?',
    answer: 'The detailed schedule and lecture lineup has been released. You can view it on the Lecture Series page.',
  },
  {
    value: 'item-6',
    question: 'When will I receive my certificate and lecture materials?',
    answer: 'All certificates and lecture materials will be released after the month-long event has concluded.',
  }
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

import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const lectureFaqs = [
    {
      question: "How do I register?",
      answer: "Simply fill out the official registration form and follow all the instructions provided. Once you submit, your slot will be recorded automatically."
    },
    {
      question: "How much is the registration fee and what does it cover?",
      answer: "The registration fee is ₱150. This already covers:\n\n- Access to all campus journalism lectures\n- Participation in JournCamp+ activities\n- Eligibility for the National Campus Press Summit"
    },
    {
      question: "What platform will be used?",
      answer: "The lectures will be conducted through trusted online conferencing platforms, ensuring participants nationwide can join seamlessly."
    },
    {
      question: "I registered but haven’t received a confirmation email. What should I expect after registration?",
      answer: "After submitting your form, you will see an on-screen confirmation message confirming that we have received your registration.\n\nA separate confirmation email will be sent to your registered address within a few days. If you don’t see it, kindly check your Spam or Promotions folder."
    },
    {
      question: "What is the schedule of the lectures?",
      answer: "The detailed schedule and lecture lineup will be released in the official event primer — COMING SOON."
    },
    {
      question: "When will I receive my certificate and lecture materials?",
      answer: "All certificates and lecture materials will be released after the month-long event has concluded."
    },
    {
      question: "What materials will I get as a participant?",
      answer: "Every registered participant will receive:\n\n- Certificate of Participation\n- Lecture recordings\n- Slide decks with lecture notes from the speakers"
    },
    {
      question: "Who are the speakers?",
      answer: "The official list of speakers will be included in the event primer — COMING SOON. Expect a lineup of NSPC champions, seasoned practitioners, and industry professionals."
    }
  ];

  const competitionFaqs = [
    {
      question: "Who can join the National Campus Press Summit?",
      answer: "The summit is open to registered JournCamp+ participants from elementary, high school, and college."
    },
    {
      question: "Do elementary, high school, and college compete in the same categories?",
      answer: "No. Categories are separated by level (Elementary, High School, and College)."
    },
    {
      question: "Do I need to pay an extra fee for the competition?",
      answer: "No. The competition is already included in your ₱150 registration fee."
    },
    {
      question: "How will I register for the competition?",
      answer: "Registration forms for both individual and group categories will be released separately, most likely by the end of October or early November.\n\nThese forms will be sent only after all registrants have been consolidated."
    },
    {
      question: "What are the requirements for group categories?",
      answer: "All members must have completed their registration and payment.\n\nPayment reference codes of all members will be required for cross-checking.\n\nA designated group leader or coach will submit the consolidated form for the team."
    },
    {
      question: "Is proof of enrollment required?",
      answer: "Yes. All participants (individual and group) will be asked to submit a proof of enrollment (e.g., school ID or certificate of enrollment) for validation."
    },
    {
      question: "What do winners of the competition receive?",
      answer: "Winners of the National Campus Press Summit will receive a Certificate of Recognition, in addition to the Certificate of Participation and lecture materials."
    },
    {
      question: "Our school requires an invitation letter to allow participation. Who should we contact?",
      answer: "For official letters and invitations, kindly email poalbis@explained.ph"
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-brand-dark-teal">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about JournCamp+ and the National Campus Press Summit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-6">📖 Lecture Series (JournCamp+)</h3>
            <Accordion type="single" collapsible className="w-full bg-white p-4 rounded-lg shadow-sm">
              {lectureFaqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-xs sm:text-sm md:text-base whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-brand-dark mb-6">🏆 National Campus Press Summit (Competition / Online Press Conference)</h3>
            <Accordion type="single" collapsible className="w-full bg-white p-4 rounded-lg shadow-sm">
              {competitionFaqs.map((faq, index) => (
                <AccordionItem value={`item-comp-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-sm md:text-base font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-xs sm:text-sm md:text-base whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Advisory = () => {
  return (
    <section id="advisory" className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-xl mx-auto p-8 md:p-12 text-center"
        >
          <img
            src="https://i.postimg.cc/ryBJVrwt/Deped-logo.png"
            alt="Department of Education Logo"
            className="h-20 object-contain mx-auto mb-6"
          />
          <h2 className="text-3xl font-extrabold text-brand-dark mb-3">
            Official DepEd Advisory
          </h2>
          <p className="text-gray-500 font-semibold mb-4 text-md max-w-3xl mx-auto">
            October 22, 2025 ADVISORY 207, s. 2025 – JournCamp+ 2025 and National Campus Press Summit
          </p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-6">
            We are grateful for the issuance of an official advisory from the Department of Education for JournCamp+. This helps us bring quality journalism training to students nationwide.
          </p>
          <a
            href="https://www.deped.gov.ph/2025/10/23/october-22-2025-advisory-207-s-2025-journcamp-2025-and-national-campus-press-summit/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark-teal transition-transform duration-300 hover:scale-105"
          >
            View Advisory
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Advisory;

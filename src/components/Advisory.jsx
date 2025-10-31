import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Advisory = () => {
  return (
    <section id="advisory" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-4xl mx-auto md:flex items-center"
        >
          <div className="md:w-1/4 p-6 flex justify-center items-center bg-gray-100 md:bg-white">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/DEPED_logo.png/600px-DEPED_logo.png"
              alt="Department of Education Logo"
              className="h-24 w-24 object-contain"
            />
          </div>
          <div className="md:w-3/4 p-8">
            <h3 className="text-2xl font-bold text-brand-dark-teal mb-3">
              Official DepEd Advisory
            </h3>
            <p className="text-gray-700 mb-4">
              We are grateful for the issuance of an official advisory from the Department of Education for JournCamp+. This helps us bring quality journalism training to students nationwide.
            </p>
            <a
              href="https://www.deped.gov.ph/2025/10/23/october-22-2025-advisory-207-s-2025-journcamp-2025-and-national-campus-press-summit/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-brand-teal hover:text-brand-dark-teal transition-all"
            >
              View Advisory &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advisory;

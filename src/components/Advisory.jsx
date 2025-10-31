import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Advisory = () => {
  return (
    <section id="advisory" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
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
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We are grateful for the issuance of an official advisory from the Department of Education for JournCamp+. This helps us bring quality journalism training to students nationwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Advisory;

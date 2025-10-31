import { motion } from "framer-motion";
import { fadeIn } from "../lib/variants";

const Advisory = () => {
  return (
    <section id="advisory" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">
            Official DepEd Advisory
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are grateful to the Department of Education for issuing an official advisory for JournCamp+.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-dark-teal mb-3">
                Explained PH & Department of Education
              </h3>
              <p className="text-gray-600 mb-6">
                We are grateful for the issuance of an official advisory from the Department of Education for JournCamp+. This helps us bring quality journalism training to students nationwide.
              </p>
              <a
                href="https://www.deped.gov.ph/2025/10/23/october-22-2025-advisory-207-s-2025-journcamp-2025-and-national-campus-press-summit/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block self-start bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark-teal transition-transform duration-300 hover:scale-105"
              >
                View Official Advisory
              </a>
            </div>

            <div className="p-8 bg-gray-100 flex items-center justify-center">
              <a
                href="https://i.postimg.cc/Hn46MYSp/Screenshot-2025-11-01-at-12-57-08-AM.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src="https://i.postimg.cc/Hn46MYSp/Screenshot-2025-11-01-at-12-57-08-AM.png"
                  alt="DepEd Advisory for JournCamp+"
                  className="w-full h-auto object-cover"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advisory;

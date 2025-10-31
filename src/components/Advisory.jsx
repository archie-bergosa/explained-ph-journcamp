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
          className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2">
            {/* Image Section */}
            <div className="relative min-h-[300px] md:min-h-0">
              <a 
                href="https://i.postimg.cc/Hn46MYSp/Screenshot-2025-11-01-at-12-57-08-AM.png"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
              >
                <img
                  src="https://i.postimg.cc/Hn46MYSp/Screenshot-2025-11-01-at-12-57-08-AM.png"
                  alt="DepEd Advisory for JournCamp+"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>

            {/* Text Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-brand-dark mb-4">
                Official DepEd Advisory
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                We are grateful for the issuance of an official advisory from the Department of Education for JournCamp+. This helps us bring quality journalism training to students nationwide.
              </p>
              <a
                href="https://www.deped.gov.ph/2025/10/23/october-22-2025-advisory-207-s-2025-journcamp-2025-and-national-campus-press-summit/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block self-start bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-dark-teal transition-transform duration-300 hover:scale-105"
              >
                View Advisory
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advisory;

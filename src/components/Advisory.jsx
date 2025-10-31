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
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-brand-dark mb-4">
            Official DepEd Advisory
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            JournCamp+ is officially recognized by the Department of Education.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden md:max-w-6xl mx-auto"
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-brand-dark-teal mb-4">
                EXPLAINED PH 🤝 Department of Education
              </h3>
              <div className="text-gray-700 space-y-4">
                <p>
                  We express our gratitude to the Department of Education
                  National Office for the issuing an advisory for JournCamp+:
                  National Campus Press Summit 2025, the biggest and most
                  ambitious edition of Explained PH’s annual journalism camp!
                  This is a big step towards making campus journalism
                  initiatives accessible nationwide.
                </p>
                <p>
                  JournCamp+ is a month-long celebration of campus journalism
                  featuring a full lineup of lectures across all categories,
                  extended Q&A sessions with speakers, and exclusive access to
                  lecture recordings and materials—all designed to help young
                  storytellers grow and thrive.
                </p>
                <p>
                  We are also launching the National Campus Press Summit, a
                  virtual press conference where campus journalists from
                  elementary, high school, and college levels can submit their
                  outputs and compete for medals, certificates, and national
                  recognition.
                </p>
              </div>
              <a
                href="https://www.deped.gov.ph/2025/10/23/october-22-2025-advisory-207-s-2025-journcamp-2025-and-national-campus-press-summit/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-brand-teal text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-dark-teal transition-all text-center"
              >
                View Advisory
              </a>
            </div>
            <div className="md:w-1/2 p-8 bg-slate-100 flex items-center justify-center">
              <img
                src="https://i.postimg.cc/Hn46MYSp/Screenshot-2025-11-01-at-12-57-08-AM.png"
                alt="DepEd Advisory for JournCamp+"
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advisory;

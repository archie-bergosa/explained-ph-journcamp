import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  FileText, 
  Calendar,
  Clock,
  Edit3,
  Video,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  Smartphone,
  MessageSquare
} from 'lucide-react';

const EditorialWriting = () => {
  const allowedMaterials = [
    "Official JournCamp+ Activity Sheet (print multiple copies)",
    "Maximum of two black ballpoint pens",
    "Classic watch for timekeeping",
    "Fact sheet/press release (provided by organizers)"
  ];

  const videoRequirements = [
    "Show the writer, their paper, their hands, and the workspace",
    "Show the fact sheet or press kit",
    "Show that the writer is not using unauthorized devices"
  ];

  const formStyleCriteria = [
    "Uses a lead paragraph that contains a news peg and the general stand of the writer",
    "Presents arguments that are based on facts",
    "Cites sources of facts to add credibility to the arguments raised",
    "Uses a strong and thought-provoking title",
    "Shows logical reasoning",
    "Observes the rules of grammar and syntax",
    "Utilizes transitions properly",
    "Observes gender fair language"
  ];

  const contentCriteria = [
    "Presents the general stance of the writer in the lead",
    "Utilizes factual information from interviews and documents review, data analyses, and other reliable sources",
    "Displays evidence of the writer's knowledge and understanding of issues/problems",
    "Reflects clarity of the message and can influence the public opinion",
    "Arguments presented in the body logically support the writer's stand"
  ];

  const ethicsCriteria = [
    "Showcases original works of students",
    "Properly cites information and attributes these facts from the source of information",
    "Observes standards of journalism in terms of fairness, relevance, accuracy, and balance",
    "Has no potentially libelous or obscene content, plagiarism and copyright violations"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 bg-gradient-to-br from-brand-orange via-red-600 to-brand-orange"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.6)}
            initial="initial"
            animate="animate"
            className="text-center text-white"
          >
            <MessageSquare className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Editorial Writing
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Mechanics and Guidelines
            </p>
            <p className="text-lg mt-2 opacity-90">
              JournCamp+: National Campus Press Summit
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.3, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Contest Overview
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-brand-orange/10 to-red-50 border-l-4 border-brand-orange p-8 rounded-r-lg">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Participants shall craft a <span className="font-bold text-brand-orange">handwritten editorial</span> articulating a clear, justified stand on an issue presented in the contest materials. The editorial must demonstrate <span className="font-bold">depth of reasoning, internal coherence, and a persuasive, principled viewpoint</span>.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Time Allotment Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Clock className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Time Allotment
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-brand-dark-teal mb-3">Maximum Duration: 2 Hours</h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-sm mt-1">
                    1
                  </div>
                  <div>
                    <p className="font-bold text-lg">1 hour and 20 minutes</p>
                    <p className="text-base">Allotted for article creation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm mt-1">
                    2
                  </div>
                  <div>
                    <p className="font-bold text-lg">40 minutes</p>
                    <p className="text-base">Reserved for scanning and other situations that may warrant an excuse and extension by the proctor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg text-red-900 mb-2">Critical Deadline</p>
                  <p className="text-base text-gray-700">
                    Participants are free to submit as soon as possible and are highly encouraged to do so. 
                    <span className="font-bold text-red-900"> Once a writer goes beyond one hour and 20 minutes, it will be grounds for disqualification.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Allowed Materials Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Edit3 className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Allowed Materials
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            During the event, participants will write their editorials <span className="font-bold text-brand-orange">by hand</span>. Thus, they will submit their entries through a handwritten output, with an activity sheet provided by the organizers.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {allowedMaterials.map((material, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                <CheckCircle className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                <p className="text-base text-gray-800">{material}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-base text-gray-600 italic">
              Organizers will issue a fact sheet, press release, or conduct a live press conference, or use any similar method for the writer's reference.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Gadget Use Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.6, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Smartphone className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Gadget Use
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Gadgets (laptops and phones) are allowed for THREE purposes only:</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Reviewing the fact sheet or material</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Communicating with the organizers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Recording themselves writing with a clear view of their area</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Once caught engaging in <span className="font-bold text-red-900">suspicious activity</span> or if the video recording does not provide a clear view of their surroundings, their writing, and the general environment, it will merit an investigation by the organizers and proctors. 
                    <span className="font-bold text-red-900"> It may be grounds for disqualification if proven guilty.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Proof of Authenticity Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Video className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Proof of Authenticity
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            Writers and participants must submit <span className="font-bold text-brand-teal">one uninterrupted continuous-angle video recording</span> of themselves writing, which must clearly demonstrate the writer focusing only on writing or referring to the fact sheet/source material.
          </p>

          <div className="max-w-4xl mx-auto mb-10">
            <h3 className="text-xl font-bold text-brand-dark-teal mb-6 text-center">Continuous-angle video must:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {videoRequirements.map((req, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-brand-teal/20">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-brand-teal/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-brand-teal">{index + 1}</span>
                  </div>
                  <p className="text-base text-gray-700 text-center">{req}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700">
                <span className="font-bold text-red-900">Any attempts to conduct research, paste external output, or engage in other forms of dishonesty and foul play will be grounds for disqualification, should such actions be found to have occurred.</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <h4 className="text-lg font-bold text-brand-dark-teal mb-3">Additional Requirements:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Writers must sign and submit a <span className="font-bold">declaration of originality</span>, with the format to be provided by the organizers beforehand</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Ensure declaration and activity sheets are prepared and printed beforehand to avoid delays in submission</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Submit handwritten output <span className="font-bold">(with no byline or identifying marks)</span> through clear scanned photos (using a scanner or apps like CamScanner) or as PDF</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Timekeeping and Deadlines */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.8, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Clock className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Timekeeping and Deadlines
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="border-l-4 border-brand-teal pl-6 py-3">
              <p className="text-base text-gray-700">Each category has a designated writing/production period.</p>
            </div>
            <div className="border-l-4 border-brand-orange pl-6 py-3">
              <p className="text-base text-gray-700">For handwritten individual events, the writing window is strictly limited; scanning and submission time are controlled separately.</p>
            </div>
            <div className="border-l-4 border-red-600 pl-6 py-3">
              <p className="text-base text-gray-700">
                <span className="font-bold text-red-900">Late submissions will not be accepted</span> unless the proctor confirms that legitimate technical issues are present.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Judging Criteria Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.9, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Award className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Judging Criteria
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Participants will be judged according to the <span className="font-bold text-brand-dark-teal">NSPC 2025 criteria</span>, which are summarized as follows:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Form and Style */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-teal">40%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Form and Style</h3>
              </div>
              <ul className="space-y-2">
                {formStyleCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-orange">50%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Content</h3>
              </div>
              <ul className="space-y-2">
                {contentCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ethics */}
            <div className="bg-white p-6 rounded-lg border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-red-600">10%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Ethics</h3>
              </div>
              <ul className="space-y-2">
                {ethicsCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-brand-teal" />
              <p className="text-sm font-bold text-gray-800">
                All judging follows DepEd NSPC 2025 framework and scoresheets
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default EditorialWriting;

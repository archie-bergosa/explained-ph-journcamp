import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  PenTool, 
  Clock,
  Edit3,
  Video,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  Smartphone,
  X
} from 'lucide-react';

const EditorialCartooning = () => {
  const cartoonTechniques = [
    "Symbolism",
    "Caricature",
    "Analogy",
    "Metaphor",
    "Satire",
    "Contrast",
    "Exaggeration",
    "Labels"
  ];

  const notAllowed = [
    "Digital tablets or styluses",
    "Drawing apps or software",
    "Coloring materials (colored pens, markers, watercolor, etc.)",
    "Rulers, stencils, templates, or mechanical guides",
    "Printed backgrounds or overlays"
  ];

  const submissionRequirements = [
    "Neatly hand-drawn",
    "Free from smudges and stray marks",
    "Scanned or photographed clearly",
    "Uploaded in PDF or JPEG format",
    "No bylines, initials, signatures, school names, or identifying marks"
  ];

  const allowedMaterials = [
    "Official JournCamp+ Editorial Cartooning Activity Sheet with Oslo paper",
    "Maximum of two Mongol 2 graphite pencils",
    "One eraser",
    "Pencil sharpener",
    "Optional analog watch for timekeeping"
  ];

  const suspiciousActivity = [
    "Frequently looking off-screen",
    "Drawing strokes inconsistent with the recorded video",
    "Use of hidden guides, printed cartoons, or reference images",
    "Camera angle not showing a clear view of the entire workspace and cartoonist"
  ];

  const videoRequirements = [
    "Show the writer, their paper, their hands, and the workspace",
    "Show the fact sheet or press kit",
    "Show that the writer is not using unauthorized devices",
    "The entire drawing process",
    "The workspace",
    "The prompt/theme is visible at the start"
  ];

  const formStyleCriteria = [
    "Makes use of a minimum number of labels",
    "Shows logical use of various sizes, dimensions, and proportions of images",
    "Displays attractive use of shading and other techniques",
    "Utilizes witty, original, and creative representations of ideas/concepts on the issue given"
  ];

  const contentCriteria = [
    "Presents a clear, specific and a recognizable point-of-view or opinion on the given issue or topic",
    "Raises relevant, timely issues and concerns about the topic",
    "Is in good taste and free from libelous, indecent, and abstract ideas",
    "Arouses interest and analytical thinking among its readers",
    "Constructively criticizes and influences readers' opinion"
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
            <PenTool className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Editorial Cartooning
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              Mechanics and Guidelines
            </p>
            <p className="text-lg mt-2 opacity-90">
              JournCamp+: National Campus Press Summit
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Contest Date: November 28, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Submission Deadline: November 28, 2025 - 11:59 PM</span>
                </div>
              </div>
            </div>
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
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-brand-teal/10 to-blue-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Editorial cartooning is a <span className="font-bold text-brand-teal">visual form of commentary</span> that distills ideas, issues, and public sentiments into a single compelling illustration. It requires mastery of symbolism, clarity of message, and adherence to ethical and journalistic standards.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Through the interplay of imagery and metaphor, editorial cartoonists <span className="font-bold text-brand-teal">shed light on social realities and provoke thoughtful reflection</span>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Task Requirements</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Participants shall create an <span className="font-bold">original, hand-drawn editorial cartoon</span> based on the prompt or theme given during the contest. The cartoon may make use of:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {cartoonTechniques.map((technique, index) => (
                  <div key={index} className="bg-gradient-to-br from-brand-orange/10 to-red-50 p-3 rounded-lg text-center border border-brand-orange/20">
                    <p className="text-sm font-bold text-gray-800">{technique}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 italic">
                —but always in service of a coherent, well-articulated message.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-base text-gray-700">
                  While artistic skill is essential, the <span className="font-bold">strength, clarity, and relevance of the message remain the core</span> of the evaluation of cartoons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Medium and Output Requirements Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Edit3 className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Medium and Output Requirements
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-brand-teal/10 to-blue-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-3">Traditional Hand-Drawn Media Only</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Contestants will be subject to <span className="font-bold">traditional hand-drawn media only</span>. They are instructed to use a <span className="font-bold text-brand-teal">Mongol 2 graphite pencil and an eraser</span>. Cartoonists will also utilize Oslo papers that have the official JournCamp+ Editorial Cartooning Activity Sheet markings.
              </p>
            </div>

            <div className="bg-red-50 border-2 border-red-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <X className="w-6 h-6" />
                The following tools and materials are NOT allowed:
              </h3>
              <div className="space-y-3">
                {notAllowed.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-base font-bold text-red-900">
                  The cartoon must be created freehand.
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-orange p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Final Submission Format</h3>
              <p className="text-base text-gray-700 mb-4">
                Final submission must include the finished cartoon, of which are:
              </p>
              <div className="space-y-2">
                {submissionRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{req}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Time Allotment Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Clock className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Time Allotment
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-brand-teal/5 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-brand-dark-teal mb-4">Asynchronous</h3>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg">Release of Topics</p>
                    <p className="text-base">7:00 AM Philippine Time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg">Opening of Submissions</p>
                    <p className="text-base">7:00 AM Philippine Time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg">Deadline of Submissions</p>
                    <p className="text-base">11:59 PM Philippine Time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg">Schedule of Free Lectures</p>
                    <p className="text-base">8:00 PM Philippine Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Allowed Materials Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.6, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <CheckCircle className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Allowed Materials
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            During the event, participants will create their cartoons <span className="font-bold text-brand-orange">by hand</span>. They will submit their entries through a handdrawn output, with an activity sheet provided by the organizers.
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {allowedMaterials.map((material, index) => (
              <div key={index} className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
                <CheckCircle className="w-6 h-6 text-brand-teal flex-shrink-0 mt-0.5" />
                <p className="text-base text-gray-800">{material}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-base text-gray-600 italic">
              Organizers will issue a fact sheet, press release, or conduct a live press conference, or use any similar method for the cartoonist's reference.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Proctoring and Gadget Use Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Smartphone className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Proctoring and Gadget Use
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
                  <p className="text-base text-gray-700">Recording themselves drawing with a clear view of their work area</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Once caught engaging in <span className="font-bold text-red-900">suspicious activity</span> or if the video recording does not provide a clear view of their surroundings, their drawing, and the general environment, it will merit an investigation by the organizers and proctors. 
                    <span className="font-bold text-red-900"> It may be grounds for disqualification if proven guilty.</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="text-sm font-bold text-gray-800 mb-3">Suspicious activity may include (but not limited to):</p>
                <div className="space-y-2">
                  {suspiciousActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="text-sm text-gray-700">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Proof of Authenticity Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.8, 0.6)}
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
            Writers and participants must submit <span className="font-bold text-brand-teal">one uninterrupted continuous-angle video recording</span> of themselves drawing, which must clearly demonstrate the cartoonist focusing only on drawing or referring to the fact sheet/source material.
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
              <p className="text-base text-gray-700 mb-2">
                <span className="font-bold text-red-900">It must be uninterrupted from start to finish.</span>
              </p>
              <p className="text-base text-gray-700">
                <span className="font-bold text-red-900">Any attempts to conduct research, paste external output, or engage in other forms of dishonesty and foul play will be grounds for disqualification, should such actions be found to have occurred.</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Timekeeping and Deadlines */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.0, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
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
            <div className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50">
              <p className="text-base text-gray-700">
                <span className="font-bold text-blue-900">Contest Date:</span> November 28, 2025
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-3 bg-purple-50">
              <p className="text-base text-gray-700">
                <span className="font-bold text-purple-900">Final Submission Deadline:</span> November 28, 2025 at 11:59 PM
              </p>
            </div>
            <div className="border-l-4 border-brand-teal pl-6 py-3">
              <p className="text-base text-gray-700">The writing/production for each category must be completed by 11:59 PM on the same day..</p>
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
        variants={fadeIn('up', 'tween', 1.1, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
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
                <div className="text-3xl font-bold text-brand-teal">30%</div>
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
                <div className="text-3xl font-bold text-brand-orange">60%</div>
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

export default EditorialCartooning;

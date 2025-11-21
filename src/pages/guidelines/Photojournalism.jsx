import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  Camera, 
  Clock,
  Upload,
  Video,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  Smartphone,
  X
} from 'lucide-react';

const Photojournalism = () => {
  const mobileRequirements = [
    "Photographs must be taken using smartphones only",
    "Devices capable of computational manipulation must be used strictly in standard camera mode",
    "Editing features, filters, or enhancements is prohibited"
  ];

  const nonMobileRequirements = [
    "Photographs must be taken using DSLR or point-and-shoot cameras",
    "Only one prime lens or a standard zoom lens (18–55mm) is allowed",
    "Participants must ensure their cameras are completely emptied before the contest",
    "Two (2) blank memory cards must be prepared for inspection before the contest begins"
  ];

  const allowedMaterials = [
    "For Non-Mobile Bracket: One DSLR or point-and-shoot camera with an approved lens",
    "For Mobile Bracket: One smartphone with a standard camera mode",
    "Two blank memory cards (Non-Mobile bracket)",
    "Official JournCamp+ Photojournalism Activity Sheet",
    "Two black ballpoint pens"
  ];

  const notAllowed = [
    "Spare cameras",
    "Drones",
    "Tripods, stabilizers, reflectors, or external lighting equipment",
    "Laptops or tablets",
    "External editing applications",
    "Filters or hardware accessories"
  ];

  const photoQualityCriteria = [
    "Technical clarity and composition",
    "Coherence with the theme",
    "Narrative strength",
    "Ethical representation"
  ];

  const uploadRequirements = [
    "Five (5) original photos",
    "Five (5) scanned handwritten captions",
    "Required RAW files and documentation with metadata",
    "Proof-of-authenticity materials"
  ];

  const videoRequirements = [
    "Show the writer, their paper, their hands, and the workspace",
    "Show the fact sheet or press kit",
    "Show that the writer is not using unauthorized devices",
    "Show the workspace",
    "Show the theme assignment"
  ];

  const fieldDocumentation = [
    "Photos and videos of the contestant",
    "Photos and videos of the field location shot that show the photojournalist",
    "Actual shooting process clips are thus are highly recommended"
  ];

  const technicalQualityCriteria = [
    "Exposure value and quality of image (free from digital noise) are free from smudges, not blurred, and cluttered",
    "Presents images with acceptable sharpness and are aesthetically pleasing"
  ];

  const communicativeQualityCriteria = [
    "Shows clear and specific ideas or angles connected to the theme or topic",
    "Uses creative photography techniques to highlight the visual story and arouse interest",
    "Captions are relevant and well-written"
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
            <Camera className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Photojournalism
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
                  <span className="font-semibold">Contest Date: November 27, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Submission Deadline: November 27, 2025 - 11:59 PM</span>
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
                Photojournalism is a discipline that blends <span className="font-bold text-brand-teal">technical expertise, visual storytelling, and journalistic integrity</span>. Contestants must demonstrate the ability to capture social reality, present compelling visual narratives, and accompany their work with accurate and concise captions that follow accepted newsroom standards.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                All entries must embody <span className="font-bold text-brand-teal">ethical media practice</span> and uphold the principles of fairness, relevance, and truth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Assignment Structure</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Participants will be given a <span className="font-bold">general theme or photo assignment in advance</span>. This early release enables contestants to prepare their shooting locations, identify subjects, and plan their fieldwork in a responsible and safe manner.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <p className="text-base text-gray-700">
                  <span className="font-bold text-red-900">Despite the advanced theme, all actual shooting must take place strictly within the designated 1.5-hour contest period under proctored conditions.</span>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Two Output Components:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">Five (5) original photographs</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">Five (5) handwritten captions</span>, each with a catchline and written on the official JournCamp+ Photojournalism Activity Sheet</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 italic">
                Each photo must demonstrate intentional composition, strong visual focus, and relevance to the assigned theme. Captions must follow the Associated Press (AP) Style and accurately identify the subjects, context, and moment captured.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Camera Categories Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Camera className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Camera Categories
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            The JournCamp+ Photojournalism category consists of <span className="font-bold text-brand-orange">two brackets</span>, acknowledging the diversity of equipment used by student journalists nationwide.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Mobile Bracket */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-400 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Smartphone className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-brand-dark-teal">1. Mobile Bracket</h3>
              </div>
              <ul className="space-y-3">
                {mobileRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-base text-gray-700">{req}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-Mobile Bracket */}
            <div className="bg-gradient-to-r from-brand-teal/10 to-green-50 border-2 border-brand-teal p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-8 h-8 text-brand-teal" />
                <h3 className="text-2xl font-bold text-brand-dark-teal">2. Non-Mobile Bracket</h3>
              </div>
              <ul className="space-y-3">
                {nonMobileRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-base text-gray-700">{req}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700">
                <span className="font-bold text-red-900">Note: Cross-category switching is not allowed once registration is finalized.</span>
              </p>
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
            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
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
                    <p className="text-base">7:00 PM Philippine Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Upload Requirements Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.6, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Upload className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Photos and Files Upload Guidelines
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Participants are allowed to take <span className="font-bold">unlimited photos</span>. However, participants must choose their <span className="font-bold">five best photos</span>. These photos must be able to reflect:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {photoQualityCriteria.map((criterion, index) => (
                  <div key={index} className="flex items-start gap-2 bg-white p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-brand-orange p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">File Naming Convention</h3>
              <div className="bg-slate-100 p-4 rounded-lg border border-slate-300 font-mono text-center">
                <p className="text-sm md:text-base lg:text-lg font-bold text-gray-800 break-all">CODE NUMBER_JOURNCAMP2025_PHOTOJOURNALISM</p>
              </div>
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                All photos must be saved in one folder and submitted to the corresponding Google Forms submission bin
              </p>
            </div>

            <div className="bg-gradient-to-r from-brand-teal/10 to-blue-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Participants shall upload:</h3>
              <ul className="space-y-2">
                {uploadRequirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{req}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg text-red-900 mb-2">For Non-Mobile Bracket Participants</p>
                  <p className="text-base text-gray-700">
                    <span className="font-bold">All RAW files must be submitted for verification.</span> No edits, filters, or crops are permitted. Any discrepancies between JPEG files and corresponding RAW files may result in disqualification.
                  </p>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Each of the five photos' file names must be noted by participants. These file names must match the identifiers used on the caption-writing sheet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Allowed Materials Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <CheckCircle className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Allowed Materials
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Participants may use:</h3>
              <div className="space-y-3">
                {allowedMaterials.map((material, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{material}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <X className="w-6 h-6" />
                NOT allowed during the shooting window:
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
                <p className="text-sm text-gray-700 italic">
                  Only items approved by the organizers before contest day may be brought to the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Gadget Use Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.8, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Smartphone className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Gadget Use
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Devices may only be used to:</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Receive instructions or communicate with organizers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Record the contestant's environment for authenticity verification</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Upload final outputs</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-bold text-red-900">Any other device usage</span>—including but not limited to messaging, browsing, research, external editing, reviewing photography tutorials—is <span className="font-bold text-red-900">strictly prohibited</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Proof of Authenticity Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.9, 0.6)}
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
            Writers and participants must submit <span className="font-bold text-brand-teal">one uninterrupted, continuous-angle video recording</span> of themselves conducting fieldwork related to the photo capture processes.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-dark-teal mb-6 text-center">Continuous-angle video must:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {videoRequirements.map((req, index) => (
                  <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-brand-teal/20">
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-brand-teal/10 flex items-center justify-center">
                      <span className="text-lg font-bold text-brand-teal">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700 text-center">{req}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">During the photo capture phase, field documentation must demonstrate:</h3>
              <div className="space-y-2">
                {fieldDocumentation.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 mb-4">
                <span className="font-bold text-red-900">Any attempts to conduct research, submit external output, or engage in other forms of dishonesty and foul play will be grounds for disqualification, should such actions be found to have occurred.</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <h4 className="text-lg font-bold text-brand-dark-teal mb-3">Declaration of Originality</h4>
              <p className="text-base text-gray-700 mb-4">
                Writers must sign and submit a declaration of originality, with the format to be provided by the organizers beforehand. The participants shall ensure that this is prepared and printed beforehand to avoid any delays in submission.
              </p>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-sm font-bold text-gray-800 mb-2">Furthermore, it affirms the following:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    No staged or pre-shot photos
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    No editing or enhancement
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    No external assistance (aside from a friend or family member documenting the photojournalist's field work)
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5" />
                    Compliance with journalistic ethics
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <p className="text-base text-gray-700">
                Lastly, writers must submit their handwritten output <span className="font-bold">(with no byline or identifying marks)</span> through clear scanned photos (using a scanner or apps like CamScanner) or as PDF, provided they have the necessary equipment and software.
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
            <div className="border-l-4 border-blue-600 pl-6 py-3 bg-blue-50">
              <p className="text-base text-gray-700">
                <span className="font-bold text-blue-900">Contest Date:</span> November 27, 2025
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-6 py-3 bg-purple-50">
              <p className="text-base text-gray-700">
                <span className="font-bold text-purple-900">Final Submission Deadline:</span> November 27, 2025 at 11:59 PM
              </p>
            </div>
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
        variants={fadeIn('up', 'tween', 1.1, 0.6)}
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
              Participants will be judged according to a <span className="font-bold text-brand-dark-teal">modification of the NSPC 2025 criteria</span>, which are summarized as follows:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Technical Quality */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-teal">50%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Technical Quality</h3>
              </div>
              <ul className="space-y-2">
                {technicalQualityCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Communicative Quality */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-orange">40%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Communicative Quality</h3>
              </div>
              <ul className="space-y-2">
                {communicativeQualityCriteria.map((criterion, index) => (
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
                All judging follows modified DepEd NSPC 2025 framework and scoresheets
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Photojournalism;

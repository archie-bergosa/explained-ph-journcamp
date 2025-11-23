import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  Video, 
  Clock,
  Smartphone,
  Upload,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  X,
  FileText
} from 'lucide-react';

const MobileJournalism = () => {
  const allowedMaterials = [
    "Smartphone (iOS or Android) - only one phone during the 4-hour window",
    "Mobile editing apps (e.g. CapCut, VN, KineMaster, Canva, Teleprompter) - must declare in advance",
    "Tripod/phone clamp allowed — no gimbals with motors",
    "Earbuds/headset for editing and audio monitoring (no external recorders)",
    "Wireless microphone"
  ];

  const notAllowed = [
    "Professional cameras or any recording device other than a mobile phone",
    "Gimbals with motors",
    "External recorders",
    "External desktop/classic video editors"
  ];

  const submissionFiles = [
    "final.mp4 (60-120 seconds portrait video)",
    "raw1.mp4, raw2.mp4... (all source mobile clips and photos)",
    "edit_screen.mp4 (screen recording of editing process)",
    "declaration.pdf (signed Declaration of Originality)",
    "blurb.txt/blurb.word/blurb.pdf (one-paragraph text blurb)",
    "Simple edit decision list (EDL) or list of timestamps/takes used"
  ];

  const preContestChecklist = [
    "Permissions and Safety: Obtain consent for identifiable individuals and ensure fieldwork safety",
    "Bandwidth Planning: Plan upload times and file compression settings; prepare alternative upload routes",
    "Power and Storage Check: Ensure sufficient battery and storage before the four-hour window",
    "Local Contingency: Document any emergency situations requiring proctor-approved alternatives"
  ];

  const contentAccuracyCriteria = [
    "Applies basic journalism rules: accuracy, fairness, relevance, and balance",
    "Uses a story style that fits mobile: news, features, human interest, light, or serious",
    "Adds verified information from interviews, on-the-ground reporting, documents, and sources",
    "Shows news value, correctness, and sourcing"
  ];

  const multimediaTechnicalCriteria = [
    "Uses multimedia well: videos, photos, audio, graphics, animations optimized for mobile",
    "Ensures all visuals/audio are clear, well-edited, captioned, and credited correctly",
    "Uses mobile journalism tools, apps (CapCut, VN Editor, Canva), and editing techniques"
  ];

  const languageInnovationCriteria = [
    "The script is well-written and complemented by a clear voiceover",
    "Utilizes an interesting or grounded structure that highlights the most critical angles and parts of the story",
    "Ability to use the mobile platform to elevate the story",
    "Utilizes fresh ideas or multimedia to enhance or clarify the story",
    "Adapts content to different platforms (e.g., Instagram, TikTok, X, Facebook)"
  ];

  const ethicsCriteria = [
    "Follows journalism ethics: accuracy, fairness, impartiality, and privacy",
    "Correctly cites sources and materials",
    "Shows respect for cultures and communities, emphasizing fair portrayal",
    "Avoids sensationalism and clickbait, while still keeping content engaging",
    "No use of staged works"
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
            <Video className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Mobile Journalism
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
                Mobile Journalism aims to empower student journalists to <span className="font-bold text-brand-teal">report, shoot, edit, and publish</span> a short mobile-first news piece using only smartphone hardware and mobile apps. This practice simulates <span className="font-bold">low-cost, rapid-response journalism</span> for social platforms.
              </p>
              <p className="text-sm text-gray-600 italic">
                By joining the competition, participants permit Explained PH to publish the entries on Social Media for educational and publicity purposes without affecting the ownership of the participants' work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Output Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">One video story (Portrait)</span> with a total runtime of around <span className="font-bold">60 to 120 seconds (1-2 minutes)</span></p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">One-paragraph text blurb</span> for publishing metadata and other purposes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">All source mobile clips and photos</span> (uncompressed and original files)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">Simple edit decision list (EDL)</span> or a list of timestamps or takes used</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Time Allotment Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.35, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
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

      {/* Time and Stages Section */}
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
              Time and Stages
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <p className="text-lg text-gray-700 text-center mb-10 max-w-4xl mx-auto">
            The contest is divided into <span className="font-bold text-brand-teal">three parts</span>: the preparation window, the production window, and the upload window.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark-teal mb-2">Preparation Window</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-bold">Advanced release of the theme or topic, given two days before the contest.</span> Mobile Journalists will use it to prepare necessary logistical considerations and planning for fieldwork. Furthermore, the contestants shall use this opportunity to be oriented and ask questions to the proctors and organizers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-teal/10 to-green-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-dark-teal mb-2">Production Window</h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <span className="font-bold">Four (4) hours total.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Allowed Materials and Software Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Smartphone className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Allowed Materials and Software
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Allowed materials, software, and requirements:</h3>
              <div className="space-y-3">
                {allowedMaterials.map((material, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{material}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-sm text-gray-600 italic">
                  <span className="font-bold">Important:</span> Editing must be done solely and entirely on the phone declared by the participant.
                </p>
              </div>
            </div>

            <div className="bg-red-50 border-2 border-red-600 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                <X className="w-6 h-6" />
                NOT Allowed:
              </h3>
              <div className="space-y-3">
                {notAllowed.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Pre-contest Logistics Section */}
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
              Pre-contest Logistics and Local Planning
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <p className="text-base text-gray-700 text-center mb-10 max-w-4xl mx-auto">
            Organizers will supply a short <span className="font-bold text-brand-teal">"Field Safety + Privacy Checklist"</span> during orientation.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {preContestChecklist.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-base text-gray-700">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Proctoring and Authenticity Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Shield className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Proctoring and Authenticity
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-brand-teal/10 to-blue-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-3">Continuous Documentation Required</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                <span className="font-bold">Continuous screen-recording during editing, or a desk camera/alternative phone to record the rendering process:</span> The journalist must be visibly seen working on the phone, conducting field work, or engaging in similar activities for the entire four-hour production time.
              </p>
              <div className="bg-white p-4 rounded-lg border border-brand-teal/20">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-brand-teal">Third-party assistance</span> from a friend, family, classmate, etc. is highly encouraged, and <span className="font-bold">only allowed if the third party signs a consent form</span> that attests their involvement is limited to documenting the participant's work.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Submission Requirements</h3>
              <p className="text-base text-gray-700 mb-4">Participants are required to submit:</p>
              <div className="space-y-2">
                {submissionFiles.map((file, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{file}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg text-gray-800 mb-2">Metadata Check</p>
                  <p className="text-base text-gray-700">
                    Participants must ensure that their submitted final file and source clips contain <span className="font-bold">creation timestamps in the file properties</span>. Organizers will cross-verify to ensure that shooting and editing took place within the four-hour window.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Submission and File Naming Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.8, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Upload className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Submission and File Naming
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-brand-orange/10 to-red-50 border-l-4 border-brand-orange p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-3">Folder Structure</h3>
              <div className="bg-slate-100 p-4 rounded-lg border border-slate-300 font-mono mb-4">
                <p className="text-sm md:text-base font-bold text-gray-800 mb-2">Folder Name:</p>
                <p className="text-sm md:text-base lg:text-lg text-brand-teal break-all">CODE_JOURNCAMP2025_MOJO</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-brand-orange/20">
                <p className="text-sm font-bold text-gray-800 mb-3">Inside folder:</p>
                <ul className="space-y-1 text-sm text-gray-700 font-mono break-words">
                  <li>• final.mp4</li>
                  <li>• raw1.mp4, raw2.mp4...</li>
                  <li>• edit_screen.mp4</li>
                  <li>• declaration.pdf</li>
                  <li>• blurb.txt / blurb.word / blurb.pdf</li>
                </ul>
              </div>
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
              Participants will be judged according to <span className="font-bold text-brand-dark-teal">JournCamp+'s own take of the Mobile Journalism criteria</span>, which are summarized as follows:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Content and Accuracy */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-teal">30%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Content and Accuracy</h3>
              </div>
              <ul className="space-y-2">
                {contentAccuracyCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Multimedia & Technical Presentation */}
            <div className="bg-white p-6 rounded-lg border-2 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-blue-600">30%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Multimedia & Technical Presentation</h3>
              </div>
              <ul className="space-y-2">
                {multimediaTechnicalCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language, Innovation, and Storytelling */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-orange">30%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Language, Innovation, and Storytelling</h3>
              </div>
              <ul className="space-y-2">
                {languageInnovationCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ethics & Professionalism */}
            <div className="bg-white p-6 rounded-lg border-2 border-red-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-red-600">10%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Ethics & Professionalism</h3>
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
                All judging follows JournCamp+ Mobile Journalism framework
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MobileJournalism;

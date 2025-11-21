import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  Users, 
  Clock,
  Layout,
  Video,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  X,
  FileText
} from 'lucide-react';

const CollaborativeDesktopPublishing = () => {
  const teamRoles = [
    "Layout Artist",
    "Cartoonist",
    "News Writer",
    "Feature Writer",
    "Opinion Writer",
    "Sports Writer",
    "Photojournalist"
  ];

  const allowedMaterials = [
    "Adobe InDesign, Adobe Illustrator, Adobe Photoshop, and Microsoft Publisher",
    "Fonts available offline (reviewed during registration process)",
    "Built-in shapes and default vectors",
    "Non-AI editing tools"
  ];

  const prohibitedMaterials = [
    "AI writing tools such as ChatGPT, Gemini, GrammarlyGO, etc.",
    "AI-generated images or templates",
    "Stock photos, stock videos, or external clip art",
    "Externally-sourced articles, quotes, or statistics",
    "Using an outside individual to assist in writing, editing, or designing",
    "Cellphones and smartphones for research and outside communication",
    "Usage of earphones and headphones as means of communication from outside sources"
  ];

  const mediaAssets = [
    "High-resolution photos (news, feature, sports)",
    "Short video snippets",
    "Fact sheets and press kits",
    "Editorial cartoon prompt/theme",
    "Speaker profile and event backgrounder"
  ];

  const sportsSimulationFeatures = [
    "Live narration of play-by-play events",
    "Real-time score updates",
    "Play logs",
    "Short video clips or stills",
    "Pre-game and post-game interviews"
  ];

  const submissionRequirements = [
    "The final PDF of the four-page publication",
    "Originality Declaration Form, signed by all team members"
  ];

  const recommendations = [
    "Prepare file organization systems (e.g., asset folders, naming protocols)",
    "Establish a unified design system early (colors, fonts, spacing)",
    "Assign a 'managing editor' or timekeeper within the team who monitors deadlines, logistics, and page progress",
    "Teams are encouraged to hold internal mock press conferences before the event"
  ];

  const contentCriteria = [
    "Exhibits an appropriate balance of news, editorial, features, sports, and other relevant and engaging content",
    "Utilizes facts from interviews, document review, data analysis, and other reliable sources",
    "Shows a variety of stories that fit the section where they are placed",
    "Cites historical references, statistics, and relevant names/facts to bolster credibility of statements, assertions, arguments, and/or narratives",
    "Provides a balance of light and serious topics",
    "Shows relevance of articles to students",
    "Showcases original works of students",
    "Correctly cites information and attributes these facts to the source of information",
    "Applies the principles of journalism"
  ];

  const technicalCriteria = [
    "Includes articles that are arranged according to importance",
    "Presents headlines that are clear and free of bias",
    "Makes use of clear pictures, appropriately cropped, and captioned",
    "Utilizes graphics, illustrations, and cartoons that are relevant",
    "Exhibits clear focus and coherent organization",
    "Observes the rules of grammar and syntax",
    "Observes proper journalistic style and format"
  ];

  const ethicsCriteria = [
    "Showcases original works of students",
    "Properly cites information and attributes these facts to the source of information",
    "Observes standards of journalism in terms of fairness, relevance, accuracy, and balance",
    "Has no potentially libelous or obscene content, plagiarism, and copyright violations"
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
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Collaborative Desktop Publishing
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
                  <span className="font-semibold">Contest Date: November 29, 2025</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">Submission Deadline: November 29, 2025 - 11:59 PM</span>
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
              <p className="text-lg text-gray-700 leading-relaxed">
                In Collaborative Desktop Publishing, a <span className="font-bold text-brand-teal">team of seven</span> will produce a <span className="font-bold">four-page, full-color publication in A4 bond paper size</span> using synchronized editorial inputs (a mini press conference and a sports exhibition) within a <span className="font-bold text-brand-teal">four-hour timed production window</span>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Team Composition (7 Members)</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                {teamRoles.map((role, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-brand-orange/10 to-red-50 p-3 rounded-lg border border-brand-orange/20">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-base font-bold text-gray-800">{role}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-900">Note:</span> A person is not limited to one singular role. It will be completely dependent on the team on how they plan to establish their task distribution. Nonetheless, each person must have a dedicated role before the contest.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">
                    <span className="font-bold">Only individuals who register from the same school</span> are allowed to compete together; no cross-school registrations are permitted.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">
                    <span className="font-bold">No in-person proctoring</span> will be enacted, yet all participants must join a Zoom meeting or other forms of video conferencing and <span className="font-bold">screen record their laptops</span> for proctor monitoring.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">
                    Participants are still subject to following the <span className="font-bold">four-hour output production</span>, which includes the printing process. Laptops will not need to be emptied, as they will be monitored in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stages and Time Blocks Section */}
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
              Stages and Time Blocks
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Coverage Stage */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-400 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">COVERAGE STAGE (Synchronous)</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="text-base text-gray-700 mb-3">
                    Participants will attend a <span className="font-bold">live briefing</span> where a resource speaker delivers a statement on the assigned topic. This is followed by a <span className="font-bold">moderated Q&A</span> in which teams may raise questions for further clarification.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-bold text-brand-dark-teal mb-3">Sports Exhibition Simulation</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Sports writers and photojournalists can attend a sports simulation designed to replicate a complete match environment. This may include:
                  </p>
                  <ul className="space-y-2">
                    {sportsSimulationFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                        <p className="text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-600 mt-3 italic">
                    Teams may ask questions to players or coaches during the post-game Q&A to gather quotes for their sports article.
                  </p>
                </div>
              </div>
            </div>

            {/* Release of Media Assets */}
            <div className="bg-gradient-to-r from-brand-teal/10 to-green-50 border-2 border-brand-teal p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">RELEASE OF MEDIA ASSETS PACKAGE</h3>
              </div>
              
              <p className="text-base text-gray-700 mb-4">
                At the conclusion of the coverage, organizers will release the following materials <span className="font-bold">simultaneously to all teams</span>:
              </p>
              
              <div className="space-y-2 mb-4">
                {mediaAssets.map((asset, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{asset}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-lg">
                <p className="text-base text-gray-700">
                  <span className="font-bold text-red-900">All teams must exclusively use the released materials.</span> External photos, videos, audio clips, vectors, and articles are strictly prohibited.
                </p>
              </div>
            </div>

            {/* Four-Hour Production Phase */}
            <div className="bg-gradient-to-r from-brand-orange/10 to-red-50 border-2 border-brand-orange p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">FOUR-HOUR PRODUCTION PHASE (Synchronous)</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-brand-orange/30">
                  <p className="text-base text-gray-700 mb-3">
                    The Collaborative Desktop Publishing contest follows a strict <span className="font-bold text-brand-orange">four-hour lock-in period</span>. No extensions will be granted except in cases of platform-wide failure.
                  </p>
                  <p className="text-base text-gray-700">
                    Teams are tasked with producing a <span className="font-bold">four-page output</span> that includes a news section, a features section, an editorial and opinion page, and a sports page.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-blue-900">Planning Time:</span> Specific instructions and production-specific rules will be released before the production phase, allowing <span className="font-bold">15 minutes of planning time</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Submission Requirements</h3>
              <p className="text-base text-gray-700 mb-4">
                After the four-hour production period and 15 minutes of planning and preparation time, the team must submit:
              </p>
              <div className="space-y-3">
                {submissionRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{req}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-sm text-red-900 font-bold">
                  Failure to submit any of these will result in disqualification or deduction, depending on severity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Allowed and Prohibited Materials Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Layout className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Allowed and Prohibited Materials
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-brand-teal" />
                Allowed Materials
              </h3>
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
                Strictly Prohibited Materials
              </h3>
              <div className="space-y-3">
                {prohibitedMaterials.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-base font-bold text-red-900">
                  Any detected violation will result in disqualification for the entire team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Notes and Recommendations Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.6, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Shield className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Notes and Recommendations
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-base text-gray-700">{rec}</p>
                </div>
              </div>
            ))}

            <div className="bg-slate-100 border-2 border-slate-300 p-5 rounded-lg mt-6">
              <p className="text-base text-gray-800 font-bold text-center">
                All final decisions of the judges and the proctoring committee are final.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Judging Criteria Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
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
            {/* Content */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-teal">50%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Content</h3>
              </div>
              <ul className="space-y-2">
                {contentCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-brand-teal rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-orange">40%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Technical</h3>
              </div>
              <ul className="space-y-2">
                {technicalCriteria.map((criterion, index) => (
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

export default CollaborativeDesktopPublishing;

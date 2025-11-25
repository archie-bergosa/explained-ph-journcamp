import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  Globe, 
  Clock,
  Layout,
  Video,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  X,
  Monitor
} from 'lucide-react';

const OnlinePublishing = () => {
  const teamRoles = [
    "Layout Artist/Webmaster",
    "News Writer",
    "Feature Writer",
    "Opinion/Editorial Writer",
    "Sports Writer"
  ];

  const allowedMaterials = [
    "Adobe InDesign, Adobe Illustrator, Adobe Photoshop, and Microsoft Publisher",
    "WordPress Basic (no premium subscriptions, no add-ons)",
    "Fonts available offline (reviewed during registration process)",
    "Built-in shapes and default vectors",
    "Creating assets using Canva and other online tools for building assets"
  ];

  const prohibitedMaterials = [
    "AI writing tools such as ChatGPT, Gemini, GrammarlyGO, etc.",
    "AI-generated images or templates",
    "Externally-sourced articles, quotes, or statistics",
    "Using an outside individual to assist in writing, editing, or designing",
    "Cellphones and smartphones for research and outside communication",
    "Usage of earphones and headphones as a means of communication from outside sources"
  ];

  const proctoringRequirements = [
    "All participants MUST join the Zoom meeting during the whole coverage and production period",
    "Cameras must remain open at all times for all members",
    "At least one designated member must share their screen displaying the active production workspace (WordPress, basic, and no purchased add-ons)",
    "All members must screen-record their entire desktop from the start until submission",
    "Teams must not leave the call unless granted permission by the proctor"
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
    "The final published WordPress website link, accessible by all"
  ];

  const recommendations = [
    "Prepare file organization systems (e.g., asset folders, naming protocols)",
    "Establish a unified design system early (colors, fonts, spacing)",
    "Assign a 'managing editor' or timekeeper within the team who monitors deadlines, logistics, and page progress",
    "Teams are encouraged to hold internal mock press conferences before the event"
  ];

  const contentCriteria = [
    "Applies the principles of journalism",
    "Exhibits an appropriate balance of news, editorial, features, sports, and other appropriate and engaging content",
    "Utilizes facts from interviews, document review, data analysis, and other reliable sources",
    "Shows a variety of stories that fit the section where they are placed",
    "Includes historical references, statistics, relevant names/facts to bolster the credibility of statements, assertions, arguments, and/or narratives",
    "Provides a balance of light and serious topics",
    "Shows relevance of articles to students",
    "Has clear and unbiased headlines/titles"
  ];

  const languageStyleCriteria = [
    "Observes the rules of grammar and syntax",
    "Observes coherence",
    "Uses appropriate vocabulary",
    "Observes gender-fair language"
  ];

  const layoutCriteria = [
    "Arranges stories in decreasing importance",
    "Highlights originality/uniqueness",
    "Uses relevant video or audio, pictures and graphics that are clear, properly edited, captioned, and credited",
    "Exhibits clear focus and coherent organization of articles"
  ];

  const technicalCriteria = [
    "Makes use of multimedia elements such as video, audio, animation, graphics and photos",
    "Is readable, mobile-responsive and engaging via social media",
    "Contains the paper's masthead, editorial profile, and the following sections: News, Editorial, Features, and Sports",
    "Articles include hyperlinks to cited references, data and other content or websites"
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
            <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Online Publishing
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
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In Online Publishing, a <span className="font-bold text-brand-teal">team of five</span> will produce a <span className="font-bold">multi-format digital publication</span> consisting of written stories, multimedia content, and a functional online layout.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Outputs must be completed within the <span className="font-bold text-brand-teal">given production window</span>, using synchronized editorial inputs (a mini press conference and a sports exhibition) and a standardized multimedia assets package provided by the organizers.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-900">Modern Digital Newsroom Simulation:</span> Online Publishing simulates the workflow of a modern digital newsroom, requiring teams to practice news production, multimedia integration, digital design, and real-time editorial decision-making under pressure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Team Composition (5 Members)</h3>
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
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-3">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-blue-900">Flexible Task Distribution:</span> While these are the default roles, task distribution is left entirely to the team. Participants may multitask or shift roles as needed during the production process.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-purple-900">Multi-skilled Requirements:</span> Given that the team is limited to only five members with no dedicated photojournalist or editorial cartoonist, each participant must possess skills beyond their primary role. A news writer can also be a photojournalist, a feature writer can be a cartoonist, an opinion writer can be a podcaster, a sports writer can be a multimedia artist—the possibilities are solely dependent on the team's internal dynamics.
                </p>
              </div>
            </div>

            <div className="bg-slate-100 border-l-4 border-slate-400 p-6 rounded-r-lg">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-slate-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">
                    <span className="font-bold">Only individuals who register from the same school</span> may compete together; cross-school or composite teams are not allowed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Allowed and Prohibited Materials Section THIS */}
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

      {/* Time Allotment Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.35, 0.6)}
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

              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded-r-lg">
                <p className="text-base text-gray-700">
                  <span className="font-bold text-yellow-900">Important:</span> All teams must exclusively use the released materials. <span className="font-bold">External photos, videos, audio clips, vectors, and articles are not strictly prohibited; however, you must exercise caution regarding copyright and intellectual property.</span>
                </p>
              </div>
            </div>

            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Submission Requirements</h3>
              <p className="text-base text-gray-700 mb-4">
                After the given production period, the team must submit:
              </p>
              <div className="space-y-3">
                {submissionRequirements.map((req, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
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

      {/* Notes and Recommendations Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
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
        variants={fadeIn('up', 'tween', 0.8, 0.6)}
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
            {/* Content */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-teal">30%</div>
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

            {/* Language and Style */}
            <div className="bg-white p-6 rounded-lg border-2 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-blue-600">15%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Language and Style</h3>
              </div>
              <ul className="space-y-2">
                {languageStyleCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layout */}
            <div className="bg-white p-6 rounded-lg border-2 border-purple-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-purple-600">20%</div>
                <h3 className="text-2xl font-bold text-brand-dark-teal">Layout</h3>
              </div>
              <ul className="space-y-2">
                {layoutCriteria.map((criterion, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-gray-700">{criterion}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-orange">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl font-bold text-brand-orange">20%</div>
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

export default OnlinePublishing;

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  Radio, 
  Clock,
  Users,
  Mic,
  FileText,
  Video,
  Shield,
  Award,
  CheckCircle,
  AlertCircle,
  Volume2,
  Settings,
  Trophy
} from 'lucide-react';

const RadioBroadcasting = () => {
  const teamRoles = [
    "News Anchor 1",
    "News Anchor 2",
    "Script Writer",
    "Showbiz News Presenter",
    "Sports News Presenter",
    "Infomercial Specialist",
    "Technical Director"
  ];

  const broadcastComponents = [
    "One infomercial (not exceeding one minute)",
    "Four news articles",
    "Total broadcast duration: exactly 5 minutes"
  ];

  const allowedMaterials = [
    "Official JournCamp+ Radio Broadcasting Activity Sheets (printed in advance)",
    "Maximum of two black ballpoint pens",
    "Classic watch for timekeeping",
    "Recording equipment (microphones, audio interface, computer)",
    "Fact sheet, press release, or materials provided by organizers"
  ];

  const scriptFormatting = [
    "Arial font size 12",
    "Directorial instructions in CAPITAL LETTERS",
    "Double-spaced with normal margin (1 inch on all sides)",
    "Printed on A4-sized bond paper (8.27 x 11.69 inches)",
    "Using official activity sheet only",
    "No identifying marks (school, division, region) - code number only"
  ];

  const timingDeductions = [
    { range: "1-5 seconds", deduction: "1 point" },
    { range: "6-20 seconds", deduction: "2 points" },
    { range: "21-40 seconds", deduction: "3 points" },
    { range: "41-60 seconds", deduction: "4 points" },
    { range: "61 seconds and above", deduction: "5 points" }
  ];

  const anchorCriteria = [
    { category: "Voice Quality", percentage: "40%", description: "Clear and easy to understand; paces voice well; shows expressions of interest, enthusiasm, and confidence" },
    { category: "Voice Recognition", percentage: "30%", description: "Clear and well-modulated; appropriate pace and volume; consistently audible throughout" },
    { category: "Enunciation", percentage: "30%", description: "Distinct pronunciation; socially acceptable accent; varied voice inflections; appropriate word emphasis" }
  ];

  const infomercialCriteria = [
    { category: "Content", percentage: "45%", description: "Clear advocacy/idea; logical organization; smooth transitions; appropriate language" },
    { category: "Creativity", percentage: "30%", description: "Uniqueness and originality; appropriate technology implementation" },
    { category: "Persuasion and Impact", percentage: "25%", description: "Engages audience; appropriate appeal; maintains focus throughout" }
  ];

  const technicalCriteria = [
    { category: "Juxtaposition", percentage: "40%", description: "Smooth transitions between topics; clear relationship between audio effects and news content" },
    { category: "Fidelity", percentage: "30%", description: "Good audio quality; authentic sound and effects; minimal static and interference" },
    { category: "Timing and Precision", percentage: "30%", description: "Clear audible time signals; precise execution" }
  ];

  const scriptCriteria = [
    { category: "Content", percentage: "40%", description: "Necessary details and examples; accurate with no factual errors; well-organized; academically and socially acceptable language" },
    { category: "Clarity of Instructions", percentage: "40%", description: "Easy to read and understand; can be followed by another team; reflects effective planning" },
    { category: "Neatness", percentage: "20%", description: "All elements labeled and clearly written; team members and tasks clearly indicated" }
  ];

  const specialAwards = {
    individual: [
      "Top 10 Best Anchors",
      "Top 10 Best News Presenters",
      "Top 10 Best Technical Directors"
    ],
    group: [
      "Top 10 Best Infomercial",
      "Top 10 Best Script",
      "Top 10 Best Radio Broadcast"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 bg-gradient-to-br from-orange-600 via-red-600 to-red-700"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.6)}
            initial="initial"
            animate="animate"
            className="text-center text-white"
          >
            <Radio className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Radio Broadcasting and Script Writing
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
                  <span className="font-semibold">24-Hour Recording Window</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Team Competition: 7 Members</span>
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
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                In Radio Broadcasting and Script Writing, a team of seven will produce a <span className="font-bold text-purple-700">five-minute simulated radio newscast</span> and a complete <span className="font-bold text-purple-700"></span>, based on synchronized editorial materials from mini press conference and sports exhibition simulations.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                This contest replicates a real newsroom environment through coordinated news reporting, recorded delivery, teamwork, timing, vocal precision, and technical execution.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-indigo-400">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Audio-Only Format</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                There will be <span className="font-bold">no visual elements</span>: only audio delivery, pacing, vocal modulation, sound direction, and ethical storytelling as is standard in traditional broadcast radio.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Team Outputs:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mic className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">A five-minute radio broadcast</span> (recorded audio performance)</p>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700"><span className="font-bold">A complete script</span> on official activity sheets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Online Format Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Settings className="w-14 h-14 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              From Onsite to Online: Reframing the Radio Experience
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-400 p-6 rounded-lg">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                While onsite competitions rely on a controlled physical environment—dedicated broadcast rooms, technical operators, calibrated loudspeakers, and a standardized mixer—an online platform must reimagine these conditions without diminishing the essence of radio journalism.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                The online adaptation shifts the competition from a controlled, onsite broadcast room to a <span className="font-bold text-purple-700">pre-recorded, one-take audio performance</span> submitted within a designated 24-hour window.
              </p>
            </div>

            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Recording Environment Requirements</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Any quiet room is acceptable as your radio studio</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Technical director must control the audio chain</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">External noise must be minimized</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">All team members must perform simultaneously without interruption</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Teams must produce clean, stable, and broadcast-quality audio</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 leading-relaxed">
                <span className="font-bold text-blue-900">Note:</span> The recording environment does not have to be professional. JournCamp+ recognizes the differences in resources and materials across different contexts. However, teams must still produce clean, stable, and broadcast-quality audio.
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">24-Hour Recording Window</h3>
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                Instead of performing live during a scheduled slot, teams may record their broadcast <span className="font-bold">any time within the official 24-hour recording window</span>, starting upon the official release of the theme, materials, and topics.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                This flexibility accommodates varying school schedules, equipment availability, and team logistics—all while preserving fairness and authenticity within the online context.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Composition Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Users className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Team Composition
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Seven Team Roles:</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {teamRoles.map((role, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm font-semibold text-gray-800">{role}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                <span className="font-bold">While roles are defined, teams retain complete freedom to reorganize task distribution internally.</span>
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Only teams from the same school are eligible to participate and register. <span className="font-bold text-red-600">No cross-school teams are allowed.</span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Broadcast Components Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.6, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Volume2 className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Broadcast Components
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-brand-teal/10 to-blue-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">The Five-Minute Broadcast Includes:</h3>
              <div className="space-y-3">
                {broadcastComponents.map((component, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{component}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border-2 border-purple-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Infomercial Requirements</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">May cover topics such as health, environment, politics, social issues, and other relevant subjects</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Should not exceed one minute in length</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full flex-shrink-0 mt-2"></div>
                  <p className="text-base text-gray-700">Must be in the same medium that the group is competing in (audio only)</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base text-gray-700 mb-2">
                    <span className="font-bold text-green-900">News articles / fact sheets will be provided by the organizers.</span>
                  </p>
                  <p className="text-sm text-gray-600">
                    All news content must be based solely on these provided materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base text-gray-700 mb-3">
                    <span className="font-bold text-red-900">No external research or added facts are allowed.</span> Judges will verify that you based your content only on the provided materials.
                  </p>
                  <p className="text-base text-gray-700">
                    News articles must be based solely on press releases, raw data, or any other sources provided by the organizers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Broadcast Identity Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Radio className="w-14 h-14 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Team Broadcast Identity
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-400 p-6 rounded-lg">
              <p className="text-base text-gray-700 leading-relaxed">
                The board of judges will provide the <span className="font-bold text-purple-700">name of the radio station, program title, and kilohertz frequency</span>, which all registered groups in the competition must use.
              </p>
              <p className="text-base text-gray-700 leading-relaxed mt-3">
                These shall be used consistently in both the script and the recorded broadcast.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Script Formatting Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.8, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <FileText className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Script Formatting Requirements
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Formatting Conventions:</h3>
              <div className="space-y-3">
                {scriptFormatting.map((format, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{format}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-purple-900 mb-4">The Script Must Include:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    1
                  </div>
                  <p className="text-base text-gray-700">The names and roles of all team members</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    2
                  </div>
                  <p className="text-base text-gray-700">A story lineup</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm mt-0.5">
                    3
                  </div>
                  <p className="text-base text-gray-700">The script in Audio - Video table format</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-base text-gray-700">
                    <span className="font-bold text-red-900">Ensure that the script is printed on the official JournCamp+ activity sheet.</span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2 italic">
                    There shall be no information or marks that may identify the contestants, their schools, divisions, or regions. Only the code will be seen at the top of each activity sheet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Proctoring and Monitoring Section */}
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
              Proctoring and Monitoring
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Although teams have a 24-hour window in choosing when to start their official creation process, the group will be required to submit a <span className="font-bold text-brand-teal">continuous-angle documentation video</span> instead of live monitoring.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                A continuous-angle video shows the entire recording process, preferably from an angle that captures the entire workspace of the team. Any angles that raise suspicion allow the JournCamp+ organizers and proctors to trigger an investigation.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Documentation Requirements:</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Continuous-angle video of the entire recording process</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Screen recordings of the team's laptops showing workflow, audio routing, sound playback, and script creation</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-base text-gray-700">Proof that recording was performed within the allotted window</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Verification After the Broadcast</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                After each performance, the organizer's recording and the team's local backup recording are cross-checked to ensure no discrepancy occurred. This provides a safeguard for both teams and adjudicators, ensuring consistency between the judged audio and the archived file.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Allowed Materials Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.0, 0.6)}
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

          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-2 border-brand-teal p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">During the event, participants may use:</h3>
              <div className="space-y-3">
                {allowedMaterials.map((material, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                    <p className="text-base text-gray-700">{material}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Proof of Authenticity Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.1, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Shield className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Proof of Authenticity
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 leading-relaxed">
                Writers and participants must submit a <span className="font-bold text-blue-900">single, uninterrupted, continuous-angle video recording</span> of themselves working.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-base text-gray-700 mb-4">
                <span className="font-bold text-red-900">Any attempts to conduct research, paste external output, or engage in other forms of dishonesty and foul play will be grounds for disqualification, should such actions be found to have occurred.</span>
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <h4 className="text-lg font-bold text-brand-dark-teal mb-3">Declaration of Originality</h4>
              <p className="text-base text-gray-700 mb-4">
                Writers must sign and submit a declaration of originality, with the format to be provided by the organizers beforehand. The participants shall, alongside the activity sheets, ensure that this is also prepared and printed beforehand to avoid any delays in submission.
              </p>
              <p className="text-base text-gray-700">
                Participants can also opt to submit their declarations, alongside their script work, via PDF, provided they have the necessary equipment and software.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Authorship and Integrity Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.2, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Shield className="w-14 h-14 mx-auto mb-4 text-purple-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Authorship, Integrity, and Accessibility
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-400 p-6 rounded-lg">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                <span className="font-bold text-purple-700">Every component of the script and broadcast must be created solely during contest hours.</span>
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                To safeguard integrity, all teams must submit a <span className="font-bold">Proof of Authorship package</span>, consisting of their script, process documentation, routing proof, local recording, and signed declarations.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Timing and Deductions Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.3, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Clock className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Adherence to Time
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-brand-teal/10 to-blue-50 border-l-4 border-brand-teal p-6 rounded-r-lg">
              <p className="text-base text-gray-700 leading-relaxed mb-3">
                The team that complies with the <span className="font-bold text-brand-teal">five-minute production time</span> receives a perfect score (5 points) for adhering to the allotted time.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                In the case of overtime or undertime, deductions will be applied. The timing scheme will take effect starting at the <span className="font-bold">6-second mark</span>.
              </p>
            </div>

            <div className="bg-white border-2 border-red-400 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4">Deduction Scheme:</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                      <th className="px-4 py-3 text-left text-sm font-bold">Overtime/Undertime</th>
                      <th className="px-4 py-3 text-left text-sm font-bold">Deduction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timingDeductions.map((item, index) => (
                      <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700">{item.range}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-red-600">{item.deduction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Judging Criteria Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.4, 0.6)}
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
              Participants will be judged according to the <span className="font-bold text-brand-dark-teal">NSPC 2025 criteria</span>, summarized as follows:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Anchor Criteria */}
            <div className="bg-white p-6 rounded-lg border-2 border-purple-400">
              <div className="flex items-center gap-3 mb-4">
                <Mic className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-brand-dark-teal">Anchor (Anchor 1 & Anchor 2)</h3>
              </div>
              <div className="space-y-3">
                {anchorCriteria.map((criterion, index) => (
                  <div key={index} className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-purple-600">{criterion.percentage}</span>
                      <span className="text-lg font-bold text-gray-800">{criterion.category}</span>
                    </div>
                    <p className="text-sm text-gray-700">{criterion.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* News Presenters Criteria */}
            <div className="bg-white p-6 rounded-lg border-2 border-blue-400">
              <div className="flex items-center gap-3 mb-4">
                <Volume2 className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-brand-dark-teal">News Presenters (Showbiz & Sports)</h3>
              </div>
              <div className="space-y-3">
                {anchorCriteria.map((criterion, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-blue-600">{criterion.percentage}</span>
                      <span className="text-lg font-bold text-gray-800">{criterion.category}</span>
                    </div>
                    <p className="text-sm text-gray-700">{criterion.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Infomercial Criteria */}
            <div className="bg-white p-6 rounded-lg border-2 border-amber-400">
              <div className="flex items-center gap-3 mb-4">
                <Radio className="w-8 h-8 text-amber-600" />
                <h3 className="text-2xl font-bold text-brand-dark-teal">Infomercial</h3>
              </div>
              <div className="space-y-3">
                {infomercialCriteria.map((criterion, index) => (
                  <div key={index} className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-amber-600">{criterion.percentage}</span>
                      <span className="text-lg font-bold text-gray-800">{criterion.category}</span>
                    </div>
                    <p className="text-sm text-gray-700">{criterion.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Application Criteria */}
            <div className="bg-white p-6 rounded-lg border-2 border-brand-teal">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-8 h-8 text-brand-teal" />
                <h3 className="text-2xl font-bold text-brand-dark-teal">Technical Application</h3>
              </div>
              <div className="space-y-3">
                {technicalCriteria.map((criterion, index) => (
                  <div key={index} className="bg-teal-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-brand-teal">{criterion.percentage}</span>
                      <span className="text-lg font-bold text-gray-800">{criterion.category}</span>
                    </div>
                    <p className="text-sm text-gray-700">{criterion.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Script Criteria */}
            <div className="bg-white p-6 rounded-lg border-2 border-green-400">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-brand-dark-teal">Script</h3>
              </div>
              <div className="space-y-3">
                {scriptCriteria.map((criterion, index) => (
                  <div key={index} className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-green-600">{criterion.percentage}</span>
                      <span className="text-lg font-bold text-gray-800">{criterion.category}</span>
                    </div>
                    <p className="text-sm text-gray-700">{criterion.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Radio Production */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Overall Radio Production (100%)</h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-xl font-bold">Delivery — 25%</p>
                  <p className="text-sm">Anchor (15%) + News Presenter (10%)</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-xl font-bold">Technical Application — 25%</p>
                  <p className="text-sm">Timing and Precision</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-xl font-bold">Script — 25%</p>
                  <p className="text-sm">Content, Clarity, and Neatness</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-xl font-bold">Infomercial — 25%</p>
                  <p className="text-sm">Content, Creativity, and Impact</p>
                </div>
              </div>
              <div className="mt-4 bg-white/10 p-4 rounded-lg">
                <p className="text-xl font-bold">Adherence to Time — 5%</p>
                <p className="text-sm">Five-minute broadcast compliance</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Special Awards Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-gradient-to-br from-amber-50 to-yellow-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Trophy className="w-14 h-14 mx-auto mb-4 text-amber-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Special Awards
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {/* Individual Awards */}
            <div className="bg-white p-6 rounded-lg border-2 border-amber-400">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-600" />
                Individual Awards
              </h3>
              <ul className="space-y-2">
                {specialAwards.individual.map((award, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-amber-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group Awards */}
            <div className="bg-white p-6 rounded-lg border-2 border-purple-400">
              <h3 className="text-xl font-bold text-brand-dark-teal mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-purple-600" />
                Group Awards
              </h3>
              <ul className="space-y-2">
                {specialAwards.group.map((award, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Trophy className="w-4 h-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-gray-700">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default RadioBroadcasting;

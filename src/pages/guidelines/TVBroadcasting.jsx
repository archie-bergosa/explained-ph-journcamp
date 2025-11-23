import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { 
  Tv, 
  Clock, 
  Users, 
  Video, 
  FileText, 
  Shield, 
  Award, 
  CheckCircle, 
  AlertCircle,
  Camera,
  Mic,
  Film,
  Monitor,
  Settings,
  Trophy,
  FileVideo
} from 'lucide-react';

const TVBroadcasting = () => {
  const teamRoles = [
    "Scriptwriter/s",
    "Anchor/s",
    "Reporter/s",
    "Producer/Director",
    "Video/Graphics Editor",
    "Video Journalist/Camera Operator"
  ];

  const newscastComponents = [
    "Opening Billboard (OBB)",
    "Headlines",
    "Two anchor-delivered stories",
    "At least one field report (live or pre-recorded)",
    "One infomercial or developmental communication plug",
    "Closing Billboard (CBB)",
    "Lower thirds, text overlays, stingers, graphics (optional but recommended)"
  ];

  const scriptFormat = [
    "CAMERA: shot indicators (WS, MS, CU), cutaway instructions",
    "AUDIO: mics, VO cues, ambient sound cues",
    "VIDEO: specific source instructions for each line",
    "GRAPHICS: lower thirds, supers, titles, overlays",
    "FLOOR/BLOCKING: movement instructions (e.g., 'ANCHOR WALKS TO SCREEN LEFT')",
    "TIMECODES: approximate durations for each segment"
  ];

  const scriptFormatting = [
    "Arial font size 12",
    "Double-spaced with 1-inch margins",
    "Directorial instructions in ALL CAPS",
    "A4-sized paper using official activity sheets",
    "Labels for all video, audio, graphics, camera cues",
    "Team member names + assigned roles on cover page",
    "No identifying marks (school, division, region) - code number only"
  ];

  const contentBasis = [
    "Press conference simulation materials",
    "Sports exhibition materials and footage",
    "Fact sheets, raw data, and press releases from organizers",
    "No external research permitted"
  ];

  const timingDeductions = [
    { range: "1-5 seconds", deduction: "1 point" },
    { range: "6-20 seconds", deduction: "2 points" },
    { range: "21-40 seconds", deduction: "3 points" },
    { range: "41-60 seconds", deduction: "4 points" },
    { range: "61 seconds and above", deduction: "5 points" }
  ];

  const scriptCriteria = [
    { category: "Content", percentage: "50%", details: [
      "Provides effective news/story angling",
      "Covers stories/topics with necessary details",
      "Accurate; no factual, conceptual, grammatical errors",
      "Original content"
    ]},
    { category: "Style", percentage: "35%", details: [
      "Clear and concise writing",
      "Simple, common language",
      "Appropriate voice (active/passive)",
      "Proper script terms and abbreviations"
    ]},
    { category: "Organization", percentage: "15%", details: [
      "Adequate logical structure",
      "Proper labels to elements/parts",
      "Team members and assignments indicated",
      "Coherent thought transitions"
    ]}
  ];

  const anchorReporterCriteria = [
    { category: "Delivery", percentage: "70%", details: [
      "Clear and well-modulated voice",
      "Appropriate volume",
      "Proper phrasing, pacing, and timing",
      "Articulates words well",
      "Appropriate voice inflections to enhance meaning"
    ]},
    { category: "Personality", percentage: "30%", details: [
      "Proper stance/posture",
      "Confidence and authority",
      "Professional and credible personality",
      "Controlled facial expressions"
    ]}
  ];

  const technicalCriteria = [
    { category: "Element Appropriation", percentage: "50%", details: [
      "Observes audio-video lock",
      "Effective interplay of audio-visual elements",
      "Graphics, text, images properly integrated"
    ]},
    { category: "Fidelity", percentage: "30%", details: [
      "Good audio and video quality",
      "Less to no distortion",
      "No technical distractions"
    ]},
    { category: "Timing and Precision", percentage: "20%", details: [
      "Smooth flow of topics/stories",
      "Precise timing and synchronization"
    ]}
  ];

  const infomercialCriteria = [
    { category: "Content", percentage: "50%", details: [
      "Clear advocacy/idea description",
      "Logically organized",
      "Reflects original concept"
    ]},
    { category: "Creativity", percentage: "50%", details: [
      "Uniqueness and originality",
      "Technical elements applied appropriately",
      "Engaging and appealing"
    ]}
  ];

  const specialAwards = {
    individual: [
      "Top 10 Best Anchors",
      "Top 10 Best Reporters",
      "Top 10 Best Directors"
    ],
    group: [
      "Top 10 Best Technical Application",
      "Top 10 Best Developmental Communication",
      "Top 10 Best News Script",
      "Top 10 Best TV Newscast"
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
            <Tv className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              TV Scriptwriting and Broadcasting
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Mechanics and Guidelines
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5" />
                <span>6-Minute Newscast</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5" />
                <span>Team of 7</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Video className="w-5 h-5" />
                <span>24-Hour Production Window</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contest Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <FileVideo className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Contest Overview</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                In TV Scriptwriting and Broadcasting, a team of seven will produce a <strong>six-minute simulated television newscast</strong> and a complete, original TV script, based entirely on synchronized editorial materials from the mini press conference and sports exhibition simulations.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This contest replicates a real newsroom environment through coordinated news gathering and reporting, video production and editorial decision-making, visual storytelling and technical application, team-based planning and execution, strict adherence to ethical journalism, and professional broadcast pacing, voice delivery, and timing.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg"
          >
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">Important Notice</h3>
                <p className="text-red-800">
                  Although the competition is online, <strong>no part of the broadcast may rely on AI-generated visuals, templates, edited composites, or materials outside the prescribed contest window</strong>. All work must originate from contest-issued materials and allowed team-shot footage.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Online Format Adaptation */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">From Onsite to Online</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Understanding the transition to online TV broadcasting
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Camera className="w-6 h-6 text-blue-600" />
                  Digital-Physical Hybrid Studio
                </h3>
                <p className="text-gray-700 mb-4">
                  Each school can assemble its own workable studio—classroom, media center, or multi-purpose room—functioning as a self-contained TV newsroom.
                </p>
                <ul className="space-y-2">
                  {["Film anchor segments", "Record field reports", "Edit video packages", "Stage and film 6-minute broadcast"].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-blue-600" />
                  Judges Judge Outputs, Not Setups
                </h3>
                <p className="text-gray-700 mb-4">
                  Judges evaluate the final TV output, not equipment or facilities:
                </p>
                <ul className="space-y-2">
                  {[
                    "6-minute newscast video",
                    "Complete TV script",
                    "Infomercial/DevComm plug",
                    "Technical cohesion of audio, video, graphics",
                    "Visual storytelling decisions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md md:col-span-2"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Settings className="w-6 h-6 text-blue-600" />
                  The Technical Director as Studio Engineer
                </h3>
                <p className="text-gray-700 mb-4">
                  In the online context, the team's <strong>Technical Director</strong> becomes the camera operator, audio controller, lighting planner, editor, and floor director. They must ensure:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Audio-video synchronization",
                    "Proper rendering and export",
                    "Consistent keying and timing",
                    "Broadcast-ready master file",
                    "Equipment coordination",
                    "Quality control"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r">
                  <p className="text-sm text-blue-900">
                    <strong>Note:</strong> Teams may ask a school sound technician for logistical help only during recording (equipment setup), but all editorial, creative, and production decisions must come from the contestants themselves.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contest Outputs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Film className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Required Outputs</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Video className="w-6 h-6 text-orange-600" />
                  1. Pre-Recorded 6-Minute TV Newscast
                </h3>
                <ul className="space-y-3">
                  {newscastComponents.map((component, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>{component}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-orange-600" />
                  2. Complete TV Script (NSPC Format)
                </h3>
                <ul className="space-y-3">
                  {scriptFormat.map((format, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>{format}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 bg-orange-100 border-l-4 border-orange-600 p-3 rounded-r">
                  <p className="text-sm text-orange-900">
                    Script must be printed on official JournCamp+ activity sheets
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Composition */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Team Composition</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              A TV broadcasting team consists of up to 7 members with flexible role distribution
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {teamRoles.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-orange-600"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-orange-100 text-orange-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-900">{role}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Role Flexibility Guidelines
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Team members can take on multiple roles if it doesn't create conflicts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>An anchor <strong>cannot</strong> also be a reporter simultaneously</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>An anchor <strong>can</strong> serve as a news or infomercial writer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Teams retain complete freedom to reorganize task distribution internally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Only teams from the same school are eligible (no cross-school teams)</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Basis */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Content Basis</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              All news content must be derived solely from authorized sources:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {contentBasis.map((basis, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{basis}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Materials Provided</h3>
                  <p className="text-blue-800">
                    <strong>News articles / fact sheets will be provided by the organizers.</strong> All news content must be based solely on these provided materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Critical Restriction</h3>
                  <p className="text-red-800">
                    <strong>No external research may be added.</strong> Judges will detect this immediately and may result in disqualification.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Broadcast Identity */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Tv className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Broadcast Identity</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              JournCamp+ Organizers will provide the following identifiers:
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-purple-900 mb-3">Provided by Organizers:</h3>
                  <ul className="space-y-2">
                    {[
                      "TV Network Name",
                      "Program Name",
                      "OBB and CBB parameters",
                      "Thematic identifiers (logos, tagline, etc.)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-purple-900 mb-3">Must Be Used Consistently In:</h3>
                  <ul className="space-y-2">
                    {[
                      "The script",
                      "The on-screen graphics",
                      "The broadcast video itself"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Script Formatting */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Script Formatting Requirements</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {scriptFormatting.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Production Window */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">24-Hour Production Window</h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Teams have a flexible 24-hour window to complete all production tasks
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Window Begins With Official Release Of:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "The theme",
                  "News data sets",
                  "Press conference materials",
                  "Sports exhibition visual assets"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Within This Window, Teams Must:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Write the script",
                  "Film anchor and reporter segments",
                  "Record the required plug",
                  "Edit the full newscast",
                  "Render and export the video",
                  "Prepare Proof of Authorship materials",
                  "Submit all outputs on time"
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-2 text-gray-700">
                    <div className="bg-blue-600 text-white font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-3">Recording Flexibility</h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Teams may record any time within the 24-hour window</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Multiple takes are allowed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Only the final chosen take should be submitted</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proctoring & Verification */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Proctoring & Verification</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Video className="w-6 h-6 text-orange-600" />
                  Continuous-Angle Video Documentation
                </h3>
                <p className="text-gray-700 mb-4">
                  Teams must submit a continuous-angle video recording showing the entire production process, from an angle that captures the entire workspace.
                </p>
                <div className="bg-orange-100 border-l-4 border-orange-600 p-4 rounded-r">
                  <p className="text-sm text-orange-900">
                    Any angles that raise suspicion allow organizers to trigger an investigation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center gap-2">
                  <Monitor className="w-6 h-6 text-orange-600" />
                  Screen Recordings
                </h3>
                <p className="text-gray-700 mb-4">
                  Screen recordings should be available from team laptops showing:
                </p>
                <ul className="space-y-2">
                  {[
                    "Workflow processes",
                    "Audio routing and sound playback",
                    "Script creation",
                    "Video editing timeline"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <div className="flex gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Proof of Authenticity Required</h3>
                  <p className="text-red-800 mb-3">
                    Teams must submit a single, uninterrupted, continuous-angle video recording and a signed declaration of originality.
                  </p>
                  <p className="text-red-800">
                    Any attempts to conduct research, paste external output, or engage in dishonesty will be grounds for <strong>disqualification</strong>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Verification After Broadcast */}
      <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-teal-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Verification After the Broadcast</h2>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 leading-relaxed">
                After each performance, the <strong>organizer's recording</strong> and the <strong>team's local backup recording</strong> are cross-checked to ensure no discrepancy occurred.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-r">
                <p className="text-teal-900">
                  This provides a safeguard for both teams and adjudicators, ensuring consistency between the judged video and the archived file.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Authorship & Integrity */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Authorship, Integrity & Accessibility</h2>
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg border-2 border-orange-200"
              >
                <h3 className="text-xl font-bold text-orange-900 mb-4">Declaration of Originality</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Writers must sign and submit a declaration of originality (format provided by organizers)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Declaration must be prepared and printed beforehand to avoid submission delays</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Teams can opt to submit declarations via PDF (alongside script work) if they have necessary equipment and software</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proof of Authorship Package</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Every component of the script and broadcast must be created solely during contest hours.</strong> To safeguard integrity, all teams must submit a complete Proof of Authorship package consisting of:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Complete TV script",
                    "Process documentation",
                    "Routing proof",
                    "Local recording backup",
                    "Signed declarations of originality",
                    "Continuous-angle video recording"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg"
              >
                <div className="flex gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">Disqualification Grounds</h3>
                    <p className="text-red-800">
                      Any attempts to <strong>conduct external research, paste external output, or engage in any form of dishonesty and foul play</strong> will be grounds for immediate disqualification upon discovery.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timing and Deductions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Timing Compliance & Deductions</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Teams that comply with the <strong>6-minute production time</strong> receive a perfect score (5 points). For overtime or undertime:
            </p>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-orange-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Overtime/Undertime</th>
                    <th className="px-6 py-4 text-left font-semibold">Deduction</th>
                  </tr>
                </thead>
                <tbody>
                  {timingDeductions.map((item, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-orange-50' : 'bg-white'} hover:bg-orange-100 transition-colors`}>
                      <td className="px-6 py-4 text-gray-700 font-medium">{item.range}</td>
                      <td className="px-6 py-4 text-red-600 font-bold">{item.deduction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="text-yellow-900">
                <strong>Note:</strong> Timing deductions take effect starting at the 6-second mark.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Judging Criteria - Script */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Judging Criteria: Script (30%)</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {scriptCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-600"
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{criteria.percentage}</div>
                    <h3 className="text-xl font-bold text-gray-900">{criteria.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {criteria.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Judging Criteria - Anchor & Reporter */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mic className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Judging Criteria: Anchor & Reporter (12.5% each)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {anchorReporterCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600"
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{criteria.percentage}</div>
                    <h3 className="text-xl font-bold text-gray-900">{criteria.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {criteria.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Judging Criteria - Technical Application */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Judging Criteria: Technical Application (25%)</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {technicalCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-600"
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{criteria.percentage}</div>
                    <h3 className="text-xl font-bold text-gray-900">{criteria.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {criteria.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Judging Criteria - Infomercial */}
      <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Judging Criteria: Infomercial/DevComm Plug (15%)</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {infomercialCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-600"
                >
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-green-600 mb-2">{criteria.percentage}</div>
                    <h3 className="text-xl font-bold text-gray-900">{criteria.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {criteria.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overall Production Breakdown */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Overall Production Scoring</h2>
            </div>

            <div className="bg-gradient-to-br from-orange-100 to-red-100 p-8 rounded-lg">
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { label: "Script", percentage: "30%" },
                  { label: "Broadcast Presentation", percentage: "25%" },
                  { label: "Technical Application", percentage: "25%" },
                  { label: "Infomercial", percentage: "15%" },
                  { label: "Time Adherence", percentage: "5%" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="text-4xl font-bold text-orange-600 mb-2">{item.percentage}</div>
                    <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 bg-white p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">Broadcast Presentation Breakdown:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded font-bold">12.5%</div>
                    <span className="text-gray-700">Anchor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded font-bold">12.5%</div>
                    <span className="text-gray-700">Reporter</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Awards */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="w-8 h-8 text-amber-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Special Awards</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600"
              >
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-amber-600" />
                  Individual Awards
                </h3>
                <ul className="space-y-3">
                  {specialAwards.individual.map((award, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Trophy className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-600"
              >
                <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-amber-600" />
                  Group Awards
                </h3>
                <ul className="space-y-3">
                  {specialAwards.group.map((award, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <Trophy className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TVBroadcasting;

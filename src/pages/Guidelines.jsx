import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  Users, 
  Shield, 
  Video, 
  AlertCircle, 
  CheckCircle,
  Clock,
  Edit3,
  Award,
  Smartphone,
  Zap,
  ArrowRight,
  BookOpen,
  Camera,
  PenTool,
  MessageSquare,
  Microscope,
  Trophy,
  Globe,
  Radio,
  Tv
} from 'lucide-react';

const Guidelines = () => {
  const categories = [
    "News Writing", "Editorial Writing", "Column Writing", "Feature Writing",
    "Science and Technology Writing", "Sports Writing", 
    "Copyreading and Headline Writing", "Photojournalism", 
    "Editorial Cartooning", "Radio Broadcasting", "TV Broadcasting",
    "Collaborative Desktop Publishing", "Online Publishing", "Mobile Journalism"
  ];

  const categoryGuidelinePages = [
    {
      title: "News Writing",
      titleFl: "Pagsulat ng Balita",
      path: "/guidelines/news",
      icon: FileText,
      color: "brand-teal",
      description: "Straight news reporting with inverted pyramid structure",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Editorial Writing",
      titleFl: "Pagsulat ng Pangulong Tudling",
      path: "/guidelines/editorial",
      icon: MessageSquare,
      color: "brand-orange",
      description: "Opinion pieces with clear stance and persuasive arguments",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Column Writing",
      titleFl: "Pagsulat ng kolum",
      path: "/guidelines/column",
      icon: FileText,
      color: "blue-600",
      description: "Personal commentary with distinctive voice and style",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Feature Writing",
      titleFl: "Pagsulat ng Lathalain",
      path: "/guidelines/feature",
      icon: BookOpen,
      color: "purple-600",
      description: "Human-interest stories with narrative depth",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Copyreading & Headline Writing",
      titleFl: "Pagwawasto ng Sipi at Pag-uulo ng Balita",
      path: "/guidelines/crhw",
      icon: Edit3,
      color: "green-600",
      description: "Paragraph rearrangement and headline crafting",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Science & Technology Writing",
      titleFl: "Pagsulat ng Balitang Agham at Teknolohiya",
      path: "/guidelines/scitech",
      icon: Microscope,
      color: "indigo-600",
      description: "Complex topics explained in accessible language",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Sports Writing",
      titleFl: "Pagsulat ng Balitang Pampalakasan",
      path: "/guidelines/sports",
      icon: Trophy,
      color: "amber-600",
      description: "Game coverage with statistical analysis and angles",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Photojournalism",
      titleFl: "Pagkuha ng Larawang Pampahayagan",
      path: "/guidelines/photojournalism",
      icon: Camera,
      color: "pink-600",
      description: "Visual storytelling through photographs and captions",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Editorial Cartooning",
      titleFl: "Paglalarawang Tudling",
      path: "/guidelines/editorial-cartooning",
      icon: PenTool,
      color: "red-600",
      description: "Hand-drawn political commentary and satire",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Mobile Journalism",
      titleFl: "Mobile Journalism",
      path: "/guidelines/mobile-journalism",
      icon: Video,
      color: "cyan-600",
      description: "Smartphone-only video journalism and reporting",
      eligibility: ["Secondary", "Tertiary"]
    },
    {
      title: "Collaborative Desktop Publishing",
      titleFl: "Collaborative Desktop Publishing",
      path: "/guidelines/cdp",
      icon: Users,
      color: "teal-600",
      description: "Team-based four-page publication production",
      eligibility: ["Elementary", "Secondary", "Tertiary"]
    },
    {
      title: "Online Publishing",
      titleFl: "Online Publishing",
      path: "/guidelines/online-publishing",
      icon: Globe,
      color: "orange-600",
      description: "Multi-format digital publication with WordPress",
      eligibility: ["Secondary", "Tertiary"]
    },
    {
      title: "Radio Broadcasting",
      titleFl: "Radio Broadcasting",
      path: "/guidelines/radio-broadcasting",
      icon: Radio,
      color: "red-600",
      description: "5-minute audio newscast with script and infomercial",
      eligibility: ["Secondary", "Tertiary"]
    },
    {
      title: "TV Broadcasting",
      titleFl: "TV Broadcasting",
      path: "/guidelines/tv-broadcasting",
      icon: Tv,
      color: "purple-600",
      description: "6-minute video newscast with complete TV script",
      eligibility: ["Secondary", "Tertiary"]
    }
  ];

  const handwrittenCategories = [
    "News Writing", "Sports Writing", "Feature Writing", 
    "Editorial Writing", "Column Writing", 
    "Science & Technology Writing", "Copyreading and Headline Writing"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-20 px-4 bg-gradient-to-br from-brand-teal via-brand-dark-teal to-brand-teal"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.6)}
            initial="initial"
            animate="animate"
            className="text-center text-white"
          >
            <FileText className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Official Guidelines
            </h1>
            <div className="h-1 w-24 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
              JournCamp+: National Campus Press Summit
            </p>
            <p className="text-lg mt-2 opacity-90">
              Online Press Conference Mechanics and Guidelines
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Nov 21-23 - Registration for OPC & Late Registration</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-base md:text-lg">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Nov 23 - OPC Registration and OPC Opening (6:00PM)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Summary Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.3, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              About the Summit
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto mb-12">
            The National Campus Press Summit is a virtual press conference bringing together campus journalists from <span className="font-bold text-brand-teal">elementary, high school, and college</span> to compete in a wide range of categories. Participants will submit their outputs online, simulating the real press conference experience in a nationwide setup.
          </p>

          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-brand-teal" />
              </div>
              <p className="text-gray-800 font-medium text-sm">All lectures & competitions included</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-brand-orange" />
              </div>
              <p className="text-gray-800 font-medium text-sm">Medals with free shipping</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <FileText className="w-7 h-7 text-brand-teal" />
              </div>
              <p className="text-gray-800 font-medium text-sm">Certificates of recognition</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-brand-orange/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-brand-orange" />
              </div>
              <p className="text-gray-800 font-medium text-sm">National exposure</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white border-y border-slate-200"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Competition Categories
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              14 comprehensive categories covering all aspects of campus journalism
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-brand-teal/20 mb-1">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-800 font-medium leading-snug text-sm">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Detailed Category Guidelines Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.55, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-gradient-to-br from-brand-teal/5 to-brand-orange/5"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <BookOpen className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Detailed Category Guidelines
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Click on any category below to view complete mechanics, judging criteria, time allocations, and submission requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categoryGuidelinePages.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Link
                  key={index}
                  to={category.path}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    className="bg-white rounded-lg border-2 border-slate-200 hover:border-brand-teal hover:shadow-lg transition-all duration-300 p-6 h-full flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 text-${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-brand-teal transition-colors duration-300 leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 italic">
                          {category.titleFl}
                        </p>
                      </div>
                    </div>
                    
                    {/* Eligibility Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {category.eligibility.map((level, idx) => (
                        <span
                          key={idx}
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            level === "Elementary"
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : level === "Secondary"
                              ? "bg-green-100 text-green-700 border border-green-200"
                              : "bg-purple-100 text-purple-700 border border-purple-200"
                          }`}
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 flex-1">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-teal font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                      <span>View Guidelines</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>


        </div>
      </motion.section>

      {/* Eligibility Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.6, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Eligibility
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            All students who have registered for JournCamp+ are eligible to participate. <span className="font-bold text-brand-teal">Join as many categories as you wish!</span>
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark-teal mb-4 md:mb-6 text-center md:text-left">Competition Levels</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="border-l-4 border-brand-teal pl-4 md:pl-6">
                  <p className="text-base md:text-xl font-bold text-gray-800">Elementary</p>
                </div>
                <div className="border-l-4 border-brand-teal pl-4 md:pl-6">
                  <p className="text-base md:text-xl font-bold text-gray-800">Secondary</p>
                </div>
                <div className="border-l-4 border-brand-teal pl-4 md:pl-6">
                  <p className="text-base md:text-xl font-bold text-gray-800">Tertiary</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-dark-teal mb-4 md:mb-6 text-center md:text-left">Language Medium</h3>
              <div className="space-y-3 md:space-y-4">
                <div className="border-l-4 border-brand-orange pl-4 md:pl-6">
                  <p className="text-base md:text-xl font-bold text-gray-800">English</p>
                </div>
                <div className="border-l-4 border-brand-orange pl-4 md:pl-6">
                  <p className="text-base md:text-xl font-bold text-gray-800">Filipino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Handwritten Requirements Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 0.7, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <Edit3 className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Handwritten Requirements
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            To preserve the authentic press conference experience and ensure fairness, the following individual writing categories <span className="font-bold text-brand-orange">require handwritten outputs</span>:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
            {handwrittenCategories.map((cat, i) => (
              <div key={i} className="flex items-center gap-3 text-base text-gray-800">
                <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <span className="font-medium">{cat}</span>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="border-l-4 border-brand-orange pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-orange/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-brand-orange">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Preserves Traditional NSPC Performance Environment</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                NSPC has historically conducted all individual writing events in handwritten format to simulate time-pressured, raw draft-level journalism. This tests pure journalistic thinking under pressure with minimal technological advantage, evaluating not only the final story but the thinking process under time limits.
              </p>
            </div>

            <div className="border-l-4 border-brand-teal pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-brand-teal">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Neutralizes Digital Advantages</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                Typing speed varies dramatically among students (30-130 wpm). If typewritten, contestants with advanced typing proficiency gain an unrelated performance advantage. Handwriting equalizes speed differentials, minimizes tech-based disparities, avoids autocorrect habits, and focuses evaluation on news sense, angle, clarity, and structure rather than typing ability.
              </p>
            </div>

            <div className="border-l-4 border-red-600 pl-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Makes Cheating Far More Complicated</h3>
              </div>
              <p className="text-base text-gray-700 leading-relaxed">
                Despite video-proof authenticity rules, typed text remains vulnerable to hidden copy-paste, unseen digital notes, pre-written material, ghostwriting, and AI-assisted suggestions. Handwritten work physically prevents language-model rewriting, external text injection, opening hidden tabs, and pre-loaded templates. Combined with continuous-angle video, this creates one of the strongest anti-cheating systems in any online journalism contest.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Activity Sheet Section */}
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
              Official Activity Sheet
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            All participants must use the <span className="font-bold text-brand-teal">official JournCamp+ Activity Sheet</span> for handwritten categories. The sheet includes your participant code and category details.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <span className="text-xl font-bold text-brand-teal">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Print Multiple Copies</h3>
                <p className="text-base text-gray-600">Download and print several copies in advance to ensure you have enough for all pages of your submission.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <span className="text-xl font-bold text-brand-teal">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Use Only Your Assigned Code</h3>
                <p className="text-base text-gray-600">No names, schools, or any identifying marks. Only the code provided by organizers should appear on your sheets.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <span className="text-xl font-bold text-brand-teal">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Submit Clear Scans</h3>
                <p className="text-base text-gray-600">Use a scanner or scanning app (CamScanner, etc.) to submit as clear PDF or high-quality images. Ensure 100% readability.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <span className="text-xl font-bold text-brand-teal">4</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Attach Video Recording</h3>
                <p className="text-base text-gray-600">Include the continuous-angle video recording showing you, your workspace, and your screen throughout the writing period.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <span className="text-xl font-bold text-brand-teal">5</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Signed Authenticity Declaration</h3>
                <p className="text-base text-gray-600">Attach the signed authenticity declaration, either within one file or separately in the submission bin.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Authenticity Requirements Section */}
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
              Authenticity Requirement
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto"></div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-700 text-center mb-10 max-w-4xl mx-auto leading-relaxed">
            Individual writing categories require submission of an <span className="font-bold text-brand-teal">uninterrupted, continuous-angle video recording</span> throughout the entire writing period.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">The Participant</h3>
              <p className="text-sm text-gray-600">Face and upper body clearly visible</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <Edit3 className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Their Workspace</h3>
              <p className="text-sm text-gray-600">Desk and writing materials in frame</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-brand-teal/10 flex items-center justify-center">
                <Smartphone className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Their Screen</h3>
              <p className="text-sm text-gray-600">Computer screen visible (if applicable)</p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 max-w-3xl mx-auto">
            Group categories (Photojournalism, Editorial Cartooning, Technical Events) require additional proof as detailed per category.
          </p>
        </div>
      </motion.section>

      {/* Judging Section */}
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
              Judging and Criteria
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              All judging will follow the <span className="font-bold text-brand-dark-teal">DepEd NSPC 2025 framework and scoresheets</span>, which are thus adapted for online delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* General Mechanics */}
            <div>
              <h3 className="text-2xl font-bold text-brand-dark-teal mb-6 text-center">General Mechanics</h3>
              
              <div className="space-y-8">
                <div className="border-l-4 border-brand-orange pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <AlertCircle className="w-6 h-6 text-brand-orange flex-shrink-0 mt-1" />
                    <h4 className="text-xl font-bold text-gray-800">No Identifying Marks</h4>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Entries must contain <span className="font-bold">no identifying marks</span>. Each participant receives a codename, which is used in place of their name on submissions. Entries with identifying marks will be subject to disqualification.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <h4 className="text-xl font-bold text-gray-800">Plagiarism and Ethics</h4>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed mb-3">
                    Explained PH has <span className="font-bold text-red-900">zero tolerance</span> for plagiarism, copyright violation, and any form of cheating, which is defined as leveraging undue influences to give one an advantage. Examples include ghostwriting, artificial intelligence (AI), and the generation of articles via large language models (LLMs) such as ChatGPT, Gemini, etc.
                  </p>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Alongside this, Explained PH will adhere to the <span className="font-bold">NSPC 2025 criteria on ethics and standards</span>. Any proven plagiarism or copyright violation is an automatic violation. <span className="font-bold">Judges' decisions are final.</span> Submitted works may or may not be scanned with plagiarism tools.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FileText className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <h4 className="text-xl font-bold text-gray-800">Language and Medium</h4>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Participants will write in the medium for which they registered, such as <span className="font-bold">English or Filipino</span>.
                  </p>
                </div>

                <div className="border-l-4 border-brand-teal pl-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="w-6 h-6 text-brand-teal flex-shrink-0 mt-1" />
                    <h4 className="text-xl font-bold text-gray-800">Strict Deadlines</h4>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Late submissions will <span className="font-bold">not be accepted</span> unless legitimate technical issues are confirmed by proctors. Each category has designated writing/production periods. Plan your time wisely and submit well before the deadline.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-brand-teal" />
              <p className="text-sm font-bold text-gray-800">
                All judging follows DepEd NSPC 2025 framework and scoresheets
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Submission Platform Note */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.2, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="bg-gradient-to-br from-brand-teal to-brand-dark-teal rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Submission Platform
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  Participants will submit their work through dedicated <span className="font-bold text-white">Google Forms</span>, to be released in the days leading up to the competitions.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="text-sm text-white font-medium">Stay tuned for updates!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        variants={fadeIn('up', 'tween', 1.3, 0.6)}
        initial="initial"
        animate="animate"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <MessageSquare className="w-14 h-14 mx-auto mb-4 text-brand-orange" />
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-teal mb-4">
            Need Help?
          </h3>
          <div className="h-1 w-20 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            If you have questions, inquiries, or need any support, feel free to reach out to us.
          </p>
          <a 
            href="mailto:journcamp@explained.ph"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>journcamp@explained.ph</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Guidelines;

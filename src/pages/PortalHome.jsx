import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Users, 
  Video, 
  Camera, 
  PenTool, 
  MessageSquare, 
  Microscope, 
  Trophy, 
  Globe, 
  Radio, 
  Tv, 
  BookOpen, 
  Edit3,
  Smartphone,
  LogOut,
  ExternalLink,
  ClipboardList,
  UserPlus,
  Lock,
  Clock,
  CheckCircle
} from 'lucide-react';
import { fadeIn } from '@/lib/variants';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const PortalHome = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Check authentication on mount
  useEffect(() => {
    const auth = sessionStorage.getItem('portalAuth');
    if (auth !== 'authenticated') {
      navigate('/portal', { replace: true });
    }
  }, [navigate]);

  // Update time every second for countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Check if contest has started
  const isContestActive = (contestDate) => {
    return currentTime >= new Date(contestDate);
  };

  // Check if submission window is still open (uses contestDeadline field)
  const isSubmissionOpen = (contestDate, contestDeadline) => {
    const contestStart = new Date(contestDate);
    const deadline = new Date(contestDeadline);
    return currentTime >= contestStart && currentTime <= deadline;
  };

  // Check if submission window has ended
  const isSubmissionClosed = (contestDeadline) => {
    const deadline = new Date(contestDeadline);
    return currentTime > deadline;
  };

  // Calculate time remaining until contest starts
  const getTimeRemaining = (contestDate) => {
    const total = new Date(contestDate) - currentTime;
    if (total <= 0) return null;

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { days, hours, minutes, seconds, total };
  };

  // Calculate time remaining until submission closes
  const getSubmissionTimeRemaining = (contestDeadline) => {
    const deadline = new Date(contestDeadline);
    const total = deadline - currentTime;
    if (total <= 0) return null;

    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);

    return { days, hours, minutes, seconds, total };
  };

  const handleLogout = () => {
    sessionStorage.removeItem('portalAuth');
    navigate('/portal');
    window.location.reload();
  };

  // Define all categories with their details
  const categories = [
    {
      title: "News Writing",
      titleFl: "Pagsulat ng Balita",
      slug: "news",
      icon: FileText,
      color: "brand-teal",
      description: "Straight news reporting with inverted pyramid structure",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-12-01T00:00:00",
      contestDeadline: "2025-12-02T09:00:00",
      guidelinesPath: "/guidelines/news"
    },
    {
      title: "Editorial Writing",
      titleFl: "Pagsulat ng Pangulong Tudling",
      slug: "editorial",
      icon: MessageSquare,
      color: "brand-orange",
      description: "Opinion pieces with clear stance and persuasive arguments",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-12-01T00:00:00",
      contestDeadline: "2025-12-02T09:00:00",
      guidelinesPath: "/guidelines/editorial"
    },
    {
      title: "Column Writing",
      titleFl: "Pagsulat ng kolum",
      slug: "column",
      icon: FileText,
      color: "blue-600",
      description: "Personal commentary with distinctive voice and style",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/column"
    },
    {
      title: "Feature Writing",
      titleFl: "Pagsulat ng Lathalain",
      slug: "feature",
      icon: BookOpen,
      color: "purple-600",
      description: "Human-interest stories with narrative depth",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/feature"
    },
    {
      title: "Copyreading & Headline Writing",
      titleFl: "Pagwawasto ng Sipi at Pag-uulo ng Balita",
      slug: "crhw",
      icon: Edit3,
      color: "green-600",
      description: "Paragraph rearrangement and headline crafting",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/crhw"
    },
    {
      title: "Science & Technology Writing",
      titleFl: "Pagsulat ng Balitang Agham at Teknolohiya",
      slug: "scitech",
      icon: Microscope,
      color: "indigo-600",
      description: "Complex topics explained in accessible language",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/scitech"
    },
    {
      title: "Sports Writing",
      titleFl: "Pagsulat ng Balitang Pampalakasan",
      slug: "sports",
      icon: Trophy,
      color: "amber-600",
      description: "Game coverage with statistical analysis and angles",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/sports"
    },
    {
      title: "Photojournalism",
      titleFl: "Pagkuha ng Larawang Pampahayagan",
      slug: "photojournalism",
      icon: Camera,
      color: "pink-600",
      description: "Visual storytelling through photographs and captions",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/photojournalism"
    },
    {
      title: "Editorial Cartooning",
      titleFl: "Paglalarawang Tudling",
      slug: "editorial-cartooning",
      icon: PenTool,
      color: "red-600",
      description: "Hand-drawn political commentary and satire",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-28T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/editorial-cartooning"
    },
    {
      title: "Mobile Journalism",
      titleFl: "Mobile Journalism",
      slug: "mobile-journalism",
      icon: Video,
      color: "cyan-600",
      description: "Smartphone-only video journalism and reporting",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-11-28T00:00:00",
      contestDeadline: "2025-12-01T23:59:59",
      guidelinesPath: "/guidelines/mobile-journalism"
    },
    {
      title: "Collaborative Desktop Publishing",
      titleFl: "Collaborative Desktop Publishing",
      slug: "cdp",
      icon: Users,
      color: "teal-600",
      description: "Team-based four-page publication production",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-30T00:00:00",
      contestDeadline: "2025-11-30T23:59:59",
      guidelinesPath: "/guidelines/cdp"
    },
    {
      title: "Online Publishing",
      titleFl: "Online Publishing",
      slug: "online-publishing",
      icon: Globe,
      color: "orange-600",
      description: "Multi-format digital publication with WordPress",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-11-29T23:59:59",
      guidelinesPath: "/guidelines/online-publishing"
    },
    {
      title: "Radio Broadcasting",
      titleFl: "Radio Broadcasting",
      slug: "radio-broadcasting",
      icon: Radio,
      color: "red-600",
      description: "5-minute audio newscast with script and infomercial",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-12-02T00:00:00",
      contestDeadline: "2025-12-02T23:59:59",
      guidelinesPath: "/guidelines/radio-broadcasting"
    },
    {
      title: "TV Broadcasting",
      titleFl: "TV Broadcasting",
      slug: "tv-broadcasting",
      icon: Tv,
      color: "purple-600",
      description: "6-minute video newscast with complete TV script",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-12-03T00:00:00",
      contestDeadline: "2025-12-03T23:59:59",
      guidelinesPath: "/guidelines/tv-broadcasting"
    }
  ];

  // Category selection form links
  const registrationForms = [
    {
      title: "Individual Category Selection",
      description: "Select your individual writing and multimedia categories",
      icon: UserPlus,
      color: "brand-teal",
      link: "https://forms.gle/fqUPdvaJcPehPKV59", 
      isExternal: true
    },
    {
      title: "Group Category Selection",
      description: "Select your collaborative and team-based categories",
      icon: Users,
      color: "brand-orange",
      link: "https://docs.google.com/forms/d/1bCrMGjctAylejSN4aWM2KflnUJ_GtXnQasT3sGLPlLA/edit", 
      isExternal: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white py-6 px-4 sticky top-0 z-40 shadow-lg"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">User Portal</h1>
            <p className="text-white/90 text-sm md:text-base">JournCamp+ Resources Hub</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </motion.header>

      {/* Welcome Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.2, 0.6)}
        initial="hidden"
        animate="show"
        className="relative py-20 px-4 bg-gradient-to-br from-brand-teal/10 via-white to-brand-orange/10 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-brand-teal/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center mb-6"
            >
              <img src="/ncps.png" alt="NCPS x JournCamp+ Logo" className="h-12 md:h-16" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark-teal mb-6 leading-tight">
              Welcome to the Portal!
            </h2>
            
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-brand-teal rounded-full"></div>
              <div className="h-1.5 w-24 bg-gradient-to-r from-brand-teal to-brand-orange rounded-full"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-brand-orange to-transparent rounded-full"></div>
            </div>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Access all your competition materials, activity sheets, fact sheets, and submission bins organized by category and grade level.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-brand-teal/20">
                <span className="text-sm font-semibold text-brand-teal">📄 Activity Sheets</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-brand-teal/20">
                <span className="text-sm font-semibold text-brand-teal">📊 Fact Sheets</span>
              </div>
              <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-brand-teal/20">
                <span className="text-sm font-semibold text-brand-teal">📤 Submission Bins</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Category Selection Forms Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.3, 0.6)}
        initial="hidden"
        animate="show"
        className="py-12 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <ClipboardList className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Category Selection Forms
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Complete your category selection for individual or group categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {registrationForms.map((form, index) => {
              const IconComponent = form.icon;
              return (
                <motion.a
                  key={index}
                  href={form.link}
                  target={form.isExternal ? "_blank" : "_self"}
                  rel={form.isExternal ? "noopener noreferrer" : ""}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  className="group bg-white rounded-xl border-2 border-slate-200 hover:border-brand-teal hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className={"flex-shrink-0 w-14 h-14 rounded-xl bg-" + form.color + "/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"}>
                      <IconComponent className={"w-7 h-7 text-" + form.color} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-brand-teal transition-colors duration-300 mb-2">
                        {form.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {form.description}
                      </p>
                      <div className="flex items-center gap-2 text-brand-teal font-semibold text-sm">
                        <span>Open Form</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Competition Categories Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        initial="hidden"
        animate="show"
        className="py-16 px-4 bg-white"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10">
            <BookOpen className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Competition Categories
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Select a category to access activity sheets, fact sheets, and submission bins by grade level
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const isActive = isContestActive(category.contestDate);
              const isOpen = isSubmissionOpen(category.contestDate, category.contestDeadline);
              const isClosed = isSubmissionClosed(category.contestDeadline);
              const timeRemaining = !isActive ? getTimeRemaining(category.contestDate) : null;
              const submissionTimeRemaining = isOpen ? getSubmissionTimeRemaining(category.contestDeadline) : null;
              const CardWrapper = isOpen ? Link : 'div';
              const cardProps = isOpen ? { to: `/portal/category/${category.slug}` } : {};

              return (
                <CardWrapper
                  key={index}
                  {...cardProps}
                  className={`group ${isActive ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                    className={`bg-white rounded-xl border-2 ${
                      isOpen 
                        ? 'border-slate-200 hover:border-brand-teal hover:shadow-xl' 
                        : isClosed
                        ? 'border-slate-200 bg-slate-50 opacity-60'
                        : 'border-slate-200 bg-slate-50 opacity-75'
                    } transition-all duration-300 p-4 md:p-6 h-full flex flex-col relative overflow-hidden`}
                  >
                    {/* Lock Overlay for not started */}
                    {!isActive && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center">
                          <Lock className="w-4 h-4 text-slate-600" />
                        </div>
                      </div>
                    )}

                    {/* Closed Badge */}
                    {isClosed && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="flex items-center gap-1 bg-red-100 border border-red-300 px-2 py-1 rounded-full">
                          <Lock className="w-3 h-3 text-red-600" />
                          <span className="text-[10px] font-semibold text-red-700">Closed</span>
                        </div>
                      </div>
                    )}

                    {/* Open Badge */}
                    {isOpen && (
                      <div className="absolute top-3 right-3 z-10">
                        <div className="flex items-center gap-1 bg-green-100 border border-green-300 px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                          <span className="text-[10px] font-semibold text-green-700">Open</span>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 md:gap-4 mb-3">
                      <div className={"flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-" + category.color + "/10 flex items-center justify-center " + (isActive ? 'group-hover:scale-110' : '') + " transition-transform duration-300"}>
                          <IconComponent className={"w-5 h-5 md:w-6 md:h-6 text-" + category.color + " " + (!isActive ? 'opacity-50' : '')} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-base md:text-lg font-bold leading-tight mb-1 ${
                          isActive ? 'text-gray-800 group-hover:text-brand-teal' : 'text-gray-500'
                        } transition-colors duration-300`}>
                          {category.title}
                        </h3>
                        <p className="text-[10px] md:text-xs text-gray-500 italic truncate">
                          {category.titleFl}
                        </p>
                      </div>
                    </div>

                    {/* Eligibility Badges */}
                    <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3">
                      {category.eligibility.map((level, idx) => (
                        <span
                          key={idx}
                          className={`text-[9px] md:text-[10px] font-semibold px-1.5 md:px-2 py-0.5 rounded-full ${
                            level === "Elementary"
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : level === "Secondary"
                              ? "bg-green-100 text-green-700 border border-green-200"
                              : "bg-purple-100 text-purple-700 border border-purple-200"
                          } ${!isActive ? 'opacity-60' : ''}`}
                        >
                          {level}
                        </span>
                      ))}
                    </div>

                    <p className={`text-xs md:text-sm mb-3 md:mb-4 flex-1 ${
                      isActive ? 'text-gray-600' : 'text-gray-400'
                    }`}>
                      {category.description}
                    </p>

                    {/* Countdown or Action */}
                    {!isActive && timeRemaining ? (
                      <div className="pt-3 border-t border-slate-200">
                        <div className="flex items-center gap-2 text-slate-600 mb-2">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[10px] md:text-xs font-semibold">Opens in:</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1 md:gap-2">
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-brand-teal">{timeRemaining.days}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-brand-teal">{String(timeRemaining.hours).padStart(2, '0')}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">hrs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-brand-teal">{String(timeRemaining.minutes).padStart(2, '0')}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">min</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-brand-teal">{String(timeRemaining.seconds).padStart(2, '0')}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">sec</div>
                          </div>
                        </div>
                      </div>
                    ) : isClosed ? (
                      <div className="pt-3 border-t border-slate-200">
                        <div className="flex items-center justify-center gap-2 text-red-600">
                          <Lock className="w-4 h-4" />
                          <span className="text-xs md:text-sm font-semibold">Submission Closed</span>
                        </div>
                      </div>
                    ) : isOpen && submissionTimeRemaining ? (
                      <div className="pt-3 border-t border-slate-200">
                        <div className="flex items-center gap-2 text-amber-600 mb-2">
                          <Clock className="w-3 h-3 md:w-4 md:h-4" />
                          <span className="text-[10px] md:text-xs font-semibold">Closes in:</span>
                        </div>
                        <div className="grid grid-cols-4 gap-1 md:gap-2 mb-3">
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-amber-600">{submissionTimeRemaining.days}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-amber-600">{String(submissionTimeRemaining.hours).padStart(2, '0')}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">hrs</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-amber-600">{String(submissionTimeRemaining.minutes).padStart(2, '0')}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">min</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs md:text-sm font-bold text-amber-600">{String(submissionTimeRemaining.seconds).padStart(2, '0')}</div>
                            <div className="text-[8px] md:text-[10px] text-gray-500">sec</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-brand-teal font-semibold text-xs md:text-sm">View Resources</span>
                          <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                            <span className="text-base md:text-lg">→</span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </motion.div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Help Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="hidden"
        animate="show"
        className="py-12 px-4 bg-gradient-to-br from-brand-teal/5 to-brand-orange/5"
      >
        <div className="container mx-auto max-w-7xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-teal mb-4">
            Need Help?
          </h3>
          <div className="h-1 w-20 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            If you encounter any issues accessing materials or have questions about the competition, please reach out to us.
          </p>
          <a
            href="mailto:journcamp@explained.ph"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <span>journcamp@explained.ph</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PortalHome;

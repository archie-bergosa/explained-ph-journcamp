import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
  ArrowLeft,
  GraduationCap,
  School,
  Lock
} from 'lucide-react';
import { fadeIn } from '@/lib/variants';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const CategoryDetail = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  // Check authentication on mount
  useEffect(() => {
    const auth = sessionStorage.getItem('portalAuth');
    if (auth !== 'authenticated') {
      navigate('/portal', { replace: true });
    }
  }, [navigate]);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Category definitions with contest dates
  const categoryData = {
    "news": {
      title: "News Writing",
      titleFl: "Pagsulat ng Balita",
      icon: FileText,
      color: "brand-teal",
      description: "Straight news reporting with inverted pyramid structure",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-12-01T00:00:00",
      contestDeadline: "2025-12-02T09:00:00"
    },
    "editorial": {
      title: "Editorial Writing",
      titleFl: "Pagsulat ng Pangulong Tudling",
      icon: MessageSquare,
      color: "brand-orange",
      description: "Opinion pieces with clear stance and persuasive arguments",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-12-01T00:00:00",
      contestDeadline: "2025-12-02T09:00:00"
    },
    "column": {
      title: "Column Writing",
      titleFl: "Pagsulat ng kolum",
      icon: FileText,
      color: "blue-600",
      description: "Personal commentary with distinctive voice and style",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "feature": {
      title: "Feature Writing",
      titleFl: "Pagsulat ng Lathalain",
      icon: BookOpen,
      color: "purple-600",
      description: "Human-interest stories with narrative depth",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "crhw": {
      title: "Copyreading & Headline Writing",
      titleFl: "Pagwawasto ng Sipi at Pag-uulo ng Balita",
      icon: Edit3,
      color: "green-600",
      description: "Paragraph rearrangement and headline crafting",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "scitech": {
      title: "Science & Technology Writing",
      titleFl: "Pagsulat ng Balitang Agham at Teknolohiya",
      icon: Microscope,
      color: "indigo-600",
      description: "Complex topics explained in accessible language",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "sports": {
      title: "Sports Writing",
      titleFl: "Pagsulat ng Balitang Pampalakasan",
      icon: Trophy,
      color: "amber-600",
      description: "Game coverage with statistical analysis and angles",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "photojournalism": {
      title: "Photojournalism",
      titleFl: "Pagkuha ng Larawang Pampahayagan",
      icon: Camera,
      color: "pink-600",
      description: "Visual storytelling through photographs and captions",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "editorial-cartooning": {
      title: "Editorial Cartooning",
      titleFl: "Paglalarawang Tudling",
      icon: PenTool,
      color: "red-600",
      description: "Hand-drawn political commentary and satire",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-28T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "mobile-journalism": {
      title: "Mobile Journalism",
      titleFl: "Mobile Journalism",
      icon: Video,
      color: "cyan-600",
      description: "Smartphone-only video journalism and reporting",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-11-28T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "cdp": {
      title: "Collaborative Desktop Publishing",
      titleFl: "Collaborative Desktop Publishing",
      icon: Users,
      color: "teal-600",
      description: "Team-based four-page publication production",
      eligibility: ["Elementary", "Secondary", "Tertiary"],
      contestDate: "2025-11-30T00:00:00",
      contestDeadline: "2025-11-30T23:59:59"
    },
    "online-publishing": {
      title: "Online Publishing",
      titleFl: "Online Publishing",
      icon: Globe,
      color: "orange-600",
      description: "Multi-format digital publication with WordPress",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-11-29T23:59:59"
    },
    "radio-broadcasting": {
      title: "Radio Broadcasting",
      titleFl: "Radio Broadcasting",
      icon: Radio,
      color: "red-600",
      description: "5-minute audio newscast with script and infomercial",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-12-02T00:00:00",
      contestDeadline: "2025-12-02T23:59:59"
    },
    "tv-broadcasting": {
      title: "TV Broadcasting",
      titleFl: "TV Broadcasting",
      icon: Tv,
      color: "purple-600",
      description: "6-minute video newscast with complete TV script",
      eligibility: ["Secondary", "Tertiary"],
      contestDate: "2025-12-03T00:00:00",
      contestDeadline: "2025-12-03T23:59:59"
    }
  };

  const category = categoryData[categorySlug];

  // Check if submission window has closed
  const isSubmissionClosed = () => {
    if (!category || !category.contestDeadline) return false;
    const deadline = new Date(category.contestDeadline);
    return currentTime > deadline;
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h2>
          <Button onClick={() => navigate('/portal')}>Return to Portal</Button>
        </div>
      </div>
    );
  }

  // Show submission closed page
  if (isSubmissionClosed()) {
    const IconComponent = category.icon;
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
              <IconComponent className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.title}</h2>
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
            <Lock className="w-12 h-12 text-red-600 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-red-800 mb-2">Submission Window Closed</h3>
            <p className="text-red-700">
              The submission window for this category has ended. Submissions are no longer being accepted.
            </p>
          </div>
          <Button 
            onClick={() => navigate('/portal')}
            className="bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white font-semibold px-8 py-4 text-lg"
          >
            Return to Portal Home
          </Button>
        </motion.div>
      </div>
    );
  }

  const IconComponent = category.icon;

  // Grade level configurations
  const gradeLevels = [
    {
      name: "Elementary",
      slug: "elementary",
      icon: School,
      color: "blue",
      description: "Grades 4-6",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Secondary",
      slug: "secondary",
      icon: GraduationCap,
      color: "green",
      description: "Junior & Senior High School",
      gradient: "from-green-500 to-green-600"
    },
    {
      name: "Tertiary",
      slug: "tertiary",
      icon: BookOpen,
      color: "purple",
      description: "College & University",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  // Filter grade levels based on eligibility
  const availableGradeLevels = gradeLevels.filter(level => 
    category.eligibility.includes(level.name)
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-brand-teal to-brand-dark-teal text-white py-6 px-4 sticky top-0 z-40 shadow-lg"
      >
        <div className="container mx-auto max-w-7xl">
          <Button
            onClick={() => navigate('/portal')}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portal
          </Button>
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">{category.title}</h1>
              <p className="text-white/90 text-sm md:text-base italic">{category.titleFl}</p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Grade Levels Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.2, 0.6)}
        initial="hidden"
        animate="show"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <GraduationCap className="w-14 h-14 mx-auto mb-4 text-brand-teal" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
              Select Your Grade Level
            </h2>
            <div className="h-1 w-20 bg-brand-orange mx-auto mb-4"></div>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Choose your grade level to access the corresponding activity sheets, fact sheets, and submission bins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {availableGradeLevels.map((level, index) => {
              const LevelIcon = level.icon;
              return (
                <Link
                  key={index}
                  to={`/portal/category/${categorySlug}/${level.slug}`}
                  className="group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    className="bg-white rounded-xl border-2 border-slate-200 hover:border-brand-teal hover:shadow-xl transition-all duration-300 overflow-hidden h-full"
                  >
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-r ${level.gradient} p-6 text-white`}>
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <LevelIcon className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center mb-1">
                        {level.name}
                      </h3>
                      <p className="text-center text-white/90 text-sm">
                        {level.description}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                          <span>Activity Sheets</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                          <span>Fact Sheets</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-brand-teal"></div>
                          <span>Submission Bins</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-slate-200">
                        <div className="flex items-center justify-between">
                          <span className="text-brand-teal font-semibold text-sm">Access Resources</span>
                          <div className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                            <span className="text-lg">→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Not Available Notice */}
          {availableGradeLevels.length < 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg px-6 py-3">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> This category is only available for {category.eligibility.join(', ')} levels.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CategoryDetail;

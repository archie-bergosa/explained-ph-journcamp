import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
  Download,
  Upload,
  ExternalLink,
  School,
  GraduationCap,
  Link as LinkIcon,
  FileSpreadsheet,
  Lock
} from 'lucide-react';
import { fadeIn } from '@/lib/variants';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const GradeResources = () => {
  const { categorySlug, gradeLevel } = useParams();
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

  // Category definitions (same structure as before)
  const categoryData = {
    "news": {
      title: "News Writing",
      titleFl: "Pagsulat ng Balita",
      icon: FileText,
      color: "brand-teal",
      contestDate: "2025-12-01T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "editorial": {
      title: "Editorial Writing",
      titleFl: "Pagsulat ng Pangulong Tudling",
      icon: MessageSquare,
      color: "brand-orange",
      contestDate: "2025-12-01T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "column": {
      title: "Column Writing",
      titleFl: "Pagsulat ng kolum",
      icon: FileText,
      color: "blue-600",
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "feature": {
      title: "Feature Writing",
      titleFl: "Pagsulat ng Lathalain",
      icon: BookOpen,
      color: "purple-600",
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "crhw": {
      title: "Copyreading & Headline Writing",
      titleFl: "Pagwawasto ng Sipi at Pag-uulo ng Balita",
      icon: Edit3,
      color: "green-600",
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "scitech": {
      title: "Science & Technology Writing",
      titleFl: "Pagsulat ng Balitang Agham at Teknolohiya",
      icon: Microscope,
      color: "indigo-600",
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "sports": {
      title: "Sports Writing",
      titleFl: "Pagsulat ng Balitang Pampalakasan",
      icon: Trophy,
      color: "amber-600",
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "photojournalism": {
      title: "Photojournalism",
      titleFl: "Pagkuha ng Larawang Pampahayagan",
      icon: Camera,
      color: "pink-600",
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "editorial-cartooning": {
      title: "Editorial Cartooning",
      titleFl: "Paglalarawang Tudling",
      icon: PenTool,
      color: "red-600",
      contestDate: "2025-11-28T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "mobile-journalism": {
      title: "Mobile Journalism",
      titleFl: "Mobile Journalism",
      icon: Video,
      color: "cyan-600",
      contestDate: "2025-11-28T00:00:00",
      contestDeadline: "2025-12-01T23:59:59"
    },
    "cdp": {
      title: "Collaborative Desktop Publishing",
      titleFl: "Collaborative Desktop Publishing",
      icon: Users,
      color: "teal-600",
      contestDate: "2025-11-30T00:00:00",
      contestDeadline: "2025-11-30T23:59:59"
    },
    "online-publishing": {
      title: "Online Publishing",
      titleFl: "Online Publishing",
      icon: Globe,
      color: "orange-600",
      contestDate: "2025-11-29T00:00:00",
      contestDeadline: "2025-11-29T23:59:59"
    },
    "radio-broadcasting": {
      title: "Radio Broadcasting",
      titleFl: "Radio Broadcasting",
      icon: Radio,
      color: "red-600",
      contestDate: "2025-12-02T00:00:00",
      contestDeadline: "2025-12-02T23:59:59"
    },
    "tv-broadcasting": {
      title: "TV Broadcasting",
      titleFl: "TV Broadcasting",
      icon: Tv,
      color: "purple-600",
      contestDate: "2025-12-03T00:00:00",
      contestDeadline: "2025-12-03T23:59:59"
    }
  };

  const category = categoryData[categorySlug];

  // Grade level info
  const gradeLevelData = {
    elementary: {
      name: "Elementary",
      description: "Grades 4-6",
      icon: School,
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    secondary: {
      name: "Secondary",
      description: "Junior & Senior High School",
      icon: GraduationCap,
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    tertiary: {
      name: "Tertiary",
      description: "College & University",
      icon: BookOpen,
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    }
  };

  const gradeInfo = gradeLevelData[gradeLevel];

  // Check if submission window has closed
  const isSubmissionClosed = () => {
    if (!category || !category.contestDeadline) return false;
    const deadline = new Date(category.contestDeadline);
    return currentTime > deadline;
  };

  if (!category || !gradeInfo) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Page not found</h2>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.title}</h2>
          <p className="text-lg text-gray-600 mb-6">{gradeInfo.name} Level</p>
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
  const GradeIcon = gradeInfo.icon;

  // Resource links organized by category and grade level
  // Replace all "#" placeholders with your actual Google Drive/Form links
  const resourceLinks = {
    "news": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1SXYi0PyWduwGkMmQj4r0zEec0DD-9a8K",
        submissionBin: "https://forms.gle/Hor8b2ASk7RtTE2y8"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1SXYi0PyWduwGkMmQj4r0zEec0DD-9a8K",
        submissionBin: "https://forms.gle/Hor8b2ASk7RtTE2y8"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1SXYi0PyWduwGkMmQj4r0zEec0DD-9a8K",
        submissionBin: "https://forms.gle/Hor8b2ASk7RtTE2y8"
      }
    },
    "editorial": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1x_4LdY8L6f7H3CuzflPNwrkLEvCFNEWB",
        submissionBin: "https://forms.gle/Eu2ypfEHwtrxCBNi9"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1x_4LdY8L6f7H3CuzflPNwrkLEvCFNEWB",
        submissionBin: "https://forms.gle/Eu2ypfEHwtrxCBNi9"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1x_4LdY8L6f7H3CuzflPNwrkLEvCFNEWB",
        submissionBin: "https://forms.gle/Eu2ypfEHwtrxCBNi9"
      }
    },
    "column": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1yZay4iKeMS5C7Kxx70A4H8Lk16g2aTVB",
        submissionBin: "https://forms.gle/LUHGLyqnJKKk1c6v5"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1yZay4iKeMS5C7Kxx70A4H8Lk16g2aTVB",
        submissionBin: "https://forms.gle/LUHGLyqnJKKk1c6v5"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1yZay4iKeMS5C7Kxx70A4H8Lk16g2aTVB",
        submissionBin: "https://forms.gle/LUHGLyqnJKKk1c6v5"
      }
    },
    "feature": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1o4bLbp4LihuAYFBuM732u9fxp4q3Q0KY?usp=drive_link",
        submissionBin: "https://forms.gle/cLWLApoyxKykWYk38"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1DHW1CKDBDvJ4sA63XREhlF0oP_yK4nXG?usp=drive_link",
        submissionBin: "https://forms.gle/cLWLApoyxKykWYk38"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1HD_OQd9NkWQEcf93Iqd4SinjuVqHlxrS?usp=drive_link",
        submissionBin: "https://forms.gle/cLWLApoyxKykWYk38"
      }
    },
    "crhw": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: [
          { label: "English", link: "https://drive.google.com/file/d/1PqqNvvUoKlznRGkiNUh2qvrPGZvHpvCG/view?usp=drive_link" },
          { label: "Filipino", link: "https://drive.google.com/file/d/1CNvo00RHktazFUjHQ2tDPHYLftiUfm0t/view?usp=drive_link" }
        ],
        submissionBin: "https://forms.gle/pa4cFhNhpbwTuL7e8"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: [
          { label: "English", link: "https://drive.google.com/file/d/1PqqNvvUoKlznRGkiNUh2qvrPGZvHpvCG/view?usp=drive_link" },
          { label: "Filipino", link: "https://drive.google.com/file/d/1CNvo00RHktazFUjHQ2tDPHYLftiUfm0t/view?usp=drive_link" }
        ],
        submissionBin: "https://forms.gle/pa4cFhNhpbwTuL7e8"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: [
          { label: "English", link: "https://drive.google.com/file/d/1PqqNvvUoKlznRGkiNUh2qvrPGZvHpvCG/view?usp=drive_link" },
          { label: "Filipino", link: "https://drive.google.com/file/d/1CNvo00RHktazFUjHQ2tDPHYLftiUfm0t/view?usp=drive_link" }
        ],
        submissionBin: "https://forms.gle/pa4cFhNhpbwTuL7e8"
      }
    },
    "scitech": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1_ZqxQG2rUIPYjZQ4Gh-p4ZH8AOZR3OlZ/view?usp=drive_link",
        submissionBin: "https://forms.gle/3Qn4tsxq1nG7RAxB8"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1fJ9Eb7iasl8aKDzaPqL_hDbKGOHHvuQq/view?usp=drive_link",
        submissionBin: "https://forms.gle/3Qn4tsxq1nG7RAxB8"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1X2PFrKDrK5hYFH0SDaBO1g4l6m1aPNZS/view?usp=drive_link",
        submissionBin: "https://forms.gle/3Qn4tsxq1nG7RAxB8"
      }
    },
    "sports": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1AWTqpyIf2uzbFrvEh16otcD8n8t4spGI/view?usp=drive_link",
        submissionBin: "https://forms.gle/t6bSSP9wNz3W9Dx46"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1H0dDlRRXUYtlIcTwWc14xniTUG1iLojf/view?usp=drive_link",
        submissionBin: "https://forms.gle/t6bSSP9wNz3W9Dx46"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1qJIeEtQnu4rJoi2tTe6V56eDz2L3VMMb/view?usp=drive_link",
        submissionBin: "https://forms.gle/t6bSSP9wNz3W9Dx46"
      }
    },
    "photojournalism": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1GyXk0m7fqywd6epmFq91i1bY0Fd9tjdz/view?usp=drive_link",
        submissionBin: "https://forms.gle/8F3xgX3oRVaTBAC76"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1GyXk0m7fqywd6epmFq91i1bY0Fd9tjdz/view?usp=drive_link",
        submissionBin: "https://forms.gle/8F3xgX3oRVaTBAC76"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/file/d/1GyXk0m7fqywd6epmFq91i1bY0Fd9tjdz/view?usp=drive_link",
        submissionBin: "https://forms.gle/8F3xgX3oRVaTBAC76"
      }
    },
    "editorial-cartooning": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1EuVyy7ZvyppxObXjHc_oF7cBd5Eeq1_l",
        submissionBin: "https://forms.gle/yEh8UJSJKveXDr357"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1EuVyy7ZvyppxObXjHc_oF7cBd5Eeq1_l",
        submissionBin: "https://forms.gle/yEh8UJSJKveXDr357"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1EuVyy7ZvyppxObXjHc_oF7cBd5Eeq1_l",
        submissionBin: "https://forms.gle/yEh8UJSJKveXDr357"
      }
    },
    "mobile-journalism": {
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1Py-TMljNxPN9Ctout9YyXOmDtWaSXlxV?usp=drive_link",
        submissionBin: "https://forms.gle/DP8jmhuTmrqbeqwe9"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1zIyeym3IA9gazVi2z7cyV1OmlsaI0o7M?usp=drive_link",
        submissionBin: "https://forms.gle/DP8jmhuTmrqbeqwe9"
      }
    },
    "cdp": {
      "elementary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1U70ilwrZMhl44Ea4PNBFmC01PnD2uOlc?usp=drive_link",
        submissionBin: "https://forms.gle/yvLokjmCqBesz4aH9"
      },
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1U70ilwrZMhl44Ea4PNBFmC01PnD2uOlc?usp=drive_link",
        submissionBin: "https://forms.gle/yvLokjmCqBesz4aH9"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1U70ilwrZMhl44Ea4PNBFmC01PnD2uOlc?usp=drive_link",
        submissionBin: "https://forms.gle/yvLokjmCqBesz4aH9"
      }
    },
    "online-publishing": {
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1VTTXEE9Pbo8ZyB3TWh_g_whcKKZD06pe",
        submissionBin: "https://forms.gle/6CkqVShfpucBzWjaA"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1VTTXEE9Pbo8ZyB3TWh_g_whcKKZD06pe",
        submissionBin: "https://forms.gle/6CkqVShfpucBzWjaA"
      }
    },
    "radio-broadcasting": {
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1a2KIYFtOCieAfvu61fhnigvH8224uV0e",
        submissionBin: "https://forms.gle/9THdoySm7MwLgKYK8"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1a2KIYFtOCieAfvu61fhnigvH8224uV0e",
        submissionBin: "https://forms.gle/9THdoySm7MwLgKYK8"
      }
    },
    "tv-broadcasting": {
      "secondary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1neETL9pTz2WBJLV3PEqBwLjcfLcyAunN",
        submissionBin: "https://forms.gle/dVTaCEfmXFRyUMCh9"
      },
      "tertiary": {
        activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
        factSheet: "https://drive.google.com/drive/folders/1neETL9pTz2WBJLV3PEqBwLjcfLcyAunN",
        submissionBin: "https://forms.gle/dVTaCEfmXFRyUMCh9"
      }
    }
  };

  // Get the specific links for this category and grade level
  const categoryGradeLinks = resourceLinks[categorySlug]?.[gradeLevel] || {
    activitySheet: "https://drive.google.com/file/d/10bnOeUmuUv-ChLnZJTvfq_KRNtmMMexJ/view?usp=sharing",
    factSheet: "#",
    submissionBin: "#"
  };

  // Build resources array with specific links
  const resources = [
    {
      title: "Activity Sheet",
      description: "Download the official activity sheet for this competition",
      icon: FileText,
      color: "blue",
      link: categoryGradeLinks.activitySheet,
      type: "download",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Fact Sheet",
      description: "Reference materials and competition guidelines",
      icon: FileSpreadsheet,
      color: "green",
      link: categoryGradeLinks.factSheet,
      type: "download",
      gradient: "from-green-500 to-green-600",
      multiLink: Array.isArray(categoryGradeLinks.factSheet) // Flag for multiple links
    },
    {
      title: "Submission Bin",
      description: "Submit your completed work here",
      icon: Upload,
      color: "orange",
      link: categoryGradeLinks.submissionBin,
      type: "external",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Competition Guidelines",
      description: "View complete mechanics, judging criteria, and rules",
      icon: BookOpen,
      color: "purple",
      link: `/guidelines/${categorySlug}`,
      type: "internal",
      gradient: "from-purple-500 to-purple-600"
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
        <div className="container mx-auto max-w-7xl">
          <Button
            onClick={() => navigate(`/portal/category/${categorySlug}`)}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Grade Levels
          </Button>
          <div className="flex items-center gap-4 flex-wrap">
            <div className={`w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">{category.title}</h1>
              <p className="text-white/90 text-sm md:text-base italic">{category.titleFl}</p>
            </div>
            <div className={`px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30`}>
              <div className="flex items-center gap-2">
                <GradeIcon className="w-5 h-5" />
                <span className="font-semibold">{gradeInfo.name}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Welcome Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.2, 0.6)}
        initial="hidden"
        animate="show"
        className="py-12 px-4 bg-white border-b border-slate-200"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${gradeInfo.gradient} text-white rounded-full mb-6`}>
            <GradeIcon className="w-6 h-6" />
            <span className="font-bold text-lg">{gradeInfo.name} Level</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark-teal mb-4">
            Competition Resources
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Access all the materials you need for the {category.title} competition at the {gradeInfo.name} level.
          </p>
        </div>
      </motion.section>

      {/* Resources Grid */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.3, 0.6)}
        initial="hidden"
        animate="show"
        className="py-16 px-4 bg-slate-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const ResourceIcon = resource.icon;
              const isInternal = resource.type === 'internal';
              const isMultiLink = resource.multiLink;
              
              // For multi-link resources (like multiple fact sheets)
              if (isMultiLink) {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <div className="bg-white rounded-xl border-2 border-slate-200 hover:border-brand-teal hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                      {/* Gradient Header */}
                      <div className={`bg-gradient-to-r ${resource.gradient} p-6 text-white`}>
                        <div className="flex items-center justify-center mb-3">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <ResourceIcon className="w-8 h-8" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-center">
                          {resource.title}
                        </h3>
                      </div>

                      {/* Content with Multiple Links */}
                      <div className="p-6">
                        <p className="text-gray-600 text-center mb-6">
                          {resource.description}
                        </p>

                        <div className="space-y-3">
                          {resource.link.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between gap-2 px-4 py-3 bg-slate-50 hover:bg-brand-teal/10 border border-slate-200 hover:border-brand-teal rounded-lg transition-all duration-300 group"
                            >
                              <span className="font-semibold text-gray-700 group-hover:text-brand-teal">
                                {item.label}
                              </span>
                              <ExternalLink className="w-4 h-4 text-brand-teal group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
              
              // For single-link resources (original behavior)
              const Wrapper = isInternal ? Link : 'a';
              const wrapperProps = isInternal 
                ? { to: resource.link }
                : { href: resource.link, target: "_blank", rel: "noopener noreferrer" };
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  <Wrapper
                    {...wrapperProps}
                    className="group block h-full"
                  >
                    <div className="bg-white rounded-xl border-2 border-slate-200 hover:border-brand-teal hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                    {/* Gradient Header */}
                    <div className={`bg-gradient-to-r ${resource.gradient} p-6 text-white`}>
                      <div className="flex items-center justify-center mb-3">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ResourceIcon className="w-8 h-8" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-center">
                        {resource.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-gray-600 text-center mb-6">
                        {resource.description}
                      </p>

                      <div className="flex items-center justify-center gap-2 text-brand-teal font-semibold">
                        <span>
                          {resource.type === 'download' ? 'Download' : 'Open Link'}
                        </span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Important Notes Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.4, 0.6)}
        initial="hidden"
        animate="show"
        className="py-12 px-4 bg-gradient-to-br from-amber-50 to-orange-50"
      >
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-xl border-2 border-amber-200 p-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <LinkIcon className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Important Reminders
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <span><strong>Download the activity sheet</strong> before starting your work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <span><strong>Review the fact sheet</strong> for complete guidelines and judging criteria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <span><strong>Submit before the deadline</strong> through the submission bin link</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <span><strong>Follow the authenticity requirements</strong> as stated in the guidelines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-teal mt-2 flex-shrink-0"></div>
                    <span><strong>Keep copies of your submission</strong> for your records</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Help Section */}
      <motion.section
        variants={fadeIn('up', 'tween', 0.5, 0.6)}
        initial="hidden"
        animate="show"
        className="py-12 px-4 bg-white"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-dark-teal mb-4">
            Need Technical Support?
          </h3>
          <div className="h-1 w-20 bg-brand-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
            If you have trouble accessing any links or submitting your work, please contact us immediately.
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

export default GradeResources;

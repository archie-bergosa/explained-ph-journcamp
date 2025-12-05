import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Trophy, Video, Flag, Award } from 'lucide-react';

const Schedule = () => {
  
  const scheduleData = [
    {
      date: "November 22",
      day: "Saturday",
      events: [
        { 
          time: "1:00 PM - 2:00 PM", 
          title: "Community Journalism with Samantha Bagayas", 
          type: "lecture",
          description: "Head of Civic Engagements, Rappler. Learn about community journalism practices.",
        }
      ]
    },
    {
      date: "November 23",
      day: "Sunday",
      events: [
        { 
          time: "2:20 PM - 3:20 PM", 
          title: "Becoming an Effective Editor with Marjuice Destinado", 
          type: "lecture",
          description: "Rapper 2025 - Aries Rufo Journalism Fellow. Workshop on editorial skills.",
        },
        { 
          time: "4:00 PM - 5:00 PM", 
          title: "Acing your MOCJ Portfolio with Yesha Camile", 
          type: "lecture",
          description: "NSPC 2025 Most Outstanding Campus Journalist. Tips for building your journalism portfolio.",
        },
        { 
          time: "6:00 PM", 
          title: "NCPS Opening Program", 
          type: "opening",
          description: "Official opening ceremony of JournCamp+ National Campus Press Summit 2025.",
        }
      ]
    },
    {
      date: "November 24",
      day: "Monday",
      events: [
        { 
          time: "7:00 PM", 
          title: "Column Writing & Feature Writing Lecture", 
          type: "lecture",
          description: "Learn the art of column and feature writing from experienced journalists.",
        }
      ]
    },
    {
      date: "November 25",
      day: "Tuesday",
      events: [
        { 
          time: "6:00 AM", 
          title: "Column Writing & Feature Writing Competition", 
          type: "competition",
          description: "Asynchronous competition. Work at your own pace throughout the day.",
        },
        { 
          time: "7:00 PM", 
          title: "SciTech Writing & Sports Writing Lecture", 
          type: "lecture",
          description: "Specialized lecture on science/technology and sports journalism.",
        }
      ]
    },
    {
      date: "November 26",
      day: "Wednesday",
      events: [
        { 
          time: "Deadline: 11:59 PM", 
          title: "Column Writing & Feature Writing Competition (EXTENDED DEADLINE)", 
          type: "competition",
          description: "DEADLINE EXTENDED! Submit by 11:59 PM today.",
        },
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "SciTech Writing & Sports Writing Competition", 
          type: "competition",
          description: "Choose between SciTech or Sports Writing category.",
        },
        { 
          time: "7:00 PM", 
          title: "Copyreading & Photojournalism Lecture", 
          type: "lecture",
          description: "Master editing and visual storytelling techniques.",
        }
      ]
    },
    {
      date: "November 27",
      day: "Thursday",
      events: [
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "Copyreading & Photojournalism Competition", 
          type: "competition",
          description: "Test your editing skills and visual storytelling abilities.",
        },
        { 
          time: "8:00 PM", 
          title: "Editorial Cartooning & Mobile Journalism Lecture", 
          type: "lecture",
          description: "Learn political illustration and mobile journalism techniques.",
        }
      ]
    },
    {
      date: "November 28",
      day: "Friday",
      events: [
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "Editorial Cartooning & Mobile Journalism Competition", 
          type: "competition",
          description: "Create impactful editorial cartoons or mobile news stories.",
        },
        { 
          time: "7:00 PM", 
          title: "Online Publishing Lecture", 
          type: "lecture",
          description: "Discover digital publishing platforms and web journalism.",
        }
      ]
    },
    {
      date: "November 29",
      day: "Saturday",
      events: [
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "Online Publishing Competition", 
          type: "competition",
          description: "Team competition. Build a complete online publication.",
        },
        { 
          time: "7:00 PM", 
          title: "Collaborative Desktop Publishing Lecture", 
          type: "lecture",
          description: "Learn professional layout and design for print publications.",
        }
      ]
    },
    {
      date: "November 30",
      day: "Sunday",
      events: [
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "Collaborative Desktop Publishing Competition", 
          type: "competition",
          description: "Team competition. Create a four-page publication.",
        },
        { 
          time: "7:00 PM", 
          title: "News & Editorial Writing Lecture", 
          type: "lecture",
          description: "Foundational lecture on news reporting and opinion writing.",
        }
      ]
    },
    {
      date: "December 1",
      day: "Monday",
      events: [
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "News & Editorial Writing Competition", 
          type: "competition",
          description: "Write breaking news or compelling editorials.",
        },
        { 
          time: "7:00 PM", 
          title: "Radio Broadcasting Lecture", 
          type: "lecture",
          description: "Learn audio storytelling and radio production.",
        }
      ]
    },
    {
      date: "December 2",
      day: "Tuesday",
      events: [
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "Radio Broadcasting Competition", 
          type: "competition",
          description: "Produce and submit your radio broadcast piece.",
        },
        { 
          time: "7:00 PM", 
          title: "TV Broadcasting Lecture", 
          type: "lecture",
          description: "Comprehensive guide to television journalism.",
        }
      ]
    },
    {
      date: "December 3",
      day: "Wednesday",
      events: [
        { 
          time: "6:00 AM - 11:59 PM", 
          title: "TV Broadcasting Competition", 
          type: "competition",
          description: "Create and submit your TV broadcast segment.",
        }
      ]
    },
    {
      date: "December 13",
      day: "Saturday",
      events: [
        { 
          time: "9:00 AM - 12:00 PM", 
          title: "NCPS Closing Program & Awarding Ceremony", 
          type: "closing",
          description: "Official closing ceremony and awarding of winners. Live stream via JournCamp+ Facebook page.",
        }
      ]
    }
  ];

  const getEventIcon = (type) => {
    switch(type) {
      case 'lecture': return <Video className="w-5 h-5" />;
      case 'competition': return <Trophy className="w-5 h-5" />;
      case 'opening': return <Flag className="w-5 h-5" />;
      case 'closing': return <Award className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };
  
  const getEventColor = (type) => {
    switch(type) {
      case 'lecture': return 'from-blue-500 to-blue-600';
      case 'competition': return 'from-amber-500 to-amber-600';
      case 'opening': return 'from-teal-500 to-teal-600';
      case 'closing': return 'from-orange-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-dark-teal to-brand-teal text-white py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-10 h-10" />
              <h1 className="text-4xl md:text-5xl font-bold">Event Schedule</h1>
            </div>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              JournCamp+ National Campus Press Summit 2025
            </p>
            <p className="text-md text-teal-200 mt-2">
              November 23 - December 13, 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">Event Types</h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-gradient-to-br from-blue-500 to-blue-600 text-white">
              <Video className="w-4 h-4" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Lecture</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <Trophy className="w-4 h-4" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Competition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <Flag className="w-4 h-4" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Opening</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded bg-gradient-to-br from-orange-500 to-orange-600 text-white">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-sm text-gray-700 font-medium">Closing</span>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {scheduleData.map((dayData, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-brand-dark-teal to-brand-teal text-white p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-5 h-5" />
                  <h3 className="text-lg font-bold">{dayData.date}</h3>
                </div>
                <p className="text-sm text-teal-100">{dayData.day}</p>
              </div>

              {/* Card Body - Events */}
              <div className="p-4 space-y-3">
                {dayData.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`w-full text-left rounded-lg p-3 border-2 ${
                      event.type === 'lecture' ? 'bg-blue-50 border-blue-200' :
                      event.type === 'competition' ? 'bg-amber-50 border-amber-200' :
                      event.type === 'opening' ? 'bg-teal-50 border-teal-200' :
                      'bg-orange-50 border-orange-200'
                    }`}
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <div className={`p-1.5 rounded bg-gradient-to-br ${getEventColor(event.type)} text-white`}>
                        {getEventIcon(event.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-gray-900 leading-tight">
                          {event.title}
                        </h4>
                      </div>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-1 text-xs text-gray-600 ml-8">
                        <Clock className="w-3 h-3" />
                        <span className="font-medium">{event.time}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Info */}
        <div className="mt-8 bg-gradient-to-r from-brand-teal/10 to-brand-orange/10 rounded-xl p-6 border border-brand-teal/20">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Information</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-brand-teal mt-0.5">•</span>
              <span>All competitions run asynchronously from 6:00 AM to 11:59 PM (Philippine Time)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-teal mt-0.5">•</span>
              <span>Most lectures are scheduled at 7:00 PM (except Editorial Cartooning at 8:00 PM)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-teal mt-0.5">•</span>
              <span>All times are in Philippine Time (GMT+8)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

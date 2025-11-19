import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';
import { FileText, Award, Calendar, Users, Mic, Camera, PenTool, Tv, Film } from 'lucide-react';

const Guidelines = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="bg-slate-50 py-16 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 0.6)}
          className="text-center mb-12"
        >
          <FileText className="w-16 h-16 mx-auto mb-6 text-brand-teal" />
          <h1 className="text-4xl font-bold text-brand-dark-teal mb-4">
            National Campus Press Summit Guidelines
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to the official guidelines for the National Campus Press Summit. Please read the following information carefully.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 0.6)}
          className="bg-white rounded-lg shadow-lg border border-slate-200 p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center">
            <Award className="w-7 h-7 mr-3 text-brand-orange" /> General Information
          </h2>
          <div className="prose max-w-none">
            <p>The National Campus Press Summit is an annual competition that aims to recognize the best in campus journalism. It is open to all student journalists and publications in the Philippines.</p>
            <p>The summit will be held virtually, with a series of lectures, workshops, and competitions designed to enhance the skills of the participants.</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.6, 0.6)}
          className="bg-white rounded-lg shadow-lg border border-slate-200 p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center">
            <Calendar className="w-7 h-7 mr-3 text-brand-orange" /> Important Dates
          </h2>
          <div className="prose max-w-none">
            <ul>
              <li><strong>Registration Period:</strong> October 1 to November 6, 2025</li>
              <li><strong>Lecture Series:</strong> November 8, 9, 15, 16, 2025</li>
              <li><strong>Competition Proper:</strong> November 22, 23, 29, 30, 2025</li>
              <li><strong>Awarding Ceremony:</strong> December 7, 2025</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.8, 0.6)}
          className="bg-white rounded-lg shadow-lg border border-slate-200 p-8"
        >
          <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center">
            <Users className="w-7 h-7 mr-3 text-brand-orange" /> Competition Categories
          </h2>
          <div className="prose max-w-none">
            <p>The competition is divided into several categories to cover the different aspects of campus journalism:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              <li className="flex items-start mb-4"><PenTool className="w-6 h-6 mr-3 text-brand-teal mt-1" /><div><strong>News Writing</strong><br/>The foundation of journalism.</div></li>
              <li className="flex items-start mb-4"><PenTool className="w-6 h-6 mr-3 text-brand-teal mt-1" /><div><strong>Feature Writing</strong><br/>In-depth stories that matter.</div></li>
              <li className="flex items-start mb-4"><PenTool className="w-6 h-6 mr-3 text-brand-teal mt-1" /><div><strong>Editorial Writing</strong><br/>The voice of the publication.</div></li>
              <li className="flex items-start mb-4"><Camera className="w-6 h-6 mr-3 text-brand-teal mt-1" /><div><strong>Photojournalism</strong><br/>Telling stories through images.</div></li>
              <li className="flex items-start mb-4"><Mic className="w-6 h-6 mr-3 text-brand-teal mt-1" /><div><strong>Radio Broadcasting & Scriptwriting</strong><br/>The power of audio storytelling.</div></li>
              <li className="flex items-start mb-4"><Film className="w-6 h-6 mr-3 text-brand-teal mt-1" /><div><strong>TV Broadcasting & Scriptwriting</strong><br/>Visual storytelling for the modern age.</div></li>
              <li className="flex items-start mb-4"><Tv className="w-6 h-6 mr-3 text-brand-teal mt-1" /><div><strong>Sports Writing</strong><br/>Capturing the drama of the game.</div></li>
            </ul>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Guidelines;

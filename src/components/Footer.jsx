import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Footer = () => {
  const handleSocialClick = (platform) => {
    toast({
      title: `🚧 ${platform} link coming soon!`,
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-10 md:py-12 px-4 bg-brand-dark text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex justify-center md:justify-start mb-4">
              <img src="https://i.postimg.cc/7Y0rb3Jh/journcamp.png" alt="Journcamp+ Logo" className="h-7 sm:h-8" />
            </div>
            <p className="text-gray-400 max-w-md mx-auto md:mx-0 text-xs sm:text-sm md:text-base">
              Building communities where facts prevail through comprehensive journalism education and training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['about', 'topics', 'FAQ'].map((link) => (
                <button
                  key={link}
                  onClick={() => handleNavClick(link)}
                  className="block mx-auto md:mx-0 capitalize text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                { icon: Facebook, name: 'Facebook' },
                { icon: Twitter, name: 'Twitter' },
                { icon: Instagram, name: 'Instagram' },
                { icon: Mail, name: 'Email' }
              ].map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  onClick={() => handleSocialClick(social.name)}
                  className="text-gray-400 hover:text-white hover:bg-white/10 w-8 h-8 sm:w-9 sm:h-9"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} Explained PH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
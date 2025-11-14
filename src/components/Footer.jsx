import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-6 sm:px-8 bg-brand-dark text-white" itemScope itemType="https://schema.org/WPFooter">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div className="md:col-span-2">
            <div className="flex justify-center md:justify-start mb-4">
              <img src="https://i.postimg.cc/PxX81hLt/Untitled-2.png" alt="Journcamp+ Logo" className="h-7 sm:h-8" />
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
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Stay Updated</h4>
            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-3">
              Follow the official social media platforms of JournCamp+
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/journcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base group"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400 group-hover:text-white transition-colors" />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com/journcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-xs sm:text-sm md:text-base group"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400 group-hover:text-white transition-colors" />
                <span>Instagram</span>
              </a>
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
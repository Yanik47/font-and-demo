import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 md:pt-16 md:pb-6 px-4">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
      
        {/* Information Block */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-center md:text-left">
            © 2024 Font-and. All rights reserved.
          </p>
          <p className="text-sm text-center md:text-left mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a> | 
            <a href="#" className="hover:underline ml-1">Terms of Service</a>
          </p>
        </div>

        {/* Social Block */}
        <div className="flex space-x-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="h-6 w-6 text-gray-700 hover:text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-gray-700 hover:text-pink-600" />
          </a>
          <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className="h-6 w-6 text-gray-700 hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-gray-700 hover:text-blue-700" />
          </a>
        </div>

        {/* Links Block */}
        <div className="flex flex-col items-center justify-between text-sm text-center">
            <div className='items-center text-sm text-center'>
            <a href="#" className="hover:underline">Support |</a> 
            <a href="#" className="hover:underline ml-1">Contact Us</a>
            </div>
          <div className='mt-2 text-center text-sm'>Font-and™ is a registered trademark.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


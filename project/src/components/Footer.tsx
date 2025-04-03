import React from 'react';
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +49 (0) 123 456789
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@et-neumann.de
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Musterstraße 123, 12345 Berlin
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <div className="space-y-2">
              <p>Mo - Fr: 08:00 - 17:00</p>
              <p>Sa: Nach Vereinbarung</p>
              <p>So: Geschlossen</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Media</h3>
            <a
              href="https://instagram.com/et_neumann"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Instagram className="h-5 w-5 mr-2" />
              @et_neumann
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Elektrotechnik Neumann. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                to="/impressum" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Datenschutzerklärung
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
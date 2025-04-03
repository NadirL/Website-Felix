import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, PenTool as Tool, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Elektrotechnik Neumann
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Ihr Experte für moderne Elektroinstallationen
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-200"
            >
              Kontaktieren Sie uns
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sicherheitstechnik</h3>
              <p className="text-gray-600">
                Moderne Sicherheitssysteme für Ihr Zuhause und Unternehmen
              </p>
            </div>
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Elektroinstallationen</h3>
              <p className="text-gray-600">
                Professionelle Installation elektrischer Anlagen
              </p>
            </div>
            <div className="text-center p-6">
              <Tool className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Wartung & Reparatur</h3>
              <p className="text-gray-600">
                Zuverlässiger Service und schnelle Reparaturen
              </p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Notdienst</h3>
              <p className="text-gray-600">
                Schnelle Hilfe bei elektrischen Notfällen
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für Ihr nächstes Projekt?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Kontaktieren Sie uns für eine kostenlose Beratung
          </p>
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors duration-200"
          >
            Jetzt anfragen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
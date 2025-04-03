import React from 'react';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Über uns</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seit über 20 Jahren sind wir Ihr zuverlässiger Partner für Elektrotechnik in der Region.
            Qualität, Zuverlässigkeit und Kundenzufriedenheit stehen bei uns an erster Stelle.
          </p>
        </div>

        {/* Company Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6">
            <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Qualität</h3>
            <p className="text-gray-600">
              Höchste Qualitätsstandards bei allen Arbeiten
            </p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Erfahrung</h3>
            <p className="text-gray-600">
              Über 20 Jahre Branchenerfahrung
            </p>
          </div>
          <div className="text-center p-6">
            <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Zuverlässigkeit</h3>
            <p className="text-gray-600">
              Termintreue und schneller Service
            </p>
          </div>
          <div className="text-center p-6">
            <ThumbsUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Kundenzufriedenheit</h3>
            <p className="text-gray-600">
              Über 1000 zufriedene Kunden
            </p>
          </div>
        </div>

        {/* Company History */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Unsere Geschichte</h2>
          <div className="space-y-6">
            <p className="text-gray-600">
              Elektrotechnik Neumann wurde 2024 von Meister Felix Neumann gegründet. 
              Was als kleiner Familienbetrieb begann, hat sich zu einem der führenden 
              Elektrotechnik-Unternehmen in der Region entwickelt.
            </p>
            <p className="text-gray-600">
              Heute beschäftigen wir ein Team von qualifizierten Fachkräften und bilden 
              regelmäßig Lehrlinge aus, um die hohe Qualität unserer Arbeit auch in 
              Zukunft sicherzustellen.
            </p>
            <p className="text-gray-600">
              Unser Erfolg basiert auf der Kombination aus traditionellem Handwerk und 
              modernster Technik. Wir sind stolz darauf, dass viele unserer ersten Kunden 
              uns bis heute treu geblieben sind.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Unser Team</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Unser qualifiziertes Team von Elektrotechnikern steht Ihnen mit Rat und Tat zur Seite.
            Regelmäßige Fortbildungen garantieren, dass wir immer auf dem neuesten Stand der Technik sind.
          </p>
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Unser Team"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
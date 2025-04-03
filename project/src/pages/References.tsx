import React from 'react';

const projects = [
  {
    title: 'Smart Home Installation',
    description: 'Vollständige Smart Home Integration für eine moderne Villa mit KNX-System.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
  },
  {
    title: 'Industrieanlage',
    description: 'Elektroinstallation und Wartung einer großen Produktionsanlage.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  },
  {
    title: 'Bürokomplex',
    description: 'Modernisierung der gesamten Elektroinstallation eines Bürogebäudes.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
  },
  {
    title: 'Sicherheitssysteme',
    description: 'Installation von Überwachungs- und Alarmsystemen für ein Einkaufszentrum.',
    image: 'https://images.unsplash.com/photo-1617897711385-ed53da029bf5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
  },
  {
    title: 'Energieeffizienz',
    description: 'Energieoptimierung und LED-Umrüstung einer Lagerhalle.',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
  },
  {
    title: 'Photovoltaikanlage',
    description: 'Installation einer 100kW Solaranlage auf einem Industriedach.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80'
  }
];

const References = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Referenzen</h1>
          <p className="text-xl text-gray-600">
            Entdecken Sie eine Auswahl unserer erfolgreich abgeschlossenen Projekte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default References;
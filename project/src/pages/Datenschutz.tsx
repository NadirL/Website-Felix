import React from 'react';

const Datenschutz = () => {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem 
            Impressum dieser Website entnehmen.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
            [Hosting-Anbieter]
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Kontaktformular</h2>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von 
            Anschlussfragen bei uns gespeichert.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies</h2>
          <p>
            Unsere Website verwendet keine Cookies für Analyse- und Trackingzwecke.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
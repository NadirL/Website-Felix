import React from 'react';

const Impressum = () => {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Impressum</h1>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Elektrotechnik Neumann<br />
            Musterstraße 123<br />
            12345 Berlin
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@et-neumann.de
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Vertreten durch</h2>
          <p>
            Felix Neumann<br />
            Elektromeister
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE XXX XXX XXX
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Elektromeister<br />
            Zuständige Kammer: Handwerkskammer Berlin<br />
            Verliehen durch: Bundesrepublik Deutschland
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
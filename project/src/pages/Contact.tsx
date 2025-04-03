import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-gray-600">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-medium">Telefon</h3>
                  <p className="text-gray-600">+49 (0) 123 456789</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-medium">E-Mail</h3>
                  <p className="text-gray-600">info@et-neumann.de</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-medium">Adresse</h3>
                  <p className="text-gray-600">Musterstraße 123<br />12345 Berlin</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-green-600 mr-4" />
                <div>
                  <h3 className="font-medium">Öffnungszeiten</h3>
                  <p className="text-gray-600">
                    Mo - Fr: 08:00 - 17:00<br />
                    Sa: Nach Vereinbarung<br />
                    So: Geschlossen
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <iframe
                title="Standort"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.654894262095!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMxJzEyLjAiTiAxM8KwMjQnMTcuOCJF!5e0!3m2!1sde!2sde!4v1635944044672!5m2!1sde!2sde"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Kontaktformular</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Nachricht
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md transition-colors duration-200"
              >
                {state.submitting ? 'Wird gesendet...' : 'Nachricht senden'}
              </button>

              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                  Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
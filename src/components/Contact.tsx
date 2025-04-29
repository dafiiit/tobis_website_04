import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-5">
          Kontakt
        </h2>
        <div className="text-center">
          <p className="text-gray-600">
            Mach mit im starken Team des Bürgermeisters - Anruf oder E-Mail genügt.
          </p>
          <p className="text-gray-600">
            Nicht vergessen: 14. September 2025 - Unseren Bürgermeister für Warburg wiederwählen.
          </p>
        </div>
        <br></br>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Schreiben Sie mir
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nachricht
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 btn-primary text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Kontaktdaten
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>unserbuergermeister@email.de</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+49 155 6177 8790</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    Klosterstraße<br />
                    34414 Warburg
                  </span>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Folgen Sie mir
              </h3>
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/tobischerf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/BuergermeisterHansestadtWarburg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/tobias-scherf-0a311986/?originalSubdomain=de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

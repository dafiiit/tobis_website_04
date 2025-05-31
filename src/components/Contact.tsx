import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.send(
        'service_1719vu6',
        'template_jcpuvr9',
        {
          name: formData.name,
          message: formData.message,
          sender_mail: formData.email,
          time: new Date().toLocaleString('de-DE'),
        },
        'qS1um0HqAtIReL-MS'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            {submitStatus.type && (
              <div
                className={`mb-4 p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 btn-primary text-white rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
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
                  <span>kontakt@tobias-scherf.de</span>
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
        <div className="text-center text-gray-600 mt-12">
          <p>&copy; 2025 Tobias Scherf. Alle Rechte vorbehalten.</p>
          <p>
            <a href="/impressum.html" className="hover:text-primary underline">
              Impressum
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Target, Users, Building2, Leaf } from 'lucide-react';

export default function Vision() {
  return (
    <section
      id="vision"
      className="relative min-h-screen flex items-center justify-end overflow-hidden"
      style={{
        backgroundImage: 'url("/Vision.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Darker Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-l from-gray-50/80 via-gray-900/20 to-transparent"
        style={{ zIndex: 1 }}
      />
      {/* Content Card */}
      <div className="relative z-10 w-full max-w-2xl mr-16">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-10 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-primary mb-5">
            Meine Vision für unsere Stadt
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Als kraftvoller Gestalter mit Blick auf die Vergangenheit und Tatkraft in der Gegenwart werde ich diese wunderbare Stadt und ihre Dörfer in die Zukunft führen.
          </p>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">
              Meine Vision für das Jahr 2036
            </h3>
            <p className="text-gray-600 italic">
              (das tausendjährige Stadtjubiläum der Hansestadt Warburg):
            </p>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Warburg und seine Dörfer präsentieren sich als <span className="font-semibold">lebendige, engagierte Gemeinschaften,</span>
              </p>
              <p className="text-lg">
                in denen Menschen für Menschen da sind,
              </p>
              <p className="text-lg">
                das Gemeinwohl gut organisiert wird
              </p>
              <p className="text-lg">
                und die städtische und dörfliche Infrastruktur das Leben lebenswert macht.
              </p>
              <p className="text-lg">
                Der Zusammenhalt der Menschen in Vereinen und im dörflichen Miteinander
              </p>
              <p className="text-lg">
                prägt das Leben positiv und schafft Miteinander und Herzlichkeit.
              </p>
              <p className="text-lg font-semibold">
                Hier kann und darf sich jeder Wohlfühlen.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: Fade-in Animation Keyframes */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>
    </section>
  );
}

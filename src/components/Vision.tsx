import React from 'react';
import { Target, Users, Building2, Leaf } from 'lucide-react';

export default function Vision() {
  const visions = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Gemeinsam stark',
      description:
        'Eine Stadt, in der alle Bürger gehört und einbezogen werden.',
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: 'Moderne Infrastruktur',
      description:
        'Investitionen in die Zukunft unserer Stadt und ihrer Einrichtungen.',
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: 'Nachhaltigkeit',
      description:
        'Klimaschutz und Umweltbewusstsein als zentrale Säulen unserer Politik.',
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: 'Klare Ziele',
      description:
        'Transparente und zielgerichtete Kommunalpolitik für alle Bürger.',
    },
  ];

  return (
    <section id="vision" className="py-24 bg-gray-50" style={{ position: 'relative', zIndex: 1 }}>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-primary mb-5">
        Meine Vision für unsere Stadt
      </h2>
      <p className="text-gray-600">
        Als kraftvoller Gestalter mit Blick auf die Vergangenheit und Tatkraft in der Gegenwart werde ich diese wunderbare Stadt und ihre Dörfer in die Zukunft führen.
      </p>
      <br></br>
      <div className="text-center">
        <p className="text-4l font-bold text-center text-primary ">
          Meine Vision für das Jahr 2036
        </p>
        <p className="text-gray-600">
          (das tausendjährliche Stadtjubiläum der Hansestadt Warburg):
        </p>
        <br></br>
        <p className="text-gray-600">
          Warburg und seine Dörfer präsentieren sich als <b>lebendige, engagierte Gemeinschaften, </b>       </p>
        <p className="text-gray-600">
          in denen Menschen für Menschen da sind,       </p>
        <p className="text-gray-600">
          das Gemeinwohl gut organisiert wird       </p>
        <p className="text-gray-600">
          und die städtische und dörfliche Infrastruktur das Leben lebenswert macht.       </p>
        <p className="text-gray-600">
          Der Zusammenhalt der Menschen in Vereinen und im dörflichen Miteinander       </p>
        <p className="text-gray-600">
          prägt das Leben positiv und schafft Miteinander und Herzlichkeit.       </p>
        <p className="text-gray-600">
          Hier kann und darf sich jeder Wohlfühlen.      </p>
      </div>
      <br></br>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {visions.map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-lg bg-white/80 rounded-xl p-6 shadow-lg hover:transform hover:-translate-y-1 transition-all"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

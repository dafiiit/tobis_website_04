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
    <section id="vision" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-16">
          Meine Vision für unsere Stadt
        </h2>

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

import React from 'react';
import { ShieldCheck, School, Heart, TreePine } from 'lucide-react';

const programs = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Sicherheit',
    description:
      'Verstärkung der Stadtpolizei und moderne Sicherheitskonzepte für alle Stadtteile.',
    image:
      'https://www.kulturland.org/medium/KKH_Warburg.jpg?m=6694&w=1918&h=1280&g=0',
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Bildung',
    description:
      'Modernisierung unserer Schulen und Ausbau der digitalen Infrastruktur.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Gesundheit',
    description:
      'Förderung lokaler Gesundheitseinrichtungen und präventiver Programme.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: 'Umwelt',
    description:
      'Ausbau erneuerbarer Energien und Schaffung neuer Grünflächen.',
    image: 'https://www.warburg.de/media/custom/3890_3_1_g.JPG?1678786438',
  },
];

export default function Program() {
  return (
    <section id="program" className="py-24">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-16">
          Viel zu tun
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 btn-primary rounded-lg text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

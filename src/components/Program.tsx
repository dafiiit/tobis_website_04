import React, { useState } from 'react';
import { ShieldCheck, School, Heart, TreePine } from 'lucide-react';
import { newsData } from '../data/newsData';
import { NewsItem } from '../types/news';

const programs = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Stadt  und Dörfer',
    description:
      'Klarer Kurs für eine positive Stadt- und Dorfentwicklung in Warburg',
    image:
      '/images_program/warburg.jpg',
    actions: [
      'Neues Wohnquartier planen',
      'Modernisierung der Altbauten',
      'Ausbau von Freizeitangeboten',
    ],
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: 'Wirtschaft und Arbeitsplätze',
    description:
      'Klarer Kurs für eine starke Wirtschaft und sichere Arbeitsplätze in Warburg',
    image:
      '/images_program/Kinder.JPG',
    actions: [
      'Förderung erneuerbarer Energien ausbauen',
      'Nachhaltige Landwirtschaft unterstützen',
      'Schaffung neuer Grünflächen',
    ],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Sicherheit und Ordnung',
    description:
      'Klarer Kurs für Sicherheit und Ordnung in Warburg, damit sich die Menschen wohlfühlen',
    image:
      '/images_program/image of books.jpg',
    actions: [
      'Effizientes Haushaltsmanagement',
      'Gezielte Investitionen in Infrastruktur',
      'Transparente Finanzplanung',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Beteiligung und Miteinander',
    description:
      'Klarer Kurs für Beteiligung und Miteinander der Menschen in Warburg',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Kultur, Sport und Ehrenamt',
    description:
      'Klarer Kurs für Vielfalt in Warburger Kultur, Sport und Ehrenamt',
    image:
      '/images_program/Schützenverein.png',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Jugend, Familien und Senioren',
    description:
      'Klarer Kurs im freundlichen Warburg für Jugend, Familien und Senioren',
    image:
      '/images_program/Kinder.JPG',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Energie, Klima- und Naturschutz',
    description:
      'Klarer Kurs für Energie, Klima- und Naturschutz in einem umweltgerechten Warburg',
    image:
      '/images_program/Erde.jpg',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Tourismus und Mobilität',
    description:
      'Klarer Kurs für modernen Tourismus und Mobilität in Warburg',
    image:
      '/images_program/Greenway2work.PNG',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Bürgerservice und moderne Verwaltung',
    description:
      'Klarer Kurs für modernen Bürgerservice und Digitale Verwaltung in Warburg',
    image:
      '/images_program/Coins Investment.jpg',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Finanzen und Fördergelder',
    description:
      'Klarer Kurs für zukunftssichere Warburger Finanzen',
    image:
      '/images_program/Coins Investment.jpg',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
  },
];

function ProgramDetail({
  program,
  onBack,
  onNewsSelect,
}: {
  program: typeof programs[number];
  onBack: () => void;
  onNewsSelect: (newsId: number) => void;
}) {

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4"
      style={{ zIndex: 1000 }}
    >
      <div className="bg-white rounded-xl overflow-hidden max-w-screen-md w-full">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 btn-primary rounded-lg text-white">
              {program.icon}
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              {program.title}
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">Was zu tun ist</h4>
              <ul className="list-disc list-inside text-gray-600">
                {program.actions.map((action, index) => (
                  <li key={index}>{action}</li>
                ))}
              </ul>
            </div>
          </div>
          <button onClick={onBack} className="mt-6 btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Program({
  onNewsSelect,
}: {
  onNewsSelect: (newsId: number) => void;
}) {
  const [selectedProgram, setSelectedProgram] =
    useState<typeof programs[number] | null>(null);

  const handleNewsSelect = (newsId: number) => {
    onNewsSelect(newsId);
    setSelectedProgram(null);
  };

  return (
    <section id="program" className="py-24">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">
          Wahlprogramm
        </h2>
        <h1 className="text-lg font-semibold text-center text-gray-700 mb-8">
          Kernforderungen meines Wahlprogramms:
        </h1>
        {selectedProgram ? (
          <ProgramDetail
            program={selectedProgram}
            onBack={() => setSelectedProgram(null)}
            onNewsSelect={handleNewsSelect}
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden cursor-pointer"
                onClick={(event) => {
                  event.preventDefault();
                  setSelectedProgram(item);
                }}
              >
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
        )}
      </div>
    </section>
  );
}
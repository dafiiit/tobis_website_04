import React, { useState } from 'react';
import { ShieldCheck, School, Heart, TreePine } from 'lucide-react';
import { newsData } from '../data/newsData';
import { NewsItem } from '../types/news';

const programs = [
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Stadtentwicklung & Wohnraum',
    description:
      'Mehr bezahlbaren Wohnraum, nachhaltige Stadtentwicklung und attraktive Freizeitangebote.',
    image:
      'https://www.kulturland.org/medium/KKH_Warburg.jpg?m=6694&w=1918&h=1280&g=0',
    actions: [
      'Neues Wohnquartier planen',
      'Modernisierung der Altbauten',
      'Ausbau von Freizeitangeboten',
    ],
    relatedNews: [
      'Erster Spatenstich für das neue Waldbad in Warburg',
      'Warburg plant Wohnraum der Zukunft',
    ],
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: 'Nachhaltigkeit & Energie',
    description:
      'Ausbau erneuerbarer Energien, nachhaltige Landwirtschaft und grüne Infrastruktur.',
    image:
      'https://www.warburg.de/media/custom/3890_3_1_g.JPG?1678786438',
    actions: [
      'Förderung erneuerbarer Energien ausbauen',
      'Nachhaltige Landwirtschaft unterstützen',
      'Schaffung neuer Grünflächen',
    ],
    relatedNews: [
      'Neue Solaranlagen installiert',
      'Austausch mit der Landwirtschaft in Warburg',
    ],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Finanzen & Infrastruktur',
    description:
      'Kluges Haushaltsmanagement und Investitionen in Schlüsselprojekte wie das Waldbad.',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    actions: [
      'Effizientes Haushaltsmanagement',
      'Gezielte Investitionen in Infrastruktur',
      'Transparente Finanzplanung',
    ],
    relatedNews: [
      'Warburg plant trotz Defizit weitere Investitionen',
      'Sebastian Hoppe feiert 25-jähriges Dienstjubiläum',
    ],
  },
  {
    icon: <School className="w-6 h-6" />,
    title: 'Gesellschaft & Demokratie',
    description:
      'Engagement für eine offene Gesellschaft, Förderung des Ehrenamts und klare Haltung gegen Extremismus.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    actions: [
      'Stärkung bürgerlicher Partizipation',
      'Förderung von Ehrenamt und Vielfalt',
      'Transparente Verwaltung',
    ],
    relatedNews: ['Warburg demonstriert für Demokratie'],
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
  const relatedNews = newsData.filter((newsItem) =>
    program.relatedNews.includes(newsItem.title)
  );

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
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Was ich schon getan habe
              </h4>
              {relatedNews.length > 0 ? (
                <ul className="text-gray-600">
                  {relatedNews.map((newsItem) => (
                    <li key={newsItem.id} className="mb-2">
                      <button
                        onClick={() => onNewsSelect(newsItem.id)}
                        className="text-primary hover:underline"
                      >
                        {newsItem.title}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">
                  Keine passenden Nachrichten gefunden.
                </p>
              )}
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
        <h2 className="text-3xl font-bold text-center text-primary mb-16">
          Viel zu tun
        </h2>
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
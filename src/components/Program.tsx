import React, { useState } from 'react';
import {
  ShieldCheck,
  School,
  Heart,
  TreePine,
  Home,
  Briefcase,
  Users,
  Palette,
  Trophy,
  HeartHandshake,
  Baby,
  Accessibility,
  Leaf,
  Wind,
  Map,
  Bike,
  Server,
  Banknote,
  Building,
  Factory,
  Handshake,
  PersonStanding,
  Zap,
  FileText,
  PiggyBank,
  Landmark
} from 'lucide-react';

const programs = [
  {
    icon: <Home className="w-6 h-6" />,
    title: 'Stadt  und Dörfer',
    description:
      'Klarer Kurs für eine positive Stadt- und Dorfentwicklung in Warburg',
    image:
      '/images_program/warburg.jpg',
    details: `
      ### „Dörfer & Stadt stärken – Heimat wahren.“
      Warburg ist ein starkes Mittelzentrum mit einer lebendigen Innenstadt und 15 engagierten Dörfern, die jeweils ihre eigene Identität haben. Als Bürgermeister ist es mir wichtig, Stadt und Dörfer gleichermaßen zu fördern: mit Treffpunkten, Wohnraum, lebendigen Ortskernen, einer attraktiven Innenstadt, dem neuen Quartier auf der Laurentiushöhe und der Entwicklung des ehemaligen Zuckerfabrikgeländes. So gestalten wir unsere Heimat aktiv und zukunftsfähig – gemeinsam mit den Menschen vor Ort.
    `,
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Wirtschaft und Arbeitsplätze',
    description:
      'Klarer Kurs für eine starke Wirtschaft und sichere Arbeitsplätze in Warburg',
    image:
      '/images_program/Haushalt.jpg',
    details: `
      ### „Infrastruktur stärken und Wirtschaft voranbringen.“
      Unsere Stadt lebt von den Menschen, die hier arbeiten, Unternehmen führen oder Ausbildungsplätze schaffen. Ich als Bürgermeister setze mich dafür ein, dass Warburg ein starker Wirtschaftsstandort bleibt – mit guten Rahmenbedingungen für Unternehmen, Handwerk, Einzelhandel und Landwirtschaft. Über unseren Wirtschaftsförderer stehen wir als verlässliche Ansprechpartner zur Seite, auch bei individuellen Weiterentwicklungswünschen.
      Wichtige Investitionen fließen in unsere Infrastruktur – etwa in Straßen, Bildungseinrichtungen und die Verknüpfung von Schule und Beruf –, um nachhaltiges Wirtschaften zu ermöglichen und den Sanierungsstau schrittweise abzubauen.
    `,
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Sicherheit und Ordnung',
    description:
      'Klarer Kurs für Sicherheit und Ordnung in Warburg, damit sich die Menschen wohlfühlen',
    image:
      '/images_program/image of books.jpg',
    details: `
      ### „Gut leben und sicher fühlen.“
      Sicherheit und Sauberkeit sind die Basis für ein lebenswertes Warburg – in der Stadt wie in den Dörfern. Ich setze mich für sichtbare Präsenz, gut beleuchtete öffentliche Räume und eine saubere Umgebung ein. Die von mir neu belebte Ordnungspartnerschaft mit der Polizei stärkt Prävention und Aufklärung – besonders für ältere Menschen, etwa bei Trickbetrug oder Einbruchschutz.
      Mit Aktionen wie Sauberhaftes Warburg und dem Tag der Sauberkeit rücken wir unsere Stadt ins Bewusstsein und stärken das Gemeinschaftsgefühl.
    `,
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Beteiligung und Miteinander',
    description:
      'Klarer Kurs für Beteiligung und Miteinander der Menschen in Warburg',
    image:
      '/images_program/DemokratieLeben.jpg',
    details: `
      ### „Demokratie, Vielfalt und Toleranz leben und erleben.“
      Warburg steht für Miteinander, Offenheit und Beteiligung – und das haben wir gemeinsam sichtbar gemacht: durch bunte Feste, demokratische Aktionen und starke Partnerschaften mit Vereinen, Schulen und Unternehmen.
      Jugendliche werden in Warburg gehört – der erfolgreiche Skatepark in der Diemelaue zeigt, was Beteiligung bewirken kann.
      Ich stehe für eine Politik des offenen Dialogs statt Hinterzimmer Entscheidungen – Vielfalt an Meinungen gehört in den Stadtrat, genau wie die Stimmen der jungen Generation.
    `,
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Kultur, Sport und Ehrenamt',
    description:
      'Klarer Kurs für Vielfalt in Warburger Kultur, Sport und Ehrenamt',
    image:
      '/images_program/Schuetzenfest.jpeg',
    details: `
      ### „Engagement würdigen – Ehrenamt stärken.“
      Menschen und Vereine sind das Rückgrat unserer Stadt. Ich unterstütze ihr Engagement aktiv – sei es im Sport, in den Dörfern oder bei der Jugendarbeit.
      Mit dem neuen Waldbad und Rekordinvestitionen von über 25 Mio. Euro haben wir gemeinsam Großes für unsere Gemeinschaft erreicht.
      Starke Dörfer und gelebtes Ehrenamt sind der Schlüssel für eine lebenswerte Heimat – und verdienen Anerkennung und Unterstützung.
      Kultur ist mir wichtig: Ob Musik, Theater, Heimatpflege oder kreative Projekte – ich fördere und unterstütze kulturelle Aktivitäten in all ihrer Vielfalt.
    `,
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: 'Jugend, Familien und Senioren',
    description:
      'Klarer Kurs im freundlichen Warburg für Jugend, Familien und Senioren',
    image:
      '/images_program/Kinder.JPG',
    details: `
      ### „Jung und Alt – gemeinsam gut leben.“
      Warburg ist für mich Heimat – für alle Generationen. Ich möchte, dass junge Menschen hier ihre Zukunft sehen, Familien sich wohlfühlen und Senioren ihren Lebensabend in vertrauter Umgebung verbringen können.
      Gute Kitas, starke Schulen, wohnortnahe medizinische Versorgung und soziale Angebote gehören für mich ebenso dazu wie ein herzliches Miteinander – auch für Menschen mit Einschränkungen, etwa im Laurentiusheim oder beim CWW.
    `,
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Energie, Klima- und Naturschutz',
    description:
      'Klarer Kurs für Energie, Klima- und Naturschutz in einem umweltgerechten Warburg',
    image:
      '/images_program/Erde.jpg',
    details: `
      ### „Umwelt schützen – klimaneutral handeln.“
      Unsere schöne Natur ist Lebensqualität und Verantwortung zugleich. Deshalb habe ich mich in den vergangenen Jahren stark für Umwelt- und Klimaschutz eingesetzt – mit dem Ziel, Warburg klimaneutral zu gestalten.
      Mit dem integrierten Klimaschutzkonzept und den starken Stadtwerken an unserer Seite treiben wir die Energiewende vor Ort voran. Sie sichern saubere Energie, Wasser, Mobilität und gepflegte Grünflächen – für eine nachhaltige Zukunft in unserer Heimat.
      Mir als Bürgermeister ist wichtig, dass wir beim Ausbau von Windenergie und Photovoltaik Verantwortung übernehmen: Die Beeinträchtigung des Natur- und Landschaftsbildes soll so gering wie möglich bleiben, und entstehende Nachteile für Bürgerinnen und Bürger müssen durch die Projektierer ausgeglichen werden.
    `,
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'Tourismus und Mobilität',
    description:
      'Klarer Kurs für modernen Tourismus und Mobilität in Warburg',
    image:
      '/images_program/Greenway2work.PNG',
    details: `
      ### „Menschen bewegen – mit Mobilität und Tourismus.“
      Warburg ist aktiv, lebendig und gastfreundlich – das zeigt sich in der Mobilität genauso wie im Tourismus. Noch nie wurden so viele Radwege gebaut und gefördert wie in den vergangenen Jahren – das stärkt die Lebensqualität und macht unsere Stadt für Gäste noch attraktiver.
      Die steigenden Übernachtungszahlen zeigen: Warburg ist ein beliebtes Ziel. Ich als Bürgermeister werde gemeinsam mit der Stadtverwaltung weiterhin dafür sorgen, dass wir diese Stärken gezielt ausbauen und neue Impulse für Mobilität und Tourismus setzen.
    `,
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: 'Bürgerservice und moderne Verwaltung',
    description:
      'Klarer Kurs für modernen Bürgerservice und Digitale Verwaltung in Warburg',
    image:
      '/images_program/Digitales Verwaltung.JPEG',
    details: `
      ### „Bürgernah handeln – Verwaltung digital und modern.“
      Mir als Bürgermeister ist wichtig, dass Warburg eine serviceorientierte, verständliche und freundliche Stadtverwaltung hat. Bürger sollen sich gut betreut fühlen, Anregungen ernst genommen und Anliegen zügig bearbeitet werden.
      Gleichzeitig werde ich den eingeschlagenen Weg der Digitalisierung weiter vorantreiben – mit modernen, ganzheitlich gedachten Prozessen für eine effiziente und bürgernahe Verwaltung.
    `,
  },
  {
    icon: <Banknote className="w-6 h-6" />,
    title: 'Finanzen und Fördergelder',
    description:
      'Klarer Kurs für zukunftssichere Warburger Finanzen',
    image:
      '/images_program/Wirtschaft Arbeit.PNG',
    details: `
      ### „Fördergelder einwerben – sinnvoll investieren.“
      Gesunde Finanzen sind die Grundlage für eine starke und lebenswerte Stadt. Auch wenn Kommunen unter steigenden Belastungen leiden, richte ich als Bürgermeister den Blick gezielt auf Förderprogramme, um finanzielle Spielräume zu schaffen.
      Ich betreibe eine Haushaltspolitik mit Augenmaß – ohne kaputtsparen, sondern mit klugen Investitionen in Straßen, Schulen, Bildung, Sport und Verwaltung.
      Ein großer Erfolg: Die Rekord-Fördersumme von 16,1 Millionen Euro für das neue Waldbad – gemeinsam mit meinem Team für Warburg erreicht. Und genauso will ich weiterarbeiten: vorausschauend, verantwortungsvoll und investitionsbereit.
    `,
  },
];

// Define a type for the program item based on the data structure
type ProgramItem = {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  details: string; // Changed from actions: string[]
};

function ProgramDetail({
  program,
  onBack,
  onNewsSelect, // Keeping this prop in case it's needed later, though unused now
}: {
  program: ProgramItem; // Use the defined type
  onBack: () => void;
  onNewsSelect: (newsId: number) => void;
}) {

  // Simple Markdown to HTML conversion (replace ###, **, newlines)
  // NOTE: This is a basic implementation. For more complex markdown, consider a library like 'marked' or 'react-markdown'.
  // WARNING: Using dangerouslySetInnerHTML requires trusting the source of 'program.details'.
  // Since it's defined directly in this file, it's relatively safe here.
  const formattedDetails = program.details
    .trim()
    .replace(/### (.*)/g, '<h4 class="text-lg font-semibold mt-4 mb-2">$1</h4>') // ### headers
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **bold** text
    .replace(/\n/g, '<br />'); // newlines

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 overflow-y-auto" // Added overflow-y-auto
      style={{ zIndex: 1000 }}
    >
      <div className="bg-white rounded-xl overflow-hidden max-w-screen-md w-full my-8"> {/* Added margin-y */}
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 btn-primary rounded-lg text-white">
              {program.icon}
            </div>
            <h3 className="text-2xl font-semibold text-primary">
              {program.title}
            </h3>
          </div>
          {/* Removed grid layout, now displaying details directly */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Details zum Programmpunkt</h4>
            {/* Render the formatted HTML */}
            <div
              className="text-gray-600 prose max-w-none" // Using prose for basic styling
              dangerouslySetInnerHTML={{ __html: formattedDetails }}
            />
          </div>
          <button onClick={onBack} className="mt-6 btn-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2" // Added styling for button icon
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Zurück zur Übersicht
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
    useState<ProgramItem | null>(null); // Use the defined type

  // Removed handleNewsSelect as onNewsSelect is not used in ProgramDetail anymore
  // const handleNewsSelect = (newsId: number) => {
  //   onNewsSelect(newsId);
  //   setSelectedProgram(null);
  // };

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
            onNewsSelect={onNewsSelect} // Pass down onNewsSelect even if unused in ProgramDetail for now
          />
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((item, index) => (
              <div
                key={index}
                className="glass rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" // Added hover effect
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
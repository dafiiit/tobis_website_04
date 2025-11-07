import { useState } from 'react';
import { FileText, ExternalLink, PlayCircle, Globe } from 'lucide-react';

export default function ThankYou() {
    const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

    // PDF file names
    const pdfFiles = {
        wahlprospekt: '/files/BroschurScherf.pdf',
        kaffee: '/files/Kaffee-Flyer-Gesamt PDF.pdf'
    };

    // Helper function to encode file paths
    const getPdfUrl = (filename: string) => {
        return filename.split('/').map((part, index) => 
            index === 0 ? part : encodeURIComponent(part)
        ).join('/');
    };

    // Helper function to check if file is a video
    const isVideo = (file: string) => {
        return file.toLowerCase().endsWith('.mov') || 
               file.toLowerCase().endsWith('.mp4') || 
               file.toLowerCase().endsWith('.webm') || 
               file.toLowerCase().endsWith('.ogg');
    };

    // List of media from winner_images folder (video first, then images)
    const winnerMedia = [
        '/winner_images/video.mov', // Video first
        '/winner_images/449c708c-080e-48d9-9c73-0772f5c076be.jpeg',
        '/winner_images/84150ce2-2cda-442a-ade3-ed3ef51b9b21.jpeg',
        '/winner_images/93620a6a-7230-4c39-be8b-f92ee909b5e9.jpeg',
        '/winner_images/cc72d813-dddf-4671-89d4-471f15b556a0.jpeg',
        '/winner_images/IMG_0088.jpeg',
        '/winner_images/IMG_0092.jpeg',
        '/winner_images/IMG_0105.jpeg',
        '/winner_images/IMG_0137.jpeg',
        '/winner_images/IMG_5277.jpeg',
        '/winner_images/IMG_5280.jpeg',
    ];

    return (
        <section className="py-24 bg-gray-50" style={{ position: 'relative' }}>
            <div id="thankyou" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-5">
                    Vielen Dank für Ihr Vertrauen
                </h2>
                
                <div className="glass rounded-xl p-8 mb-8">
                    <div className="space-y-6">
                        <p className="text-gray-600">
                            Am 14. September 2025 haben Sie, die Bürgerinnen und Bürger der Hansestadt Warburg, mir erneut Ihr Vertrauen geschenkt. Mit einem herausragenden Ergebnis von 55,33 % der Stimmen konnte ich mich bei vier Kandidierenden durchsetzen. Dafür danke ich Ihnen allen von Herzen. Mein Dank gilt auch jenen, die mich unterstützt haben, an mich geglaubt haben und mich mit Rat und Tat begleitet haben.
                        </p>
                        <p className="text-gray-600">
                            Am 01. November 2025 beginnt meine zweite Amtszeit als Bürgermeister – und ich freue mich sehr auf die kommenden fünf Jahre im Einsatz für unsere Stadt Warburg, die Dörfer und ihre Menschen. Gemeinsam möchte ich mit Ihnen die Zukunft unserer Hansestadt gestalten – mit Offenheit, Tatkraft und Gemeinschaft.
                        </p>
                        
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold text-primary mb-4">
                                Mehr zu den Wahlergebnissen finden Sie hier:
                            </h3>
                            <div className="space-y-3">
                                <a
                                    href="https://wahlen.regioit.de/2/km2025/05762036/praesentation/ergebnis.html?wahl_id=246&stimmentyp=0&id=ebene_3_id_83"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                                >
                                    <Globe className="w-5 h-5" />
                                    <span>Ergebnisse Bürgermeisterwahl von Tobias Scherf an 14.09.2025</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://wahlen.regioit.de/2/km2025/05762036/praesentation/uebersicht.html?wahl_id=246&stimmentyp=0&id=ebene_6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                                >
                                    <Globe className="w-5 h-5" />
                                    <span>Bürgermeisterwahl nach Stimmbezirken</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <p className="text-gray-600 mt-6">
                            Noch einmal: Vielen, vielen Dank für Ihr Vertrauen. Ich freue mich darauf, für Warburg da zu sein.
                        </p>
                        <p className="text-gray-600 font-semibold">
                            Mit herzlichen Grüßen
                        </p>
                        <p className="text-gray-600 font-semibold">
                            Ihr Tobias Scherf
                        </p>
                    </div>
                </div>

                <div className="glass rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                        Meine Wahlflyer finden Sie hier
                    </h3>
                    <div className="space-y-3">
                        <a
                            href={getPdfUrl(pdfFiles.wahlprospekt)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            <span>Wahlprospekt Tobias Scherf</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                        <a
                            href={getPdfUrl(pdfFiles.kaffee)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                        >
                            <FileText className="w-5 h-5" />
                            <span>Auf einen Kaffee mit Tobias Scherf</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                <div className="glass rounded-xl p-8 mb-8">
                    <h3 className="text-xl font-semibold text-primary mb-4">
                        Alle Videos zur Wahl finden Sie unter:
                    </h3>
                    <a
                        href="https://www.youtube.com/@tobiasscherf1409"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                    >
                        <PlayCircle className="w-5 h-5" />
                        <span>Youtube-Kanal Tobias Scherf</span>
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <div className="glass rounded-xl p-8">
                    <h3 className="text-2xl font-semibold text-primary mb-6">
                        Bildergalerie
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {winnerMedia.map((media, index) => {
                            const isVideoFile = isVideo(media);
                            return (
                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 group"
                                    onClick={() => setSelectedMedia(media)}
                                >
                                    {isVideoFile ? (
                                        <div className="relative w-full h-48 bg-gray-800 flex items-center justify-center">
                                            <video
                                                src={media}
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                                                muted
                                                playsInline
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <PlayCircle className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        </div>
                                    ) : (
                                        <img
                                            src={media}
                                            alt={`Wahlbild ${index + 1}`}
                                            className="w-full h-48 object-cover"
                                        />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Media Modal */}
                {selectedMedia && (
                    <div
                        className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <div className="relative max-w-4xl max-h-full w-full">
                            <button
                                onClick={() => setSelectedMedia(null)}
                                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors z-10"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                            {isVideo(selectedMedia) ? (
                                <video
                                    src={selectedMedia}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-[90vh] rounded-lg"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Ihr Browser unterstützt das Video-Tag nicht.
                                </video>
                            ) : (
                                <img
                                    src={selectedMedia}
                                    alt="Große Ansicht"
                                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}


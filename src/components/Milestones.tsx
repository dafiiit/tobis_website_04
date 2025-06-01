import React, { useState } from 'react';
import { newsData } from '../data/newsData'; // Import newsData

// Define a type for the milestone item based on the newsData structure
type MilestoneItem = {
    id: number;
    title: string;
    description: string;
    image: string;
    content: string; // HTML content
};

function MilestoneDetail({
    milestone,
    onBack,
}: {
    milestone: MilestoneItem; // Use the defined type
    onBack: () => void;
}) {
    // The content is already HTML, so we can use dangerouslySetInnerHTML
    // WARNING: Ensure the HTML content in newsData is safe and trusted.
    return (
        <div
            className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4" // Main overlay, ensures padding around the modal
            style={{ zIndex: 1000 }}
        >
            <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-screen-md w-full flex flex-col" style={{ maxHeight: 'calc(100vh - 4rem)' }}> {/* Modal box: flex column, max height allows for some margin */}
                {/* Modal Header */}
                <div className="p-4 sm:p-6 border-b border-gray-200">
                    <h3 className="text-xl sm:text-2xl font-semibold text-primary">
                        {milestone.title}
                    </h3>
                </div>

                {/* Modal Body (Scrollable) */}
                <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
                    <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">Details zum Meilenstein</h4>
                    <div
                        className="text-gray-700 prose prose-sm sm:prose-base max-w-none" // Responsive prose styling
                        dangerouslySetInnerHTML={{ __html: milestone.content }}
                    />
                </div>

                {/* Modal Footer */}
                <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50">
                    <button
                        onClick={onBack}
                        className="w-full sm:w-auto flex items-center justify-center px-4 py-2 btn-primary rounded-md text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500" // Enhanced button styling
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5 sm:w-6 sm:h-6 mr-2"
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

export default function Milestones() {
    const [selectedMilestone, setSelectedMilestone] =
        useState<MilestoneItem | null>(null);
    const [visibleItems, setVisibleItems] = useState(6); // Show 6 items initially (3x2)
    const itemsPerRow = 3; // Corresponds to lg:grid-cols-3

    const visibleMilestones = newsData.slice(0, visibleItems);
    const hasMoreItems = visibleItems < newsData.length;

    const handleShowMore = () => {
        setVisibleItems(prev => Math.min(prev + 6, newsData.length)); // Show 6 more items
    };

    const handleShowLess = () => {
        setVisibleItems(6); // Reset to initial number of items
    };

    return (
        <section id="milestones" className="py-24 bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed to max-w-screen-xl */}
                <h2 className="text-3xl font-bold text-center text-primary mb-8">
                    Meilensteine meiner Amtszeit
                </h2>
                <h1 className="text-lg font-semibold text-center text-gray-700 mb-12">
                    Wichtige Erfolge und Projekte seit 2020:
                </h1>
                {selectedMilestone ? (
                    <MilestoneDetail
                        milestone={selectedMilestone}
                        onBack={() => setSelectedMilestone(null)}
                    />
                ) : (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Added lg:grid-cols-3 */}
                            {visibleMilestones.map((item) => (
                                <div
                                    key={item.id}
                                    className="glass rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setSelectedMilestone(item);
                                    }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-primary mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Show More / Show Less Buttons */}
                        <div className="text-center mt-12">
                            {hasMoreItems ? (
                                <button
                                    onClick={handleShowMore}
                                    className="inline-block px-8 py-3 btn-secondary text-white rounded-full hover:btn-secondary:hover transition-colors"
                                >
                                    Mehr anzeigen
                                </button>
                            ) : visibleItems > itemsPerRow && (
                                <button
                                    onClick={handleShowLess}
                                    className="inline-block px-8 py-3 btn-secondary text-white rounded-full hover:btn-secondary:hover transition-colors"
                                >
                                    Weniger anzeigen
                                </button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
} 
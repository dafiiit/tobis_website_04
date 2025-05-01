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
            className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 overflow-y-auto"
            style={{ zIndex: 1000 }}
        >
            <div className="bg-white rounded-xl overflow-hidden max-w-screen-md w-full my-8">
                <div className="p-6">
                    <div className="mb-4">
                        {/* Use a placeholder or generic icon, or decide if icons are needed */}
                        {/* <div className="p-2 btn-primary rounded-lg text-white inline-block mr-3">
               <Info className="w-6 h-6" /> // Example using a generic icon
             </div> */}
                        <h3 className="text-2xl font-semibold text-primary inline-block align-middle">
                            {milestone.title}
                        </h3>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-2">Details zum Meilenstein</h4>
                        <div
                            className="text-gray-600 prose max-w-none" // Using prose for basic styling
                            dangerouslySetInnerHTML={{ __html: milestone.content }}
                        />
                    </div>
                    <button onClick={onBack} className="mt-6 btn-primary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 inline-block mr-2"
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
    const [visibleItems, setVisibleItems] = useState(2); // Show 4 items initially (2 rows on md)
    const itemsPerRow = 2; // Corresponds to md:grid-cols-2

    const visibleMilestones = newsData.slice(0, visibleItems);
    const hasMoreItems = visibleItems < newsData.length;

    const handleShowMore = () => {
        setVisibleItems(prev => Math.min(prev + itemsPerRow, newsData.length));
    };

    const handleShowLess = () => {
        setVisibleItems(itemsPerRow); // Reset to initial number of items
    };

    return (
        <section id="milestones" className="py-24 bg-gray-50"> {/* Added background color */}
            <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8"> {/* Changed to max-w-screen-md */}
                <h2 className="text-3xl font-bold text-center text-primary mb-8">
                    Meilensteine meiner Amtszeit
                </h2>
                <h1 className="text-lg font-semibold text-center text-gray-700 mb-12"> {/* Increased bottom margin */}
                    Wichtige Erfolge und Projekte seit 2020:
                </h1>
                {selectedMilestone ? (
                    <MilestoneDetail
                        milestone={selectedMilestone}
                        onBack={() => setSelectedMilestone(null)}
                    />
                ) : (
                    <> {/* Added Fragment */}
                        <div className="grid md:grid-cols-2 gap-8"> {/* Changed to 2 columns on medium screens */}
                            {visibleMilestones.map((item) => (
                                <div
                                    key={item.id}
                                    className="glass rounded-xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105" // Removed flex flex-col
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
                                    <div className="p-6"> {/* Removed flex flex-col flex-grow */}
                                        {/* Removed Icon display as newsData doesn't have icons */}
                                        <h3 className="text-xl font-semibold text-primary mb-4"> {/* Added mb-4 */}
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">{item.description}</p> {/* Removed flex-grow */}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Show More / Show Less Buttons */}
                        <div className="text-center mt-12"> {/* Increased top margin */}
                            {hasMoreItems ? (
                                <button
                                    onClick={handleShowMore}
                                    className="inline-block px-8 py-3 btn-secondary text-white rounded-full hover:btn-secondary:hover transition-colors"
                                >
                                    Mehr anzeigen
                                </button>
                            ) : visibleItems > itemsPerRow && ( // Show "Weniger anzeigen" only if more than initial items are shown
                                <button
                                    onClick={handleShowLess}
                                    className="inline-block px-8 py-3 btn-secondary text-white rounded-full hover:btn-secondary:hover transition-colors"
                                >
                                    Weniger anzeigen
                                </button>
                            )}
                        </div>
                    </> /* End Fragment */
                )}
            </div>
        </section>
    );
} 
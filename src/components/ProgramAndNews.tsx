import React, { useState } from 'react';
import Program from './Program';
import News from './News';

export default function ProgramAndNews() {
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  const handleNewsSelect = (newsId: number) => {
    // Reset the state before setting new ID to ensure it triggers even if same article is selected
    setSelectedNewsId(null);
    setTimeout(() => {
      setSelectedNewsId(newsId);
    }, 0);
  };

  return (
    <>
      <News selectedNewsId={selectedNewsId} />
      <Program onNewsSelect={handleNewsSelect} />
    </>
  );
}

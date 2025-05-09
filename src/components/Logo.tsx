import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src="/ModernesWarburgLogo.png" alt="Warburg Logo" className="w-16 h-16" />
      <span className="text-xl font-bold text-black">Tobias Scherf</span>
    </div>
  );
}

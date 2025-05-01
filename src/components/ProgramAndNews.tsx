import React from 'react';
import Program from './Program';
import Milestones from './Milestones';

export default function ProgramAndNews() {
  return (
    <>
      <Milestones />
      <Program onNewsSelect={() => { }} />
    </>
  );
}

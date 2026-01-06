
import React from 'react';
import WhoWeAre from './WhoWeAre';
import Testimonials from './Testimonials';

const HeroCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl">
      <WhoWeAre />
      <Testimonials />
    </div>
  );
};

export default HeroCards;

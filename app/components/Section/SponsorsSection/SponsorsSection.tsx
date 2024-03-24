'use client';

import Image from 'next/image';

const sponsors = [
  '/images/sponsors/krzywa.png',
  '/images/sponsors/mahle.png',
  '/images/sponsors/manus.png',
  '/images/sponsors/pwr.png',
  '/images/sponsors/siemens.png',
  '/images/sponsors/wydzial_mechaniczny.png',
];

const SponsorsSection = () => {
  return (
    <div className="bg-neutral-200 relative overflow-hidden flex items-center w-full h-[200px] animation-container">
      <div className="flex gap-8 infinite-slider">
        {sponsors.map((src, index) => (
          <div key={index} className="min-w-max flex-shrink-0 flex items-center">
            <Image src={src} alt={`Sponsor ${index + 1}`} width={300} height={100} layout="intrinsic" />
          </div>
        ))}
      </div>
      <div className="flex gap-8 infinite-slider">
        {sponsors.map((src, index) => (
          <div key={index} className="min-w-max flex-shrink-0 flex items-center">
            <Image src={src} alt={`Sponsor ${index + 1}`} width={300} height={100} layout="intrinsic" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
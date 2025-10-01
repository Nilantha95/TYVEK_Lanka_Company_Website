import React from 'react';

const LOGOS = ["Event Co. A", "University X", "Festival Y", "Corp. Z", "Lanka MICE", "Sports Day"];

const MarqueeLogos = () => {
  // Duplicate the array to ensure a seamless looping effect when using the CSS marquee animation
  const fullLogos = [...LOGOS, ...LOGOS]; 

  return (
    <section className="py-12 bg-[#242440] overflow-hidden border-y border-white/10">
      <h2 className="text-3xl font-bold text-[#FFD700] mb-8 text-center">
        TRUSTED BY SRI LANKA’S BEST EVENTS
      </h2>
      <div className="logo-marquee-container w-full whitespace-nowrap">
        {/* The 'animate-marquee' class is defined in globals.css */}
        <div className="logo-marquee animate-marquee inline-block">
          {fullLogos.map((logo, index) => (
            <span 
              key={index} 
              className="text-2xl font-bold px-10 text-white/60 hover:text-white transition duration-200 cursor-pointer inline-block"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeLogos;

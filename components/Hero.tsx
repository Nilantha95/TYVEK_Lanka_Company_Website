import React from 'react';

const Hero = () => {
  // Define custom styles for the wristband animation since Tailwind doesn't support animation-delay directly in Jsx
  // Added a third band and adjusted the delays for a smoother, continuous flow (15s duration / 3 bands = 5s delay separation)
  const bandStyle1 = { animation: 'rotateBand 15s infinite ease-in-out', animationDelay: '0s' };
  const bandStyle2 = { animation: 'rotateBand 15s infinite ease-in-out', animationDelay: '-5s' };
  const bandStyle3 = { animation: 'rotateBand 15s infinite ease-in-out', animationDelay: '-10s' }; // New band with a third delay point
  
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
      {/* Animated Background Overlay uses custom CSS class 'animate-flow' */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#00D1FF] to-[#FF4560] bg-[400%_400%] opacity-80 z-10 animate-flow"
      ></div>

      <div className="relative z-20 max-w-4xl px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-white drop-shadow-lg">
          SECURE YOUR EVENT.
          <span className="block text-4xl md:text-7xl font-bold mt-2 text-[#FFD700]">
            COLOR YOUR WORLD.
          </span>
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Official Tyvek Wristbands in Sri Lanka. Durable. Secure. Custom.
        </p>
        
        {/* Animated Wristband Visuals (requires rotateBand keyframe in globals.css) */}
        {/* Increased height (h-32) and perspective (perspective-[1500px]) for better visual of the bands */}
        <div className="flex justify-center my-8 h-32 perspective-[1500px]"> 
            <div 
                className="w-40 h-8 rounded-xl bg-cyan-400 absolute opacity-90 shadow-2xl" 
                style={bandStyle1}
            ></div>
            <div 
                className="w-40 h-8 rounded-xl bg-fuchsia-500 absolute opacity-90 shadow-2xl" 
                style={bandStyle2}
            ></div>
             <div 
                className="w-40 h-8 rounded-xl bg-[#FFD700] absolute opacity-90 shadow-2xl" // Gold color from brand accents
                style={bandStyle3}
            ></div>
        </div>

        <button 
          className="bg-[#FF4560] hover:bg-[#FF677D] text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:translate-y-[-3px]"
        >
          START CUSTOMIZING →
        </button>
      </div>
    </section>
  );
};

export default Hero;
import Image from "../public/next.svg"; // Keep Image just in case for future use
import Hero from "../components/Hero";
import Features from "../components/Features"; 
import MarqueeLogos from "../components/MarqueeLogos";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section (Animated Background, Big Headline) */}
      <Hero />
      
      {/* 2. Features Section (3 Colorful Cards) */}
      <Features />
      
      {/* 3. Events Showcase (Sliding Logo Marquee) */}
      <MarqueeLogos />

      {/* 4. Customization Call to Action */}
      <section className="text-center py-20 px-4 bg-[#10101C]">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-[#00D1FF]">
            MAKE IT YOUR OWN. INSTANTLY.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
            Use our instant online tool to upload your logo, choose from 20+ vibrant colors, and finalize your custom wristband order in minutes.
        </p>
        <button className="bg-[#FF4560] hover:bg-[#FF677D] text-white font-bold py-4 px-12 rounded-full text-xl md:text-2xl transition duration-300 transform hover:scale-105 shadow-2xl">
            LAUNCH DESIGN TOOL
        </button>
      </section>
      
    </>
  );
}
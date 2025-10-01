import React from 'react';

// Custom card component for reusability and hover effect
interface FeatureCardProps {
    title: string;
    description: string;
    icon: string;
    bgColor: string; // CSS gradient string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, bgColor }) => (
  <div 
    className={`p-10 rounded-xl shadow-xl transition duration-300 cursor-pointer transform hover:-translate-y-2 border-2 border-transparent hover:border-white/20`}
    style={{ background: bgColor }}
  >
    {/* Icon uses keyframe animation 'bounce' (must be defined in globals.css) */}
    <div className="text-5xl mb-4 leading-none animate-bounce">{icon}</div> 
    <h2 className="text-3xl font-bold mb-3">{title}</h2>
    <p className="text-gray-100 font-normal">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          title="Unbreakable Quality"
          description="100% WATERPROOF & TEAR-PROOF. Made for the toughest events."
          icon="💧"
          bgColor="linear-gradient(135deg, #00BFFF, #1E90FF)" // Electric Blue
        />
        <FeatureCard
          title="Vibrant Customization"
          description="Over 20 vibrant colors and unlimited design options. Make it yours!"
          icon="🎨"
          bgColor="linear-gradient(135deg, #FF69B4, #FF1493)" // Hot Pink
        />
        <FeatureCard
          title="Max Security"
          description="Serial numbered and tamper-evident for reliable access control."
          icon="🔒"
          bgColor="linear-gradient(135deg, #32CD32, #ADFF2F)" // Neon Green
        />
      </div>
    </section>
  );
};

export default Features;

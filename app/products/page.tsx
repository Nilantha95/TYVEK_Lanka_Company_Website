'use client' 
import React, { useState } from 'react';
import Link from 'next/link';
// NOTE: For a real app, replace this with a proper Next.js Image component and a suitable product image
const PRODUCT_IMAGE_PLACEHOLDER = 'https://placehold.co/600x400/00D1FF/1A1A2E?text=Tyvek+Wristband';

// --- Static Product Data for the Page (Sourced from Tyvek industry information) ---

const PRODUCT_FEATURES = [
    "Durable & Waterproof: Made from high-density polyethylene fibers (DuPont Tyvek®).",
    "Tear- & Stretch-Resistant: Much stronger than paper, ideal for active events.",
    "Non-Transferable Security: Tamper-resistant adhesive closure and security cuts prevent reuse.",
    "Comfortable & Lightweight: Designed for short-term wear (1-2 days).",
    "Sequentially Numbered: For added accountability and inventory control.",
    "Customizable: Can be printed with logos, text, barcodes, and full color."
];

const AVAILABLE_COLORS = [
    { name: 'Neon Green', hex: '#39ff14' },
    { name: 'Neon Blue', hex: '#4d4dff' },
    { name: 'Neon Orange', hex: '#ff6700' },
    { name: 'Neon Red', hex: '#ff3131' },
    { name: 'White', hex: '#ffffff' },
    { name: 'Black', hex: '#000000' },
    { name: 'Purple', hex: '#a020f0' },
    { name: 'Yellow', hex: '#ffff00' },
];

// Reusable component for color swatches
const ColorSwatch: React.FC<{ color: typeof AVAILABLE_COLORS[0], selected: boolean, onClick: () => void }> = ({ color, selected, onClick }) => (
    <div
        className={`w-8 h-8 rounded-full border-2 cursor-pointer transition duration-200 ${selected ? 'border-[#FFD700] ring-4 ring-[#FFD700]/50' : 'border-white/20'}`}
        style={{ backgroundColor: color.hex }}
        title={color.name}
        onClick={onClick}
    />
);


const ProductPage = () => {
    // FIX: Escaped the double quotes in the string state to resolve the react/no-unescaped-entities error.
    const [selectedWidth, setSelectedWidth] = useState('3/4" (19mm)');
    const [selectedColor, setSelectedColor] = useState(AVAILABLE_COLORS[0]);
    
    // Simple placeholder logic: LKR 350 per 100 bands
    const quantity = 500; 
    const price = (quantity / 100) * 350; 

    return (
        <div className="min-h-screen bg-[#1A1A2E] text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                
                {/* Product Header */}
                <h1 className="text-5xl md:text-6xl font-extrabold text-[#00D1FF] mb-12 border-b border-white/10 pb-4">
                    Tyvek® Event Wristband (Standard)
                </h1>

                {/* Main Product Grid (Image & Details) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Product Image and Visuals */}
                    <div className="relative">
                        <img 
                            src={PRODUCT_IMAGE_PLACEHOLDER} 
                            alt="Tyvek Wristband" 
                            className="w-full h-auto rounded-xl shadow-2xl transition duration-500 hover:scale-[1.02]"
                        />
                        <p className="mt-4 text-center text-sm text-gray-400">
                            *Visual is for representation. Final product is based on custom design.
                        </p>
                    </div>

                    {/* Product Selection / Order Form */}
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold text-[#FF4560]">
                            LKR {price.toLocaleString('en-US')}.00
                            <span className="text-lg font-normal text-gray-400 block mt-1">
                                (Est. price for {quantity} units)
                            </span>
                        </h2>

                        {/* Size Selection */}
                        <div className="space-y-4 p-6 bg-[#10101C] rounded-lg shadow-inner">
                            <h3 className="text-2xl font-semibold text-[#FFD700]">1. Choose Width</h3>
                            <div className="flex space-x-4">
                                <button 
                                    onClick={() => setSelectedWidth('3/4" (19mm)')}
                                    className={`py-3 px-6 rounded-lg font-medium transition duration-200 ${selectedWidth === '3/4" (19mm)' ? 'bg-[#FF4560] text-white border-2 border-[#FFD700]' : 'bg-gray-700 hover:bg-gray-600'}`}
                                >
                                    {/* FIX: Escaped the quotes */}
                                    3/4&quot; (19mm) - Standard
                                </button>
                                <button
                                    onClick={() => setSelectedWidth('1" (25mm)')}
                                    className={`py-3 px-6 rounded-lg font-medium transition duration-200 ${selectedWidth === '1" (25mm)' ? 'bg-[#FF4560] text-white border-2 border-[#FFD700]' : 'bg-gray-700 hover:bg-gray-600'}`}
                                >
                                    {/* FIX: Escaped the quotes */}
                                    1&quot; (25mm) - Max Print Area
                                </button>
                            </div>
                            <p className="text-sm text-gray-400 italic">
                                Length is adjustable and fits all wrists (approx. 10 inches long).
                            </p>
                        </div>
                        
                        {/* Color Selection */}
                        <div className="space-y-4 p-6 bg-[#10101C] rounded-lg shadow-inner">
                            <h3 className="text-2xl font-semibold text-[#FFD700]">2. Pick a Color</h3>
                            <div className="flex flex-wrap gap-4">
                                {AVAILABLE_COLORS.map((color) => (
                                    <ColorSwatch 
                                        key={color.name}
                                        color={color}
                                        selected={selectedColor.name === color.name}
                                        onClick={() => setSelectedColor(color)}
                                    />
                                ))}
                                <Link href="/customize" className="text-[#00D1FF] hover:text-[#FF4560] self-center ml-2 text-sm font-semibold transition duration-200">
                                    +20 More Colors Available
                                </Link>
                            </div>
                            <p className="text-sm text-gray-400">
                                Currently selected: <span className="font-semibold text-white">{selectedColor.name}</span>
                            </p>
                        </div>

                        {/* Customization CTA */}
                        <div className="pt-4">
                            <h3 className="text-3xl font-extrabold text-[#FF4560] mb-4">Ready to Order?</h3>
                            <p className="text-lg text-gray-300 mb-6">
                                Upload your logo, add text, and see a live preview in our Design Tool. All orders include sequential numbering.
                            </p>
                            <Link href="/customize">
                                <button 
                                    className="w-full py-4 bg-[#FF4560] hover:bg-[#FF677D] text-white font-bold rounded-xl text-xl transition duration-300 transform hover:scale-[1.01] shadow-2xl"
                                >
                                    <span className="inline-block animate-pulse-slow">🚀</span> START CUSTOM DESIGN NOW
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Detailed Features Section */}
                <div className="mt-20 p-8 bg-[#10101C] rounded-xl shadow-2xl">
                    <h2 className="text-4xl font-extrabold text-[#00D1FF] mb-8">CORE PRODUCT FEATURES</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-lg">
                        {PRODUCT_FEATURES.map((feature, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <span className="text-2xl text-[#FFD700] font-bold mt-1">✓</span>
                                <p className="text-gray-200">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Use Cases / Applications */}
                <div className="mt-16 text-center">
                    <h2 className="text-4xl font-extrabold text-[#FFD700] mb-8">PERFECT FOR ANY EVENT</h2>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                        Tyvek wristbands are the secure and cost-effective identification solution for any short-term event (1-2 days), including:
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-6">
                        {['Festivals & Concerts', 'Water Parks & Pools', 'Night Clubs & Bars (21+ ID)', 'School Trips & Field Days', 'Hospitals & Medical Centers', 'Trade Shows & Conferences'].map((useCase) => (
                            <span 
                                key={useCase} 
                                className="px-5 py-2 bg-white/10 rounded-full text-white font-medium hover:bg-[#FF4560] transition duration-200 cursor-default"
                            >
                                {useCase}
                            </span>
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-4">Based on common applications for Tyvek wristbands.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
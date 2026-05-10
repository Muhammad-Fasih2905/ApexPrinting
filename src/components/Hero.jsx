import React from 'react';
import { heroSectionImages } from '../data/products';
import HomePage from '../assets/HomePage.png';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative flex items-center overflow-hidden pt-[85px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HomePage}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Background decorative elements (kept but adjusted) */}
            {/* <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[clamp(180px,22vw,380px)] text-white/5 pointer-events-none tracking-tighter z-0">APEX</div> */}

            <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-[5%] grid md:grid-cols-2 gap-16 items-center w-full">
                {/* Left Column - Text Content */}
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 my-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse"></span>
                        Premium Printing Solutions
                    </div>
                    <h1 className="font-['Playfair_Display'] text-white text-[clamp(2.8rem,5vw,5rem)] font-black leading-tight mb-4">
                        Where <span className="bg-gradient-to-r from-[#60a5fa] to-[#c8d8f0] bg-clip-text text-transparent">Quality</span> Meets Precision Printing
                    </h1>
                    <p className="text-white/90 text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                        From business cards to booklets, brochures to paper bags — Apex delivers print materials that elevate your brand and leave a lasting impression.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                        <a href="#products" className="btn-hero-primary">Explore Products</a>
                        <a href="#contact" className="btn-hero-ghost">Get a Quote</a>
                    </div>
                    <div className="flex flex-col my-3 sm:flex-row gap-6 justify-center md:justify-start">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                            <div className="font-['Bebas_Neue'] text-white text-3xl">500+</div>
                            <div className="text-white/80 text-xs tracking-wide">Happy Clients</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                            <div className="font-['Bebas_Neue'] text-white text-3xl">12+</div>
                            <div className="text-white/80 text-xs tracking-wide">Product Lines</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                            <div className="font-['Bebas_Neue'] text-white text-3xl">100%</div>
                            <div className="text-white/80 text-xs tracking-wide">Quality Assured</div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Image Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {heroSectionImages && heroSectionImages.map((img, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center transition-transform hover:-translate-y-2 hover:scale-105 duration-300">
                            <img
                                src={img}
                                className="w-full h-32 object-cover rounded-lg mb-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
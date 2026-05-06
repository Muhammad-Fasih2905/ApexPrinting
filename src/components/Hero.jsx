import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-[#0a1f6b] via-[#1a3eb8] to-[#2563eb] flex items-center relative overflow-hidden pt-[85px]">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(96,165,250,0.18)_0%,transparent_70%)]"></div>
            <div className="absolute right-[-2%] top-1/2 -translate-y-1/2 font-['Bebas_Neue'] text-[clamp(180px,22vw,380px)] text-white/5 pointer-events-none tracking-tighter">APEX</div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:60px_60px]"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-[5%] grid md:grid-cols-2 gap-16 items-center">
                <div className="text-center md:text-left">
                    <div className="inline-flex items-center gap-2 my-3 bg-white/20 border border-white/30 text-[#c8d8f0] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa] animate-pulse"></span> Premium Printing Solutions
                    </div>
                    <h1 className="font-['Playfair_Display'] text-white text-[clamp(2.8rem,5vw,5rem)] font-black leading-tight mb-4">
                        Where <span className="bg-gradient-to-r from-[#60a5fa] to-[#c8d8f0] bg-clip-text text-transparent">Quality</span> Meets Precision Printing
                    </h1>
                    <p className="text-white/75 text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                        From business cards to booklets, brochures to paper bags — Apex delivers print materials that elevate your brand and leave a lasting impression.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                        <a href="#products" className="btn-hero-primary">Explore Products</a>
                        <a href="#contact" className="btn-hero-ghost">Get a Quote</a>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center py-3 md:justify-start">
                        <div><div className="font-['Bebas_Neue'] text-white text-3xl">500+</div><div className="text-white/60 text-xs tracking-wide">Happy Clients</div></div>
                        <div><div className="font-['Bebas_Neue'] text-white text-3xl">12+</div><div className="text-white/60 text-xs tracking-wide">Product Lines</div></div>
                        <div><div className="font-['Bebas_Neue'] text-white text-3xl">100%</div><div className="text-white/60 text-xs tracking-wide">Quality Assured</div></div>
                    </div>
                </div>
                {/* <div className="hidden md:grid grid-cols-2 gap-4">
                    {['📘', '📚', '🛍️', '📋'].map((icon, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center transition-transform hover:-translate-y-1">
                            <div className="text-4xl mb-2">{icon}</div>
                            <div className="text-white/85 text-xs font-semibold tracking-wide uppercase">
                                {['Brochures', 'Booklets', 'Paper Bags', 'NCR Forms'][idx]}
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
};

export default Hero;
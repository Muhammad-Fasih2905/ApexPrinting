import React from 'react';

const ProcessSection = () => {
    return (
        <section id="process" className="py-20 px-5 md:px-[5%] bg-[#0a1f6b]">
            <div className="text-center mb-16 reveal">
                <div className="text-[#60a5fa] text-xs font-semibold tracking-[0.15em] uppercase mb-2">How It Works</div>
                <h2 className="font-['Playfair_Display'] text-white text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">Simple. Fast. Perfect.</h2>
                <p className="text-white/60 text-base max-w-lg mx-auto mt-3">From order to delivery in four effortless steps.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {[
                    { num: '01', icon: '📋', title: 'Choose Your Product', desc: 'Browse our catalog and select the product and specifications that fit your needs.' },
                    { num: '02', icon: '🎨', title: 'Upload Your Design', desc: 'Submit your artwork or work with our design team to create something extraordinary.' },
                    { num: '03', icon: '✅', title: 'Approve & Pay', desc: 'Review your digital proof, approve it, and complete your secure payment in minutes.' },
                    { num: '04', icon: '📦', title: 'Fast Delivery', desc: 'Your premium prints are produced and shipped directly to your door on time.' }
                ].map(step => (
                    <div key={step.num} className="text-center reveal">
                        <div className="font-['Bebas_Neue'] text-6xl text-white/10 leading-none mb-2">{step.num}</div>
                        <div className="w-14 h-14 mx-auto mb-4 border-2 border-blue-400/40 rounded-full flex items-center justify-center text-2xl">{step.icon}</div>
                        <div className="text-white font-bold text-base mb-2">{step.title}</div>
                        <p className="text-white/55 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProcessSection;
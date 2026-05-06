import React, { useEffect } from 'react';

const WhyApex = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="why-apex" className="py-20 px-5 md:px-[5%]">
            <div className="text-center mb-16 reveal">
                <div className="text-[#2563eb] text-xs font-semibold tracking-[0.15em] uppercase mb-2">Why Choose Us</div>
                <h2 className="font-['Playfair_Display'] text-[#0a1f6b] text-[clamp(2rem,4vw,3rem)] font-bold leading-tight">The Apex Difference</h2>
                <p className="text-[#64748b] text-base max-w-lg mx-auto mt-3">Professional print solutions crafted with meticulous attention to quality, color accuracy, and on-time delivery.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {[
                    { icon: '🎨', title: 'Vibrant Color Accuracy', desc: 'State-of-the-art CMYK and Pantone printing ensures your brand colors are reproduced exactly as intended.' },
                    { icon: '⚡', title: 'Fast Turnaround', desc: 'Rush orders and standard timelines — we deliver on schedule without compromising on quality.' },
                    { icon: '💎', title: 'Premium Materials', desc: 'From 300 GSM luxury cardstock to 450+ GSM specialty paper — only the finest materials make the cut.' },
                    { icon: '🛡️', title: 'Quality Guaranteed', desc: 'Every order undergoes rigorous quality inspection. Not satisfied? We reprint at no extra cost.' }
                ].map((feat, i) => (
                    <div key={i} className="text-center reveal">
                        <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-[#1a3eb8] to-[#2563eb] rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-500/30">{feat.icon}</div>
                        <div className="font-['Playfair_Display'] text-[#0a1f6b] font-bold text-lg mb-2">{feat.title}</div>
                        <p className="text-[#64748b] text-sm leading-relaxed">{feat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyApex;
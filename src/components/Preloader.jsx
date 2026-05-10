import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade-out after 2.5 seconds
        const timer = setTimeout(() => {
            setFadeOut(true);
            // Wait for fade-out animation to complete (0.5s) then call onComplete
            setTimeout(() => {
                onComplete();
            }, 500);
        }, 2500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0a1f6b] via-[#1a3eb8] to-[#2563eb] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <div className="text-center animate-fade-in-up">
                {/* Logo Text Animation */}
                <div className="mb-6 animate-bounce-slow">
                    <div className="text-7xl md:text-8xl font-['Bebas_Neue'] text-white tracking-wider animate-pulse">
                        APEX
                    </div>
                    <div className="text-sm md:text-base font-semibold text-[#60a5fa] tracking-[0.2em] uppercase mt-2 animate-pulse delay-150">
                        PRINTING SOLUTIONS
                    </div>
                </div>

                {/* Loading Spinner */}
                <div className="mt-8 flex justify-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>

                {/* Loading Text */}
                <p className="text-white/70 text-sm mt-6 font-light tracking-wide animate-pulse">
                    Crafting excellence...
                </p>
            </div>
        </div>
    );
};

export default Preloader;
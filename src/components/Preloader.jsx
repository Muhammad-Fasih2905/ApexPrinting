import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';

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
                {/* Logo Animation */}
                <div className="mb-6 animate-bounce-slow">
                    {/* <div className="flex items-center"> */}
                        <img
                            src={Logo}
                            className="h-50 md:h-50 w-auto object-contain"
                        />
                    {/* </div> */}
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